import { Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد محمود",
    role: "رجل أعمال",
    rating: 5,
    review: "خدمة ممتازة ومحترفة جداً، السائق كان في الموعد والسيارة نظيفة ومريحة. أنصح الجميع بالتعامل معهم.",
    avatar: "أ",
  },
  {
    name: "سارة أحمد",
    role: "مدونة سفر",
    rating: 5,
    review: "أفضل تجربة سياحية مررت بها! التنظيم كان رائع والأسعار منافسة جداً. شكراً لكم على الرحلة المميزة.",
    avatar: "س",
  },
  {
    name: "محمد علي",
    role: "طبيب",
    rating: 4.5,
    review: "خدمة التوصيل من وإلى المطار كانت ممتازة. السائق محترف والسيارة فاخرة. سأتعامل معهم مجدداً بالتأكيد.",
    avatar: "م",
  },
  {
    name: "فاطمة حسن",
    role: "مهندسة",
    rating: 5,
    review: "حجزت رحلة عائلية وكانت التجربة فوق التوقعات. الفندق ممتاز والبرنامج السياحي شامل ومنظم.",
    avatar: "ف",
  },
  {
    name: "خالد إبراهيم",
    role: "محاسب",
    rating: 4.5,
    review: "تعاملت معهم لحجز تذاكر الطيران والفندق، الأسعار كانت أفضل من أي مكتب آخر. خدمة عملاء ممتازة.",
    avatar: "خ",
  },
  {
    name: "نورا السيد",
    role: "معلمة",
    rating: 5,
    review: "رحلة شهر العسل كانت لا تُنسى بفضلهم! اهتمام بأدق التفاصيل وترتيب مثالي. شكراً جزيلاً.",
    avatar: "ن",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "fill-gold text-gold"
              : star - 0.5 <= rating
              ? "fill-gold/50 text-gold"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-medium mb-4 block">آراء العملاء</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ماذا يقول عملاؤنا عنا
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نفتخر بثقة عملائنا الكرام ونسعى دائماً لتقديم أفضل الخدمات
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="text-center px-8 py-4 bg-card rounded-2xl border border-border shadow-card">
            <div className="text-4xl font-bold text-gradient-gold mb-1">4.9</div>
            <div className="flex justify-center mb-2">
              <StarRating rating={5} />
            </div>
            <p className="text-muted-foreground text-sm">متوسط التقييم</p>
          </div>
          <div className="text-center px-8 py-4 bg-card rounded-2xl border border-border shadow-card">
            <div className="text-4xl font-bold text-gradient-gold mb-1">+500</div>
            <p className="text-muted-foreground text-sm mt-3">عميل سعيد</p>
          </div>
          <div className="text-center px-8 py-4 bg-card rounded-2xl border border-border shadow-card">
            <div className="text-4xl font-bold text-gradient-gold mb-1">+1000</div>
            <p className="text-muted-foreground text-sm mt-3">رحلة ناجحة</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-2xl border border-border shadow-card hover:shadow-gold hover:border-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="text-6xl text-gold/20 font-serif leading-none mb-2">"</div>
              
              {/* Review Text */}
              <p className="text-foreground leading-relaxed mb-6 min-h-[80px]">
                {testimonial.review}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <StarRating rating={testimonial.rating} />
                <span className="text-sm text-muted-foreground">
                  ({testimonial.rating}/5)
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            انضم إلى عملائنا السعداء واحجز رحلتك الآن
          </p>
          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-gold hover:scale-105 transition-transform duration-300"
          >
            احجز رحلتك الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
