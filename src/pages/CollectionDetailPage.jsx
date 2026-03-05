import { useParams } from "react-router-dom";
import { collectionsData } from "../data/products";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function CollectionDetailPage() {
  const { id } = useParams();
  const collection = collectionsData[id];

  if (!collection) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-4xl font-display">Collection not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center text-center px-4 sm:px-6"
        style={{
          backgroundImage: `url(${collection.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="z-10 max-w-4xl pt-16 sm:pt-20 text-white">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] opacity-80 block mb-4 sm:mb-6">
            {collection.feature}
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-medium leading-[1.1] tracking-tight mb-4 sm:mb-6 px-4">
            {collection.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-serif italic mb-8 sm:mb-10 px-4">
            {collection.subtitle}
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="px-4 sm:px-6 lg:px-20 py-16 sm:py-24 bg-petal-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 border-b border-black/5 pb-4 sm:pb-6 gap-4 sm:gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display mb-1">
                {collection.products.length} Specimens
              </h2>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-50">
                Curated Selection
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2 border border-black/10 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 tap-highlight-none active:scale-95">
                Filter
                <span className="text-sm">⚙️</span>
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2 border border-black/10 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 tap-highlight-none active:scale-95">
                Sort
                <span className="text-sm">↕️</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-12 sm:gap-y-16">
            {collection.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
