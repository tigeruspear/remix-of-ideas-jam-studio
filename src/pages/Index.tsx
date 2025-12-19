import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ThemesSection from "@/components/ThemesSection";
import TimelineSection from "@/components/TimelineSection";
import PrizesSection from "@/components/PrizesSection";
import MentorsSection from "@/components/MentorsSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import SponsorsSection from "@/components/SponsorsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <TimelineSection />
      <PrizesSection />
      <MentorsSection />
      <WorkshopsSection />
      <SponsorsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
