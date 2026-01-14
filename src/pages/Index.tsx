import { useEffect, useRef, useState } from "react";
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
  const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const target = sectionRef.current;
      if (!target) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(target);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={sectionRef}
        className={`scroll-reveal ${isVisible ? "is-visible" : ""}`}
      >
        {children}
      </div>
    );
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <RevealOnScroll>
        <AboutSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ThemesSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <TimelineSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <PrizesSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <MentorsSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <WorkshopsSection />
      </RevealOnScroll>
 
      <RevealOnScroll>
        <CTASection />
      </RevealOnScroll>
      <Footer />
    </main>
  );
};

export default Index;
