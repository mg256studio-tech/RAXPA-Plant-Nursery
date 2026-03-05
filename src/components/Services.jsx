import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Services() {
  const headerRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();

  const services = [
    {
      id: "01",
      title: "Landscape Architecture",
      description:
        "From intimate urban balconies to sprawling estate gardens, our design team curates biophilic environments that harmonize with your lifestyle and architectural context.",
    },
    {
      id: "02",
      title: "White-Glove Sourcing",
      description:
        "Hunting for a specific variegated anomaly or a mature specimen tree? Our global network of growers allows us to procure the rarest botanical treasures on your behalf.",
    },
    {
      id: "03",
      title: "Plant Health Diagnostics",
      description:
        "Our 'Plant Doctors' provide virtual and on-site consultations to diagnose pests, nutrient deficiencies, and environmental stress, prescribing organic treatments.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-20 bg-petal-white text-jet-black overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <div
          ref={headerRef}
          className="mb-16 sm:mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 md:gap-10 opacity-0"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] opacity-60 text-primary block mb-3 sm:mb-4 md:mb-6">
              Our Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-balance">
              Comprehensive <br className="hidden sm:block" /> Botanical
              Services
            </h2>
          </div>
          <button className="hidden md:flex text-xs font-bold uppercase tracking-widest items-center gap-3 hover:gap-5 transition-all duration-300 group border-b border-jet-black/30 pb-2 hover:border-jet-black hover:translate-x-1 tap-highlight-none">
            Book Consultation
            <span className="text-lg">→</span>
          </button>
        </div>

        <div ref={servicesRef} className="flex flex-col opacity-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group border-t border-jet-black/10 py-8 sm:py-12 md:py-20 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 transition-all duration-500 hover:bg-jet-black/[0.02] cursor-pointer tap-highlight-none"
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.1 + index * 0.15}s forwards`,
              }}
            >
              <div className="md:w-1/4 flex-shrink-0">
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold opacity-8 group-hover:opacity-15 transition-opacity duration-500 block">
                  {service.id}
                </span>
              </div>
              <div className="md:w-2/4">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-3 sm:mb-4 md:mb-6 group-hover:translate-x-2 transition-transform duration-500 text-balance">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-70 font-serif">
                  {service.description}
                </p>
              </div>
              <div className="md:w-1/4 flex items-center justify-start md:justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-4xl sm:text-5xl md:text-6xl font-thin opacity-40 group-hover:opacity-70">
                  🌿
                </span>
              </div>
            </div>
          ))}
          <div className="border-t border-jet-black/10"></div>
        </div>

        <div className="mt-8 md:hidden flex justify-start">
          <button className="text-xs font-bold uppercase tracking-widest flex items-center gap-3 hover:gap-4 transition-all duration-300 group hover:text-primary">
            Book Consultation
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
