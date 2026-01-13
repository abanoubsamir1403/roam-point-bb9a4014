import { Facebook, Instagram, MessageCircle, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              مكتب <span className="text-gradient-gold">السياحة</span>
            </h3>
            <p className="text-primary-foreground/70">
              شريكك الأمثل للسفر والسياحة
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-3 text-primary-foreground/70">
            <Phone className="w-5 h-5 text-gold" />
            <span dir="ltr">+20 123 456 7890</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
              aria-label="فيسبوك"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
              aria-label="انستجرام"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
              aria-label="واتساب"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://maps.google.com/?q=your-location"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
              aria-label="موقعنا"
            >
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} مكتب السياحة. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
