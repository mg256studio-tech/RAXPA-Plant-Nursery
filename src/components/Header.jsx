import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingBag, Menu, X, Search, ChevronDown } from "lucide-react";

export default function Header() {
  const { openDrawer, cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const element = document.getElementById("services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#services");
    }
  };

  const collections = [
    { id: "indoor", name: "Indoor Collection" },
    { id: "outdoor", name: "Outdoor Collection" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-jet-black/10 bg-jet-black text-petal-white backdrop-blur-md px-4 sm:px-6 lg:px-20 py-3 sm:py-4 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 sm:gap-8 lg:gap-12">
            <Link
              className="flex items-center gap-2 group tap-highlight-none"
              to="/"
            >
              <span className="text-primary text-2xl sm:text-3xl transition-transform duration-500 group-hover:rotate-12">
                🌿
              </span>
              <span className="text-lg sm:text-xl font-bold tracking-tighter uppercase text-petal-white">
                VEDANTA
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link
                className="text-xs font-semibold uppercase tracking-widest text-petal-white hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                to="/shop"
              >
                Shop All
              </Link>

              {/* Collections Dropdown */}
              <div className="relative group">
                <button
                  className="text-xs font-semibold uppercase tracking-widest text-petal-white hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full flex items-center gap-2"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Collections
                  <ChevronDown size={14} className="group-hover:text-primary" />
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-jet-black border border-jet-black/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-2">
                  {collections.map((collection) => (
                    <Link
                      key={collection.id}
                      to={`/collection/${collection.id}`}
                      className="block px-6 py-3 text-sm font-semibold uppercase tracking-widest text-petal-white hover:text-primary hover:bg-jet-black/50 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {collection.name}
                    </Link>
                  ))}
                </div>
              </div>

              <button
                onClick={handleServicesClick}
                className="text-xs font-semibold uppercase tracking-widest text-petal-white hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname === "/") {
                    const element = document.getElementById("testimonials");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate("/#testimonials");
                  }
                }}
                className="text-xs font-semibold uppercase tracking-widest text-petal-white hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                Stories
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <div className="hidden sm:flex items-center bg-petal-white/10 rounded-full px-3 sm:px-4 py-1.5 focus-within:ring-1 focus-within:ring-primary/50 transition-all duration-300">
              <Search size={16} className="text-petal-white/50 flex-shrink-0" />
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-24 sm:w-32 lg:w-48 placeholder:text-petal-white/40 text-petal-white transition-all"
                placeholder="Search..."
                type="text"
              />
            </div>

            <button
              onClick={openDrawer}
              className="flex items-center gap-1 group relative text-petal-white hover:text-primary transition-colors duration-300 p-2 tap-highlight-none"
              aria-label="Shopping cart"
            >
              <ShoppingBag
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              {cartCount > 0 && (
                <span className="text-[10px] font-bold bg-primary text-jet-black rounded-full min-w-[16px] h-4 flex items-center justify-center absolute -top-0 -right-0 animate-bounce px-1">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden text-petal-white p-2 tap-highlight-none active:scale-95 transition-transform"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Outside header for full screen coverage */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-jet-black backdrop-blur-xl overflow-y-auto">
          <div className="min-h-screen flex flex-col justify-center items-center text-petal-white py-20 px-6">
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-petal-white/10 hover:bg-petal-white/20 transition-colors text-petal-white tap-highlight-none active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col gap-8 text-center w-full max-w-md">
              <Link
                className="text-3xl sm:text-4xl font-display font-medium hover:text-primary transition-colors duration-300 tap-highlight-none active:scale-95"
                to="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop All
              </Link>
              <div>
                <button
                  className="text-3xl sm:text-4xl font-display font-medium hover:text-primary transition-colors duration-300 mb-6 tap-highlight-none active:scale-95 flex items-center justify-center gap-2 mx-auto"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Collections
                  <ChevronDown
                    size={24}
                    className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`flex flex-col gap-4 transition-all duration-300 overflow-hidden ${isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  {collections.map((collection) => (
                    <Link
                      key={collection.id}
                      className="text-xl sm:text-2xl font-serif italic opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300 tap-highlight-none"
                      to={`/collection/${collection.id}`}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {collection.name}
                    </Link>
                  ))}
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  if (location.pathname === "/") {
                    const element = document.getElementById("services");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate("/#services");
                  }
                }}
                className="text-3xl sm:text-4xl font-display font-medium hover:text-primary transition-colors duration-300 cursor-pointer tap-highlight-none active:scale-95"
              >
                Services
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  if (location.pathname === "/") {
                    const element = document.getElementById("testimonials");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate("/#testimonials");
                  }
                }}
                className="text-3xl sm:text-4xl font-display font-medium hover:text-primary transition-colors duration-300 cursor-pointer tap-highlight-none active:scale-95"
              >
                Stories
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
