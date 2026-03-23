import Navbar from "@/components/Navbar";
import FullMentorsSection from "@/components/FullMentorsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Mentors = () => {
  return (
    <div className="min-h-screen bg-cream-light">
      <Navbar />
      <div className="pt-20">
        <FullMentorsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Mentors;
