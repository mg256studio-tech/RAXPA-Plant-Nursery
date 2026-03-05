import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollContainerRef.current) {
        const currentScroll = scrollContainerRef.current.scrollLeft;
        scrollContainerRef.current.scrollLeft = currentScroll + e.deltaY * 2;
        e.preventDefault();
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => {
        container.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="w-full overflow-x-auto scrollbar-hide"
      style={{ scrollBehavior: "smooth" }}
    >
      {children}
    </div>
  );
}
