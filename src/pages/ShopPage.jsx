import { allProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function ShopPage() {
  return (
    <main className="pt-24 min-h-screen">
      <section className="px-4 sm:px-6 lg:px-20 py-8 sm:py-12 text-center max-w-4xl mx-auto">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] opacity-50 block mb-3 sm:mb-4 text-primary">
          Browsing All
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-light leading-tight mb-6 sm:mb-8 px-4">
          The Complete Collection
        </h1>
        <p className="text-base sm:text-lg opacity-80 font-sans font-light leading-relaxed max-w-2xl mx-auto px-4">
          Explore our full range of rare specimens, from architectural giants to
          delicate textures. Each plant is hand-selected for its vitality and
          form.
        </p>
      </section>

      {/* Premium Toolbar */}
      <div className="sticky top-16 sm:top-20 z-40 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 mb-12 sm:mb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-60">
            {allProducts.length} Specimens
          </span>

          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2 border border-black/10 dark:border-white/10 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group tap-highlight-none active:scale-95">
              Filter
              <span className="text-sm">⚙️</span>
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2 border border-black/10 dark:border-white/10 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group tap-highlight-none active:scale-95">
              Sort
              <span className="text-sm">↕️</span>
            </button>
          </div>
        </div>
      </div>

      <section className="px-4 sm:px-6 lg:px-20 pb-16 sm:pb-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-12 sm:gap-y-16">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
