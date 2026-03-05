import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Footer() {
  const [email, setEmail] = useState("");
  const headerRef = useScrollAnimation();

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="bg-background-dark text-petal-white">
      {/* Newsletter Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-16 sm:py-20 md:py-32 text-center">
        <div ref={headerRef} className="mb-10 sm:mb-12 md:mb-16 opacity-0">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 px-4">
            Cultivate Growth
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-75 font-serif italic max-w-2xl mx-auto px-4">
            Receive biweekly care guides, expert tips, and early access to our
            rarest arrivals directly to your inbox.
          </p>
        </div>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubscribe}
          className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 mb-12 sm:mb-16 md:mb-20 animate-fade-in-up animate-delay-1"
        >
          <div className="relative flex-1">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white py-3 sm:py-4 px-4 sm:px-6 transition-all duration-300 hover:bg-white/10 placeholder:text-white/40 text-sm sm:text-base"
              placeholder="Your email address"
              type="email"
              required
            />
          </div>
          <button
            type="submit"
            className="btn-primary font-bold text-xs sm:text-sm md:text-base px-6 sm:px-8 md:px-10 py-3 sm:py-4 whitespace-nowrap tap-highlight-none active:scale-95"
          >
            Subscribe
          </button>
        </form>

        {/* Gradient Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12 sm:mb-16 md:mb-20 animate-fade-in-up animate-delay-2"></div>

        {/* Footer Links Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-left mb-16 sm:mb-20 md:mb-24">
          {/* Explore */}
          <div className="flex flex-col gap-4 md:gap-6 animate-fade-in-up animate-delay-2">
            <h4 className="text-subtitle text-primary font-semibold tracking-widest">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center"
                to="/shop"
              >
                Shop All Plants
              </Link>
              <Link
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center"
                to="/shop"
              >
                New Arrivals
              </Link>
              <Link
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center"
                to="/collections"
              >
                Collections
              </Link>
              <a
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center cursor-pointer"
                href="#"
              >
                Accessories
              </a>
            </nav>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4 md:gap-6 animate-fade-in-up animate-delay-3">
            <h4 className="text-subtitle text-primary font-semibold tracking-widest">
              Company
            </h4>
            <nav className="flex flex-col gap-3">
              <a
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center cursor-pointer"
                href="#"
              >
                Our Story
              </a>
              <a
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center cursor-pointer"
                href="#"
              >
                Sustainability
              </a>
              <a
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center cursor-pointer"
                href="#"
              >
                Careers
              </a>
              <a
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center cursor-pointer"
                href="#"
              >
                Journal
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4 md:gap-6 animate-fade-in-up animate-delay-4">
            <h4 className="text-subtitle text-primary font-semibold tracking-widest">
              Support
            </h4>
            <nav className="flex flex-col gap-3">
              <a
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center cursor-pointer"
                href="#services"
              >
                Care Guides
              </a>
              <a
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center cursor-pointer"
                href="#"
              >
                Shipping & Returns
              </a>
              <a
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center cursor-pointer"
                href="#"
              >
                FAQ
              </a>
              <a
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center cursor-pointer"
                href="#"
              >
                Contact Us
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4 md:gap-6 animate-fade-in-up animate-delay-5">
            <h4 className="text-subtitle text-primary font-semibold tracking-widest">
              Social
            </h4>
            <nav className="flex flex-col gap-3">
              <a
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={16} /> Facebook
              </a>
              <a
                className="text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={16} /> Twitter
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 md:pt-12 w-full flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
          <p>© 2024 Vedanta Nursery. All rights reserved.</p>
          <div className="flex gap-6 md:gap-8">
            <span className="hover:text-primary transition-colors cursor-pointer">
              New York
            </span>
            <span className="hover:text-primary transition-colors cursor-pointer">
              London
            </span>
            <span className="hover:text-primary transition-colors cursor-pointer">
              Tokyo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
