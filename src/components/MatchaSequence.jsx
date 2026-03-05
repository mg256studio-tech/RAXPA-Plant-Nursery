import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";

export default function MatchaSequence({ scrollRef }) {
  const canvasRef = useRef(null);
  const [frames, setFrames] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Scroll logic: track scroll of the PARENT Hero section
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.5,
    stiffness: 80,
    damping: 20,
  });

  // Generate frame list from imported sequence images
  useEffect(() => {
    // Create array of frame names (ezgif-frame-001.jpg to ezgif-frame-120.jpg)
    const frameNames = Array.from({ length: 120 }, (_, i) => {
      const num = String(i + 1).padStart(3, "0");
      return `ezgif-frame-${num}.jpg`;
    });
    setFrames(frameNames);
    console.log(`✅ Loaded ${frameNames.length} frame names for animation`);
  }, []);

  // Preload images
  useEffect(() => {
    if (frames.length === 0) return;

    let loadedCount = 0;
    const loadedImages = [];
    let successCount = 0;
    let failCount = 0;

    frames.forEach((frame) => {
      const img = new Image();
      img.src = `/matcha_img_seq/${frame}`;

      img.onload = () => {
        successCount++;
        loadedCount++;
        setLoadProgress((successCount / frames.length) * 100);
        if (loadedCount === frames.length) {
          console.log(
            `✅ Loaded ${successCount}/${frames.length} frames successfully`,
          );
          if (failCount > 0) {
            console.warn(`⚠️ Failed to load ${failCount} frames`);
          }
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        failCount++;
        loadedCount++;
        setLoadProgress((loadedCount / frames.length) * 100);
        console.warn(`⚠️ Failed to load frame: ${frame}`);
        if (loadedCount === frames.length) {
          console.log(
            `✅ Frame loading complete: ${successCount} successful, ${failCount} failed`,
          );
          setIsLoaded(true);
        }
      };

      loadedImages.push(img);
    });

    setImages(loadedImages);
  }, [frames]);

  const lastRenderedIndex = useRef(-1);

  // Transform scroll progress (0-1) to frame index (0 - totalFrames-1)
  const currentIndex = useTransform(
    smoothProgress,
    [0, 1],
    [0, frames.length - 1],
  );

  // Render to canvas on scroll change
  useMotionValueEvent(currentIndex, "change", (latest) => {
    if (!canvasRef.current || !isLoaded || images.length === 0) return;

    const frameIndex = Math.min(
      Math.max(Math.floor(latest), 0),
      frames.length - 1,
    );

    // Optimization: Only redraw if the frame has actually changed
    if (frameIndex === lastRenderedIndex.current) return;
    lastRenderedIndex.current = frameIndex;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = images[frameIndex];

    if (img && img.complete) {
      requestAnimationFrame(() => {
        // Calculate aspect ratio to cover
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgRatio > canvasRatio) {
          drawHeight = canvas.height;
          drawWidth = img.width * (canvas.height / img.height);
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = canvas.width;
          drawHeight = img.height * (canvas.width / img.width);
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      });
    }
  });

  // Initial render when loaded
  useEffect(() => {
    if (isLoaded && canvasRef.current && images.length > 0) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (ctx) {
        const dpr = Math.min(window.devicePixelRatio, 1.5);
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        const img = images[0];
        if (img && img.complete) {
          const canvasRatio = canvas.width / canvas.height;
          const imgRatio = img.width / img.height;
          let drawWidth, drawHeight, offsetX, offsetY;

          if (imgRatio > canvasRatio) {
            drawHeight = canvas.height;
            drawWidth = img.width * (canvas.height / img.height);
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
          } else {
            drawWidth = canvas.width;
            drawHeight = img.height * (canvas.width / img.width);
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
          }

          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
          console.log(`✅ Canvas initialized and first frame rendered`);
        }
      }
    }
  }, [isLoaded, images]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && images.length > 0) {
        const canvas = canvasRef.current;
        const dpr = Math.min(window.devicePixelRatio, 1.5);
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ display: "block" }}
      />
      {/* Loading indicator (can be hidden later) */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="text-white text-center">
            <p className="text-sm mb-2">Loading animation...</p>
            <p className="text-xs opacity-75">{Math.round(loadProgress)}%</p>
          </div>
        </div>
      )}
    </>
  );
}
