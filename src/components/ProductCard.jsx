import { useCart } from "../context/CartContext";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Link
      to={`/product/${product.id}`}
      className="group cursor-pointer block tap-highlight-none"
    >
      <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-md mb-3 sm:mb-4 relative transition-all duration-500 group-hover:shadow-xl group-hover:shadow-black/10 bg-gray-100">
        <img
          alt={product.name}
          src={product.image}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] lazy"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-2">
          {product.tag && (
            <span className="bg-white/90 text-jet-black px-2 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
              {product.tag}
            </span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md text-jet-black py-3 sm:py-4 uppercase text-[10px] sm:text-xs font-bold tracking-widest flex items-center justify-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] hover:bg-jet-black hover:text-white z-10 tap-highlight-none active:scale-95"
          aria-label="Add to cart"
        >
          <ShoppingBag size={14} className="sm:size-4" />
          Add to Cart
        </button>
      </div>
      <h3 className="text-lg sm:text-xl font-display font-medium leading-tight mb-1 group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      <p className="text-[10px] sm:text-xs uppercase tracking-widest opacity-60 font-sans mb-1 sm:mb-2 line-clamp-1">
        {product.description}
      </p>
      <p className="font-sans font-light text-base sm:text-lg">
        {product.price}
      </p>
    </Link>
  );
}
