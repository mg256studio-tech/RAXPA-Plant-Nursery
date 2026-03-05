import { Star } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Testimonials() {
  const headerRef = useScrollAnimation();

  const testimonials = [
    {
      name: "Elena R.",
      role: "Interior Designer",
      quote:
        "Verdant has completely transformed my approach to biophilic design. The quality of their specimens is unmatched, and their care guides make maintenance effortless for my clients.",
      rating: 5,
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Felix",
    },
    {
      name: "Marcus T.",
      role: "Collector",
      quote:
        "I've been searching for a true Monstera Burle Marx Flame for years. Verdant not only sourced one, but it arrived in pristine condition with detailed care instructions.",
      rating: 5,
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Marcus",
      stagger: true,
    },
    {
      name: "Sofia K.",
      role: "Environmental Advocate",
      quote:
        "What sets Verdant apart is their commitment to sustainability. Every purchase feels like supporting a mission, not just a transaction.",
      rating: 5,
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sofia",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-20 bg-background-dark text-petal-white"
    >
      <div className="max-w-[1440px] mx-auto">
        <div
          ref={headerRef}
          className="text-center mb-12 sm:mb-16 md:mb-24 opacity-0"
        >
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] opacity-60 text-primary block mb-3 sm:mb-4">
            Community
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-balance px-4">
            Cultivated Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/5 p-6 sm:p-8 md:p-10 rounded-xl overflow-hidden relative group hover:-translate-y-2 transition-all duration-500 border border-white/10 hover:border-primary/30 tap-highlight-none ${
                testimonial.stagger ? "md:translate-y-8" : ""
              }`}
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.1 + index * 0.15}s forwards`,
                opacity: 0,
              }}
            >
              {/* Quote mark */}
              <span className="text-5xl sm:text-6xl md:text-7xl text-primary/15 absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 font-serif opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                "
              </span>

              {/* Avatar section */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden flex-shrink-0 border border-primary/20">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-sm sm:text-base md:text-lg leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs uppercase tracking-widest opacity-60 font-semibold mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Quote text */}
              <p className="font-serif italic leading-relaxed mb-6 text-sm md:text-base opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex gap-1.5 pt-4 border-t border-white/5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    className="text-primary group-hover:text-primary/80 transition-colors"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
