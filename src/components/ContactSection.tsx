import { Facebook, Instagram, MessageCircle, MapPin } from "lucide-react";
import { ExternalLink } from "@/components/ExternalLink";

const socialLinks = [
  {
    icon: Facebook,
    label: "فيسبوك",
    href: "https://www.facebook.com/share/1KVJ3EAPLb/",
    color: "hover:bg-[#1877f2]",
  },
  {
    icon: Instagram,
    label: "انستجرام",
    href: "https://www.instagram.com/rovaniotours?igsh=MW9qNXF0c3R2MmVmMg==",
    color: "hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]",
  },
  {
    icon: MessageCircle,
    label: "واتساب",
    href: "https://wa.me/201221233495",
    color: "hover:bg-[#25D366]",
  },
  {
    icon: MapPin,
    label: "موقعنا",
    href: "https://google.com/maps/place/3VQV%2BHP7+Rovanio+Tours،+شياخة+ثالثة،+اول+اسوان،+محافظة+أسوان+1242630",
    color: "hover:bg-[#EA4335]",
  },
];

const ContactSection = () => {
  return (
    <section id="location" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-light font-medium mb-4 block">تواصل معنا</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            نحن هنا لخدمتكم
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <ExternalLink
              key={index}
              href={link.href}
              className={`group flex flex-col items-center gap-4 p-8 bg-navy-light rounded-2xl border border-gold/20 transition-all duration-300 hover:scale-105 hover:border-gold/50 ${link.color} hover:text-primary-foreground`}
            >
              <div className="w-16 h-16 border-2 border-gold/50 rounded-full flex items-center justify-center group-hover:border-transparent transition-colors">
                <link.icon className="w-8 h-8 text-gold group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="font-semibold text-lg">{link.label}</span>
            </ExternalLink>
          ))}
        </div>

        {/* Google Map Embed */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-gold">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1234567890123!2d32.8998!3d24.0889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14366500570cb2e7%3A0xe723a9dd8ee48fea!2sRovanio%20Tours!5e0!3m2!1sar!2seg!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقعنا على الخريطة"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
