import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function FAQ() {
  const headerRef = useScrollAnimation();

  const faqItems = [
    {
      question: "Packaging & Shipping Integrity",
      answer:
        "We use a custom-engineered, plastic-free packaging system that secures the pot and foliage separately. Each plant is wrapped in breathable protection to ensure nursery-fresh arrival.",
    },
    {
      question: "Health Guarantee",
      answer:
        "We offer a 30-Day Happiness Guarantee. If your specimen arrives damaged or fails to thrive despite following our care guide, we will replace it immediately.",
    },
    {
      question: "Sourcing Requests",
      answer:
        "Our 'White-Glove Sourcing' allows you to request specific rare cultivars. Our global network of growers can typically locate most specimens within 2-4 weeks.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-20 bg-petal-white"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-start">
        {/* Header */}
        <div
          ref={headerRef}
          className="lg:col-span-4 opacity-0 lg:sticky lg:top-32"
        >
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] opacity-60 text-primary block mb-3 sm:mb-4 md:mb-6">
            Support
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4 sm:mb-6 md:mb-8 text-balance">
            Common <br className="hidden sm:block" /> Inquiries
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-75 font-serif mb-6 sm:mb-8">
            Everything you need to know about our sourcing, shipping, and
            guarantees.
          </p>
          <a
            href="#contact"
            className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest opacity-70 text-primary hover:opacity-75 transition-all duration-300 inline-flex items-center gap-2 hover:gap-3 tap-highlight-none"
          >
            Contact Support
            <span>→</span>
          </a>
        </div>

        {/* FAQ Items */}
        <div className="lg:col-span-8 flex flex-col">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group border-t border-jet-black/10 py-5 sm:py-6 md:py-8 transition-all duration-300 cursor-pointer hover:bg-jet-black/[0.02] tap-highlight-none"
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.15 + index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <summary className="flex items-center justify-between marker:content-none select-none">
                <h3 className="text-lg md:text-2xl font-display font-bold group-hover:text-primary transition-colors duration-300">
                  {item.question}
                </h3>
                <span className="ml-4 flex-shrink-0 text-2xl font-light text-primary/60 group-open:rotate-45 transition-transform duration-300">
                  +
                </span>
              </summary>
              <div className="pt-6 md:pt-8 opacity-75 font-serif leading-relaxed text-base md:text-lg max-w-2xl text-jet-black/80">
                {item.answer}
              </div>
            </details>
          ))}
          <div className="border-t border-jet-black/10 mt-2"></div>
        </div>
      </div>
    </section>
  );
}
