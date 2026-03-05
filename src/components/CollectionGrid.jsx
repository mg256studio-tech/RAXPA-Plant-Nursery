import { Link } from "react-router-dom";
import { collectionsData } from "../data/products";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function CollectionGrid() {
  const headerRef = useScrollAnimation();

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-16 sm:py-20 md:py-32 bg-petal-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-24 gap-6 sm:gap-8 opacity-0"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-balance mb-0">
              Seasonal <br className="hidden sm:block" /> Curations
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-primary hover:opacity-70 transition-all duration-300 inline-flex items-center gap-2 hover:gap-3 whitespace-nowrap tap-highlight-none"
          >
            View All Collections
            <span>→</span>
          </Link>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Indoor Collection - Large */}
          <Link
            to="/collection/indoor"
            className="md:col-span-8 group cursor-pointer block hover-lift tap-highlight-none"
            style={{
              animation: `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards`,
              opacity: 0,
            }}
          >
            <div className="aspect-[16/10] overflow-hidden mb-4 sm:mb-5 md:mb-6 relative rounded-lg shadow-lg grayscale-[15%] group-hover:grayscale-0 transition-all duration-700">
              <img
                alt="Collection of lush indoor floor plants"
                src={collectionsData.indoor.heroImage}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex justify-between items-start gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                  Architectural Indoor
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-60 font-serif">
                  Statement pieces for the modern interior
                </p>
              </div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform flex-shrink-0 hidden sm:block">
                Explore →
              </span>
            </div>
          </Link>

          {/* Outdoor Collection - Medium */}
          <Link
            to="/collection/outdoor"
            className="md:col-span-4 group cursor-pointer block hover-lift md:mt-16 tap-highlight-none"
            style={{
              animation: `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards`,
              opacity: 0,
            }}
          >
            <div className="aspect-[3/4] overflow-hidden mb-4 sm:mb-5 md:mb-6 relative rounded-lg shadow-lg grayscale-[15%] group-hover:grayscale-0 transition-all duration-700">
              <img
                alt="Zen garden style outdoor plants"
                src={collectionsData.outdoor.heroImage}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex justify-between items-start gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                  Hardy Outdoor
                </h3>
                <p className="text-xs sm:text-sm md:text-base opacity-60 font-serif">
                  Resilient species for any climate
                </p>
              </div>
            </div>
          </Link>

          {/* Small Collections Grid */}
          <div
            className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12"
            style={{
              animation: `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards`,
              opacity: 0,
            }}
          >
            {[
              {
                to: "/collection/desert",
                title: "Desert Gems",
                alt: "Succulent and cactus collection",
                img: collectionsData.desert.heroImage,
              },
              {
                to: "/collection/textures",
                title: "Botanic Textures",
                alt: "Detailed texture of a plant leaf",
                img: collectionsData.textures.heroImage,
              },
              {
                to: "/collection/vines",
                title: "Trailing Vines",
                alt: "Hanging vines and pothos",
                img: collectionsData.vines.heroImage,
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="group cursor-pointer block hover-lift tap-highlight-none"
              >
                <div className="aspect-square overflow-hidden mb-3 sm:mb-4 relative rounded-lg shadow-md grayscale-[15%] group-hover:grayscale-0 transition-all duration-700">
                  <img
                    alt={item.alt}
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-display font-bold group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
