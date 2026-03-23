import Navbar from "@/components/Navbar";
import JudgesSection from "@/components/JudgesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Judges = () => {
  return (
    <div className="min-h-screen bg-cream-light">
      <Navbar />
      <div className="pt-20">
        <JudgesSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Judges;
