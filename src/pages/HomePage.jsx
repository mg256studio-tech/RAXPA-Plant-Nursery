import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import FeatureGallery from "../components/FeatureGallery";
import CollectionGrid from "../components/CollectionGrid";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <FeatureGallery />
      <CollectionGrid />
      <Services />
      <Testimonials />
      <FAQ />
      <section className="bg-petal-white py-32 sm:py-40 md:py-48 lg:py-64 px-4 sm:px-6 lg:px-20 text-center overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center">
          <h2 className="text-[18vw] sm:text-[16vw] lg:text-[15vw] leading-[0.8] font-display font-medium text-jet-black tracking-tighter select-none opacity-10 cursor-default">
            RAXPA
          </h2>
          <div className="h-px w-16 sm:w-20 md:w-24 bg-jet-black/20 my-8 sm:my-10 md:my-12"></div>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.3em] text-jet-black opacity-40">
            Rare & Exotic Plant Association
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
