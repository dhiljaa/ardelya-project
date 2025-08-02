import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Award, Globe, Users, Star, Sparkles, Crown, MessageCircle } from 'lucide-react';

const About = () => {
  const whatsappNumber = '62895635368139';

  const handleContactUs = () => {
    const message = `Halo Ardelya Craft!

Saya tertarik untuk mengetahui lebih lanjut tentang:
- Cerita dan filosofi brand Anda
- Proses pembuatan produk handmade
- Kolaborasi dengan pengrajin lokal

Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const values = [
    {
      icon: Heart,
      title: 'Passion for Craft',
      description: 'Setiap produk dibuat dengan cinta dan dedikasi tinggi terhadap seni tradisional Indonesia.',
      color: 'bg-red-500/10 text-red-600',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Standar kualitas premium dengan material terbaik dan teknik pengerjaan yang sempurna.',
      color: 'bg-yellow-500/10 text-yellow-600',
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'Memperkenalkan keindahan craft Indonesia ke panggung dunia dengan sentuhan modern.',
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Mendukung pengrajin lokal dan membangun komunitas yang menghargai seni handmade.',
      color: 'bg-green-500/10 text-green-600',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Produk Terjual', icon: Star },
    { number: '50+', label: 'Pengrajin Partner', icon: Users },
    { number: '3', label: 'Tahun Pengalaman', icon: Crown },
    { number: '100%', label: 'Handmade Quality', icon: Sparkles },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-elegant relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury/5 via-transparent to-gold/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-luxury/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Crafted with Love since 2021</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gradient mb-8">
              Tentang Ardelya Craft
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Sebuah perjalanan menggabungkan keindahan tradisional Indonesia dengan estetika modern, 
              menciptakan karya seni yang bermakna dan berkualitas tinggi.
            </p>
            <Button 
              onClick={handleContactUs}
              size="lg" 
              className="bg-luxury text-luxury-black hover:bg-gold/90 shadow-luxury px-8 py-6 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Ceritakan Lebih Lanjut
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-luxury rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-luxury">
                  <achievement.icon className="w-8 h-8 text-luxury-black" />
                </div>
                <div className="text-3xl font-playfair font-bold text-gold mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-gold text-sm font-medium">
                  <div className="w-8 h-px bg-gold"></div>
                  <span>Our Story</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient">
                  Cerita Kami Dimulai dari Kecintaan
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Ardelya Craft lahir dari kecintaan mendalam terhadap warisan budaya Indonesia. 
                  Kami percaya bahwa setiap benang memiliki cerita, setiap motif menyimpan makna, 
                  dan setiap kristal memancarkan keindahan yang tak terbatas.
                </p>
                <p>
                  Didirikan dengan visi untuk melestarikan seni tradisional sambil menghadirkan 
                  inovasi modern, kami berkomitmen menghadirkan produk fashion craft dan perhiasan 
                  premium yang tidak hanya indah dipandang, tetapi juga bermakna dan berkualitas tinggi.
                </p>
                <p>
                  Dengan menggabungkan teknik handmade tradisional dan material premium seperti 
                  kain batik tulis, payet Jepang, mutiara sintetis, dan kristal Eropa, 
                  setiap produk Ardelya Craft adalah karya seni yang unik dan eksklusif.
                </p>
              </div>

              <div className="bg-luxury/5 rounded-xl p-6 border border-luxury/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-luxury rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-luxury-black" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-gold mb-2">Our Philosophy</h4>
                    <p className="text-muted-foreground">
                      "Setiap karya adalah cerminan jiwa pengrajin dan warisan budaya yang tak ternilai."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src="/assets/1.jpg"
                    alt="Proses Pembuatan"
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Proses Handmade</p>
                    </div>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src="/assets/2.jpg"
                    alt="Detail Produk"
                    className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 text-white">
                      <p className="text-xs font-medium">Detail Premium</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src="/assets/3.jpg"
                    alt="Koleksi Ardelya"
                    className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 text-white">
                      <p className="text-xs font-medium">Koleksi Eksklusif</p>
                    </div>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src="/assets/4.jpg"
                    alt="Perajin Lokal"
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Pengrajin Partner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold text-sm font-medium mb-4">
              <div className="w-8 h-px bg-gold"></div>
              <span>Our Values</span>
              <div className="w-8 h-px bg-gold"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
              Nilai-Nilai yang Menginspirasi
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Filosofi yang mendasari setiap karya dan dedikasi kami dalam menghadirkan keunggulan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass-effect luxury-hover group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-luxury/10 to-transparent rounded-bl-3xl"></div>
                <CardContent className="p-8 text-center relative">
                  <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-luxury`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-gold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-gold text-sm font-medium">
                <div className="w-8 h-px bg-gold"></div>
                <span>Our Mission</span>
                <div className="w-8 h-px bg-gold"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient">
                Misi yang Menggerakkan Kami
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="glass-effect luxury-hover group p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-luxury to-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-luxury">
                  <span className="text-luxury-black font-bold text-xl">01</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">
                  Preserve Heritage
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Melestarikan warisan budaya Indonesia melalui craft modern dan inovatif yang dapat diterima generasi muda
                </p>
              </Card>
              
              <Card className="glass-effect luxury-hover group p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-luxury to-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-luxury">
                  <span className="text-luxury-black font-bold text-xl">02</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">
                  Empower Artisans
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Memberdayakan pengrajin lokal dan memberikan platform global untuk karya mereka dengan nilai ekonomi yang adil
                </p>
              </Card>
              
              <Card className="glass-effect luxury-hover group p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-luxury to-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-luxury">
                  <span className="text-luxury-black font-bold text-xl">03</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">
                  Create Beauty
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Menciptakan keindahan yang bermakna dan produk berkualitas tinggi yang dapat diwariskan turun temurun
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-luxury/5 via-card/30 to-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient">
                Bergabunglah dalam Perjalanan Kami
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mari bersama-sama melestarikan dan mengapresiasi keindahan craft Indonesia. 
                Jadilah bagian dari komunitas yang menghargai seni handmade berkualitas tinggi.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleContactUs}
                size="lg" 
                className="bg-luxury text-luxury-black hover:bg-gold/90 shadow-luxury px-8 py-6 text-lg font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Mulai Percakapan
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10 px-8 py-6 text-lg font-semibold"
                onClick={() => window.location.href = '/products'}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Lihat Koleksi
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;