import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const whatsappNumber = '62895635368139'; // Format internasional tanpa +

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Form Tidak Lengkap",
        description: "Mohon lengkapi semua field yang diperlukan.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `Halo Ardelya Craft!

Nama: ${formData.name}
Email: ${formData.email}

Pesan:
${formData.message}

Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success toast
    toast({
      title: "Pesan Terkirim!",
      description: "Anda akan diarahkan ke WhatsApp untuk mengirim pesan.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleDirectWhatsApp = () => {
    const message = `Halo Ardelya Craft, saya ingin bertanya tentang produk Anda`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      details: ['+62 895 6353 68139'],
      description: 'Senin - Minggu: 09:00 - 21:00',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['ardelyacraft28@gmail.com'],
      description: 'Respon dalam 24 jam',
    },
    {
      icon: MapPin,
      title: 'Alamat Toko',
      details: ['Braga Mall, Bandung', 'Jl. Dago, Bandung'],
      description: 'Kunjungi showroom kami',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+62 895-6353-68139'],
      description: 'Chat langsung dengan tim kami',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-elegant">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-8">
              Hubungi Kami
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Kami siap membantu Anda dengan pertanyaan, konsultasi, atau pemesanan produk premium
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-effect luxury-hover group text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-luxury rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-luxury">
                    <info.icon className="w-8 h-8 text-luxury-black" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-gold mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-foreground font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-effect">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold text-gold mb-4">
                    Kirim Pesan
                  </h2>
                  <p className="text-muted-foreground">
                    Isi form di bawah ini dan kami akan menghubungi Anda melalui WhatsApp
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Nama Lengkap *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap Anda"
                      className="bg-background/50 border-border/50 focus:border-gold transition-elegant"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nama@email.com"
                      className="bg-background/50 border-border/50 focus:border-gold transition-elegant"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Pesan *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tulis pesan, pertanyaan, atau kebutuhan Anda di sini..."
                      className="bg-background/50 border-border/50 focus:border-gold transition-elegant min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-luxury text-luxury-black hover:bg-gold/90 shadow-luxury"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Kirim ke WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="glass-effect">
                <CardContent className="p-8">
                  <h3 className="text-xl font-playfair font-semibold text-gold mb-6">
                    Jam Operasional
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gold" />
                      <div>
                        <p className="font-medium text-foreground">Senin - Minggu</p>
                        <p className="text-sm text-muted-foreground">09:00 - 21:00 WIB</p>
                      </div>
                    </div>
                    <div className="border-t border-border/30 pt-4">
                      <p className="text-sm text-muted-foreground">
                        Customer service online 24/7 melalui WhatsApp untuk kemudahan Anda
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardContent className="p-8">
                  <h3 className="text-xl font-playfair font-semibold text-gold mb-6">
                    Respons Time
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">WhatsApp Chat</span>
                      <span className="text-gold font-medium">&lt; 1 jam</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Email</span>
                      <span className="text-gold font-medium">&lt; 24 jam</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Telepon</span>
                      <span className="text-gold font-medium">Langsung</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardContent className="p-8">
                  <h3 className="text-xl font-playfair font-semibold text-gold mb-6">
                    Preferred Contact
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Untuk respons tercepat, kami recommend menggunakan WhatsApp atau mengunjungi langsung toko kami.
                  </p>
                  <Button 
                    onClick={handleDirectWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;