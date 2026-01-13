import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CarShowcase from "@/components/CarShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <CarShowcase />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
