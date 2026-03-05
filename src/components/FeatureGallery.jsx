import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function FeatureGallery() {
  const imageRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-16 sm:py-20 md:py-32 bg-petal-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start lg:items-center">
        {/* Image Section */}
        <div
          ref={imageRef}
          className="relative group cursor-pointer opacity-0 order-2 lg:order-1 tap-highlight-none"
        >
          <div className="aspect-[4/5] overflow-hidden relative grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 rounded-lg shadow-lg">
            <img
              alt="Variegated Monstera Albo"
              src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=2664&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg"
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Content Section */}
        <div
          ref={contentRef}
          className="flex flex-col gap-6 sm:gap-8 md:gap-10 opacity-0 order-1 lg:order-2"
        >
          {/* Header */}
          <div className="space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] opacity-60 text-primary block">
              Specimen 012 — Feature
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-balance">
              Monstera <br className="hidden sm:block" /> Albo Borsigiana
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-75 font-serif">
              A masterpiece of nature, featuring striking white sectoral
              variegation that makes every leaf a unique work of art.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-75 font-serif">
              Sourced from the heart of tropical rainforests, explicitly
              acclimated for indoor sanctuaries.
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 border-y border-jet-black/10">
            <div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest opacity-70 text-jet-black/60 mb-1 sm:mb-2 md:mb-3">
                Origin
              </p>
              <p className="font-display font-semibold text-base sm:text-lg md:text-xl">
                Central America
              </p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest opacity-70 text-jet-black/60 mb-1 sm:mb-2 md:mb-3">
                Water
              </p>
              <p className="font-display font-semibold text-base sm:text-lg md:text-xl">
                Weekly
              </p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest opacity-70 text-jet-black/60 mb-1 sm:mb-2 md:mb-3">
                Light
              </p>
              <p className="font-display font-semibold text-base sm:text-lg md:text-xl">
                Bright Indirect
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="btn-primary w-full sm:w-fit tap-highlight-none active:scale-95">
            View Specimen Details
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
