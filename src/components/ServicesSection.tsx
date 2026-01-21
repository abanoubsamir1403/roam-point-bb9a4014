import { Car, Plane, Hotel, Map } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "توصيل VIP",
    description: "خدمة توصيل فاخرة بسيارات حديثة ومكيفة",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-medium mb-4 block">خدماتنا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ماذا نقدم لكم
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-gold transition-all duration-500 hover:-translate-y-2 border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
