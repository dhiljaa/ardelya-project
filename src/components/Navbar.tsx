import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const whatsappNumber = '62895635368139'; // Format internasional tanpa +

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Produk', path: '/products' },
    { name: 'Toko Offline', path: '/offline-store' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Kontak', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleContactUs = () => {
    const message = `Halo Ardelya Craft!

Saya ingin bertanya tentang:
- Produk dan layanan Anda
- Informasi pemesanan
- Konsultasi kebutuhan saya

Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/assets/logoo.jpg"
              alt="Logo Ardelya Craft"
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className="text-xl font-playfair font-bold text-gradient">
              Ardelya Craft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-poppins transition-elegant hover:text-gold ${
                  isActive(item.path) ? 'text-gold' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="outline" 
              className="bg-luxury text-luxury-black border-gold hover:bg-gold/90"
              onClick={handleContactUs}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/30">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-poppins transition-elegant hover:text-gold ${
                    isActive(item.path) ? 'text-gold' : 'text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className="bg-luxury text-luxury-black hover:bg-gold/90 w-full"
                onClick={handleContactUs}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;