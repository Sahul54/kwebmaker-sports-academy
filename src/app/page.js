import ProfessionalCard from "@/components/cards/ProfessionalCard";
import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import CoachesEventsSection from "@/components/sections/CoachesEventsSection";
import ConnectivitySection from "@/components/sections/Connectivity";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import HeroSection from "@/components/sections/HeroSection";
import KeyFeaturesSection from "@/components/sections/KeyFeaturesSection";
import ProfessionalsSection from "@/components/sections/ProfessionalsSection";
import Programs from "@/components/sections/Programs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ValuesMarquee from "@/components/sections/ValuesMarquee";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <TestimonialsSection />
      <KeyFeaturesSection />
      <Programs />
      <ValuesMarquee />
      <ConnectivitySection />
      <ProfessionalsSection />
      <FacilitiesSection />
      <CoachesEventsSection />
    </>
  );
}