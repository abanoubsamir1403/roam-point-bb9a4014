import carImage from "@/assets/car.jpg";
import { Check } from "lucide-react";
import { ExternalLink } from "@/components/ExternalLink";

const features = [
  "مكيفة بالكامل",
  "سائق محترف",
  "راحة ورفاهية",
  "أسعار منافسة",
];

const CarShowcase = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-gold">
              <img
                src={carImage}
                alt="سيارة فاخرة للتوصيل"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-full opacity-20 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold rounded-full opacity-30 blur-xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-gold font-medium mb-4 block">أسطولنا</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              سيارات فاخرة
              <br />
              <span className="text-gradient-gold">لراحتكم</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              نوفر لكم أحدث السيارات الفاخرة مع سائقين محترفين لضمان رحلة مريحة وآمنة إلى جميع الوجهات
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <ExternalLink
              href="https://wa.me/201221233495"
              className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-gold hover:scale-105 transition-transform duration-300"
            >
              احجز سيارتك الآن
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;
