import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-cream-light">
      <Navbar />
      <div className="pt-20">
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;
