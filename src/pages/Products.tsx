import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, ShoppingBag, Star, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import productBatik from '@/assets/songket.jpg';
import productSequins from '@/assets/5.jpg';
import productPearls from '@/assets/bunga.jpg';
import productCrystals from '@/assets/olla.jpg';

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const whatsappNumber = '62895635368139'; // Format internasional tanpa +

  const products = [
    {
      id: 1,
      name: 'Songket Premium',
      description: 'Songket premium dengan motif tradisional yang dikerjakan oleh pengrajin berpengalaman. Setiap helai memiliki cerita dan keunikan tersendiri.',
      image: productBatik,
      features: ['100% Katun Premium', 'Pewarna Alami', 'Motif Eksklusif', 'Handmade Quality'],
      category: 'Songket',
    },
    {
      id: 2,
      name: 'Batik Luxury',
      description: 'Berkualitas tinggi dari Jepang dengan kilau yang memukau. Cocok untuk berbagai keperluan fashion dan dekorasi premium.',
      image: productSequins,
      features: ['Import Quality', 'Tahan Lama', 'Berbagai Warna', 'Kilau Premium'],
      category: 'Batik',
    },
    {
      id: 3,
      name: 'Crystal Premium',
      description: 'Crystal sintetis berkualitas tinggi dengan kilau natural yang elegan. Tersedia dalam berbagai ukuran dan warna yang mempesona.',
      image: productPearls,
      features: ['Kilau Natural', 'Berbagai Ukuran', 'Anti Luntur', 'Elegant Design'],
      category: 'Crystall',
    },
    {
      id: 4,
      name: 'Olla Premium',
      description: 'Kristal premium import dari Eropa dengan kejernihan dan kualitas cahaya yang luar biasa. Sempurna untuk jewelry dan aksesoris mewah.',
      image: productCrystals,
      features: ['Import Eropa', 'Brilliant Cut', 'Multiple Colors', 'Luxury Grade'],
      category: 'CrystalXolla',
    },
  ];

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleSendWhatsApp = () => {
    if (!customerName.trim()) {
      alert('Mohon isi nama Anda');
      return;
    }

    const message = `Halo, saya ${customerName}

Saya tertarik dengan produk:
*${selectedProduct.name}*

${customMessage ? `Pesan tambahan: ${customMessage}` : ''}

Mohon informasi lebih lanjut mengenai:
- Harga
- Ketersediaan stok
- Proses pemesanan

Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setShowModal(false);
    setCustomerName('');
    setCustomMessage('');
  };

  const handleCustomOrder = () => {
    const message = `Halo, saya ingin melakukan custom order

Mohon informasi mengenai:
- Proses custom order
- Minimum order quantity
- Timeline pengerjaan
- Range harga

Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleConsultation = () => {
    const message = `Halo, saya ingin konsultasi untuk custom order

Mohon bantuan untuk:
- Diskusi desain
- Pemilihan material
- Estimasi harga dan waktu

Terima kasih!`;

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
              Koleksi Premium Kami
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Temukan keindahan dalam setiap detail produk craft & perhiasan premium pilihan terbaik
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <Card key={product.id} className="glass-effect luxury-hover group overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-luxury"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" className="bg-luxury text-luxury-black hover:bg-gold/90 flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        Detail
                      </Button>
                      <Button size="sm" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                        <ShoppingBag className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-luxury text-luxury-black px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(4.9)</span>
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-bold text-gold mb-4">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Fitur Unggulan:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-8">
                    <Button 
                      className="bg-luxury text-luxury-black hover:bg-gold/90 flex-1"
                      onClick={() => handleOrderClick(product)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Pesan Sekarang
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-gold text-gold hover:bg-gold/10"
                      onClick={handleCustomOrder}
                    >
                      Custom Order
                    </Button>
                  </div>
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
              Butuh Produk Custom?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kami menerima pesanan custom sesuai kebutuhan Anda. Konsultasikan desain dan spesifikasi yang diinginkan
            </p>
            <Button 
              size="lg" 
              className="bg-luxury text-luxury-black hover:bg-gold/90 shadow-luxury px-8 py-6 text-lg font-semibold"
              onClick={handleConsultation}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Konsultasi Custom Order
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-playfair font-bold text-gray-900">
                Pesan via WhatsApp
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Selected Product */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Produk yang dipilih:</h4>
                <div className="flex items-center gap-3">
                  <img
                    src={selectedProduct?.image}
                    alt={selectedProduct?.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{selectedProduct?.name}</p>
                    <p className="text-sm text-gray-600">{selectedProduct?.category}</p>
                  </div>
                </div>
              </div>

              {/* Customer Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Nama Anda *
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none text-black"
                />
              </div>

              {/* Custom Message */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Pesan Tambahan (Opsional)
                </label>
                <textarea
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Tambahkan pertanyaan atau permintaan khusus..."
                  rows={3}
                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none resize-none text-black"
                />
              </div>

              {/* WhatsApp Info */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-800">WhatsApp</span>
                </div>
                <p className="text-sm text-green-700">
                  Anda akan diarahkan ke WhatsApp untuk melanjutkan pemesanan
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowModal(false)}
                  className="flex-1"
                >
                  Batal
                </Button>
                <Button
                  onClick={handleSendWhatsApp}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-dark"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Kirim ke WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Products;