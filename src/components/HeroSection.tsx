import heroBg from "@/assets/hero-bg.jpg";
import { MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="صحراء ذهبية"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-gold text-lg font-medium tracking-wider">
              ✦ مرحباً بكم ✦
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            مكتب{" "}
            <span className="text-gradient-gold">السياحة</span>
            <br />
            والسفر
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            نقدم لكم أفضل خدمات السياحة والسفر مع راحة تامة وأسعار منافسة
            <br />
            رحلتكم معنا تبدأ من هنا
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-gold hover:scale-105 transition-transform duration-300"
            >
              <Phone className="w-5 h-5" />
              احجز الآن
            </a>
            <a
              href="#location"
              className="inline-flex items-center gap-3 border-2 border-gold/50 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold/10 transition-colors duration-300"
            >
              <MapPin className="w-5 h-5" />
              موقعنا
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
