import { useParams, useNavigate, Link } from "react-router-dom";
import { allProducts } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { useState } from "react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate("/shop")}
            className="text-primary hover:underline text-lg"
          >
            Back to Shop
          </button>
        </div>
      </main>
    );
  }

  // Find related products
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const toggleAccordion = (id) => {
    setExpandedAccordion(expandedAccordion === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-petal-white pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        {/* Breadcrumb */}
        <nav className="flex items-center text-[10px] sm:text-xs uppercase tracking-widest opacity-60 mb-8 sm:mb-12 space-x-2 flex-wrap">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-start">
          {/* Product Image Section */}
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-100 shadow-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Product Details Section */}
          <div className="lg:sticky lg:top-32 flex flex-col h-full justify-center">
            {product.tag && (
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 sm:mb-6 w-fit rounded-sm">
                {product.tag}
              </span>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-light leading-[1.1] mb-3 sm:mb-4 text-balance">
              {product.name}
            </h1>

            <p className="text-xl sm:text-2xl font-sans font-light opacity-80 mb-6 sm:mb-8 border-b border-neutral-200 pb-6 sm:pb-8">
              {product.price}
            </p>

            <div className="prose prose-base sm:prose-lg dark:prose-invert font-sans font-light text-neutral-600 mb-8 sm:mb-10 leading-relaxed max-w-none">
              <p>{product.description}</p>
              <p>
                This specimen has been selected for its exceptional form and
                vitality. Perfect for adding a touch of{" "}
                {product.category === "outdoor"
                  ? "natural grandeur"
                  : "organic elegance"}{" "}
                to your curated space.
              </p>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-jet-black dark:bg-white text-white dark:text-jet-black py-4 px-8 text-sm uppercase tracking-widest hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 flex items-center justify-center gap-3 group mb-12"
            >
              <span>Add to Collection</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            {/* Accordion Sections */}
            <div className="border-t border-neutral-200">
              <button
                onClick={() => toggleAccordion("care")}
                className="w-full py-4 flex justify-between items-center cursor-pointer group hover:opacity-70 transition-opacity border-b border-neutral-200"
              >
                <span className="text-xs uppercase tracking-widest font-medium">
                  Care Instructions
                </span>
                <span
                  className={`transition-transform ${expandedAccordion === "care" ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {expandedAccordion === "care" && (
                <div className="py-4 opacity-70 text-sm leading-relaxed">
                  <p className="mb-2">Light: Bright, indirect light</p>
                  <p className="mb-2">Water: When soil is 50% dry</p>
                  <p>Humidity: Moderate to high</p>
                </div>
              )}

              <button
                onClick={() => toggleAccordion("shipping")}
                className="w-full py-4 flex justify-between items-center cursor-pointer group hover:opacity-70 transition-opacity border-b border-neutral-200"
              >
                <span className="text-xs uppercase tracking-widest font-medium">
                  Shipping & Returns
                </span>
                <span
                  className={`transition-transform ${expandedAccordion === "shipping" ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {expandedAccordion === "shipping" && (
                <div className="py-4 opacity-70 text-sm leading-relaxed">
                  <p className="mb-2">Free shipping on orders over $75</p>
                  <p className="mb-2">30-day money-back guarantee</p>
                  <p>Plants arrive well-packaged and healthy</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-32 border-t border-neutral-200 pt-20">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-display">Curated For You</h2>
              <Link
                to="/shop"
                className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-primary hover:border-primary transition-colors"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
}
