import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Navigation, Store, MessageCircle } from 'lucide-react';

const OfflineStore = () => {
  const whatsappNumber = '6289563536139'; // Format internasional tanpa +

  const stores = [
    {
      name: 'Patrakomala Store',
      address: 'Braga Mall, Lantai 2 Unit B-205',
      fullAddress: 'Jl. Braga No.99-101, Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40111',
      phone: '+62 895 6353 68139',
      hours: 'Senin - Minggu: 10:00 - 22:00',
      description: 'Toko flagship kami di jantung kota Bandung dengan koleksi lengkap produk premium.',
      features: ['Koleksi Lengkap', 'Personal Styling', 'Custom Consultation', 'Parking Available'],
      mapCoords: '-6.9147444,107.6098111', // Koordinat Braga Mall
    },
    {
      name: 'Kerabat Store',
      address: 'Jl. Ir. H. Djuanda (Dago) No.123',
      fullAddress: 'Jl. Ir. H. Djuanda No.123, Dago, Kec. Coblong, Kota Bandung, Jawa Barat 40135',
      phone: '+62 895 6353 68139',
      hours: 'Senin - Minggu: 09:00 - 21:00',
      description: 'Showroom eksklusif dengan suasana yang nyaman untuk konsultasi dan pemesanan custom.',
      features: ['Exclusive Showroom', 'Custom Workshop', 'Private Consultation', 'Easy Access'],
      mapCoords: '-6.8951,107.6133', // Koordinat area Dago
    },
  ];

  const handleGetDirections = (store) => {
    // Buka Google Maps dengan alamat toko
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(store.fullAddress)}`;
    window.open(mapsUrl, '_blank');
  };

  const handleCallStore = (store) => {
    // Kirim pesan WhatsApp untuk menghubungi toko
    const message = `Halo, saya ingin menghubungi ${store.name}

Alamat: ${store.fullAddress}

Saya ingin bertanya tentang:
- Ketersediaan produk
- Jadwal kunjungan
- Konsultasi produk

Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleVisitPlanning = () => {
    const message = `Halo Ardelya Craft!

Saya berencana mengunjungi toko Anda dan ingin menanyakan:

1. Jadwal operasional hari ini
2. Ketersediaan produk yang saya cari
3. Apakah perlu appointment untuk konsultasi?

Mohon konfirmasinya. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-elegant">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-8">
              Kunjungi Toko Kami
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Rasakan pengalaman berbelanja premium dan lihat langsung kualitas produk Ardelya Craft
            </p>
            <Button 
              onClick={handleVisitPlanning}
              size="lg" 
              className="bg-luxury text-luxury-black hover:bg-gold/90 shadow-luxury px-8 py-6 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Rencanakan Kunjungan
            </Button>
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {stores.map((store, index) => (
              <Card key={index} className="glass-effect luxury-hover group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-luxury rounded-full flex items-center justify-center group-hover:shadow-glow transition-luxury">
                      <Store className="w-8 h-8 text-luxury-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-gold">
                        {store.name}
                      </h3>
                      <p className="text-muted-foreground">{store.address}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {store.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{store.fullAddress}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{store.phone}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{store.hours}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-foreground">Fasilitas:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {store.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      className="bg-luxury text-luxury-black hover:bg-gold/90 flex-1"
                      onClick={() => handleGetDirections(store)}
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Petunjuk Arah
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-gold text-gold hover:bg-gold/10"
                      onClick={() => handleCallStore(store)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat WA
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Store Benefits */}
      <section className="py-24 bg-luxury-gray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
              Keuntungan Berkunjung ke Toko
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pengalaman berbelanja yang tak terlupakan dengan layanan premium dan personal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-luxury rounded-full flex items-center justify-center mx-auto">
                <span className="text-luxury-black font-bold text-xl">01</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gold">
                Touch & Feel Quality
              </h3>
              <p className="text-muted-foreground">
                Rasakan langsung kualitas premium material dan kehalusan finishing produk kami
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-luxury rounded-full flex items-center justify-center mx-auto">
                <span className="text-luxury-black font-bold text-xl">02</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gold">
                Personal Consultation
              </h3>
              <p className="text-muted-foreground">
                Konsultasi langsung dengan expert kami untuk mendapatkan produk yang sesuai kebutuhan
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-luxury rounded-full flex items-center justify-center mx-auto">
                <span className="text-luxury-black font-bold text-xl">03</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gold">
                Custom Design
              </h3>
              <p className="text-muted-foreground">
                Lihat proses pembuatan dan diskusikan desain custom secara detail dengan tim kreatif
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-effect luxury-hover text-center">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-playfair font-semibold text-gold mb-2">
                    Cek Jam Buka
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pastikan jadwal kunjungan Anda
                  </p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-gold text-gold hover:bg-gold/10 w-full"
                    onClick={handleVisitPlanning}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Tanya Jadwal
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-effect luxury-hover text-center">
                <CardContent className="p-6">
                  <Store className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-playfair font-semibold text-gold mb-2">
                    Cek Stok
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pastikan produk tersedia sebelum datang
                  </p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-gold text-gold hover:bg-gold/10 w-full"
                    onClick={() => {
                      const message = `Halo, saya ingin mengecek ketersediaan stok produk sebelum berkunjung ke toko. Mohon informasinya, terima kasih!`;
                      const encodedMessage = encodeURIComponent(message);
                      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Cek Stok
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-effect luxury-hover text-center">
                <CardContent className="p-6">
                  <Navigation className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-playfair font-semibold text-gold mb-2">
                    Booking Konsultasi
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Jadwalkan konsultasi private
                  </p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-gold text-gold hover:bg-gold/10 w-full"
                    onClick={() => {
                      const message = `Halo, saya ingin membuat appointment untuk konsultasi private di toko. Mohon informasi jadwal yang tersedia. Terima kasih!`;
                      const encodedMessage = encodeURIComponent(message);
                      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-24 bg-luxury-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
              Lokasi Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Temukan kami di lokasi strategis di Bandung
            </p>
          </div>
          
          <div className="bg-card/30 rounded-lg h-96 flex items-center justify-center glass-effect">
            <div className="text-center space-y-4">
              <MapPin className="w-16 h-16 text-gold mx-auto" />
              <h3 className="text-xl font-playfair font-semibold text-gold">
                Interactive Map
              </h3>
              <p className="text-muted-foreground max-w-md mb-6">
                Peta interaktif akan tersedia untuk memudahkan Anda menemukan lokasi toko kami
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => handleGetDirections(stores[0])}
                  className="bg-luxury text-luxury-black hover:bg-gold/90"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Braga Mall
                </Button>
                <Button 
                  onClick={() => handleGetDirections(stores[1])}
                  className="bg-luxury text-luxury-black hover:bg-gold/90"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Dago Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OfflineStore;