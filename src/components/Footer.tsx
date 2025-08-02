import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = '62895635368139'; // Format internasional tanpa +

  const handleWhatsAppContact = () => {
    const message = `Halo Ardelya Craft!

Saya ingin bertanya lebih lanjut tentang produk dan layanan Anda.

Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-card/50 border-t border-border/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/logoo.jpg"
                alt="Logo Ardelya Craft"
                className="w-8 h-8 object-cover rounded-full"
              />
              <span className="text-xl font-playfair font-bold text-gradient">
                Ardelya Craft
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Menghadirkan keanggunan dalam setiap benang dengan produk fashion craft & perhiasan premium berkualitas tinggi.
            </p>
            <button
              onClick={handleWhatsAppContact}
              className="flex items-center space-x-2 text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-elegant"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat WhatsApp</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair font-semibold text-gold">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Produk', path: '/products' },
                { name: 'Toko Offline', path: '/offline-store' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Kontak', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-muted-foreground hover:text-gold transition-elegant"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-playfair font-semibold text-gold">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-gold" />
                <span>+62 895-6353-68139</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-gold" />
                <span>info@ardelyacraft.com</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span>Braga Mall, Bandung & Dago, Bandung</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-playfair font-semibold text-gold">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: '#', name: 'Instagram' },
                { icon: Facebook, href: '#', name: 'Facebook' },
                { icon: Twitter, href: '#', name: 'Twitter' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  title={social.name}
                  className="w-10 h-10 bg-card border border-border/50 rounded-full flex items-center justify-center hover:bg-gold hover:text-luxury-black transition-elegant"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-xs text-muted-foreground mb-2">Jam Operasional:</p>
              <p className="text-sm text-muted-foreground">Senin - Minggu</p>
              <p className="text-sm text-muted-foreground">09:00 - 21:00 WIB</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Ardelya Craft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;