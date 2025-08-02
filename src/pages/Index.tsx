import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Crown, Gem, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/songket.jpg';

const Index = () => {
  const features = [
    {
      icon: Crown,
      title: 'Premium Quality',
      description: 'Bahan berkualitas tinggi dengan standar internasional',
    },
    {
      icon: Palette,
      title: 'Handmade Craft',
      description: 'Dibuat dengan tangan oleh pengrajin berpengalaman',
    },
    {
      icon: Gem,
      title: 'Luxury Design',
      description: 'Desain eksklusif yang menggabungkan tradisi dan modernitas',
    },
    {
      icon: Sparkles,
      title: 'Custom Order',
      description: 'Layanan custom sesuai kebutuhan dan keinginan Anda',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Ardelya Craft Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/80 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-gradient leading-tight">
              Elegance in Every Thread
            </h1>
            <p className="text-xl md:text-2xl text-elegant-white/90 max-w-2xl mx-auto leading-relaxed">
              Temukan keindahan fashion craft & perhiasan premium dengan sentuhan tradisional Indonesia dan gaya modern
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button asChild size="lg" className="bg-luxury text-luxury-black hover:bg-gold/90 shadow-luxury px-8 py-6 text-lg font-semibold">
                <Link to="/products">Lihat Koleksi</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gold text-gold hover:bg-gold/10 px-8 py-6 text-lg font-semibold">
                <Link to="/contact">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
              Mengapa Memilih Ardelya Craft?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Komitmen kami terhadap kualitas dan keunggulan membuat setiap produk menjadi karya seni yang berharga
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect luxury-hover group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-luxury rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-luxury">
                    <feature.icon className="w-8 h-8 text-luxury-black" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-gold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-luxury-gray">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient">
              Siap Menciptakan Keanggunan Anda?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Jelajahi koleksi eksklusif kami atau hubungi tim untuk konsultasi personal dan pemesanan custom
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-luxury text-luxury-black hover:bg-gold/90 shadow-luxury px-8 py-6 text-lg font-semibold">
                <Link to="/products">Eksplorasi Produk</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gold text-gold hover:bg-gold/10 px-8 py-6 text-lg font-semibold">
                <Link to="/offline-store">Kunjungi Toko</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;