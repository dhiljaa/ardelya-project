import Layout from '@/components/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Apakah produk bisa dipesan secara custom?',
      answer: 'Ya, kami menerima pesanan custom untuk semua kategori produk. Anda bisa konsultasi langsung dengan tim desain kami untuk menentukan spesifikasi, warna, motif, dan ukuran sesuai kebutuhan. Proses konsultasi dapat dilakukan di toko offline atau melalui WhatsApp.',
    },
    {
      question: 'Berapa lama proses pengerjaan produk handmade?',
      answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas produk: Kain Batik Tulis (14-21 hari), Payet Jepang ready stock (1-3 hari), Mutiara Sintetis ready stock (1-3 hari), Crystal Premium ready stock (1-3 hari). Untuk pesanan custom, waktu pengerjaan dapat 21-45 hari kerja.',
    },
    {
      question: 'Apakah tersedia sistem grosir untuk reseller atau butik?',
      answer: 'Ya, kami menyediakan sistem grosir dengan harga khusus untuk reseller, butik, dan pembelian dalam jumlah besar. Minimal order untuk harga grosir adalah 50 pieces per jenis produk. Silakan hubungi tim sales kami untuk mendapatkan katalog dan price list khusus reseller.',
    },
    {
      question: 'Apakah pengiriman bisa ke luar negeri?',
      answer: 'Ya, kami melayani pengiriman internasional ke berbagai negara. Biaya pengiriman akan disesuaikan dengan lokasi tujuan dan berat paket. Untuk pengiriman internasional, waktu pengiriman estimasi 7-14 hari kerja. Semua produk akan dikemas dengan packaging premium untuk menjamin keamanan.',
    },
    {
      question: 'Bagaimana cara pembayaran?',
      answer: 'Kami menerima berbagai metode pembayaran: Transfer Bank (BCA, Mandiri, BNI, BRI), E-wallet (GoPay, OVO, DANA, ShopeePay), Kartu Kredit/Debit, dan pembayaran tunai untuk pembelian di toko offline. Untuk pesanan online, pembayaran dilakukan sebelum proses produksi dimulai.',
    },
    {
      question: 'Apakah tersedia metode pembayaran cicilan?',
      answer: 'Ya, kami menyediakan opsi pembayaran cicilan untuk pembelian dengan nilai tertentu. Cicilan dapat dilakukan melalui kartu kredit (0% untuk 3-12 bulan) atau kerjasama dengan platform fintech seperti Kredivo dan Akulaku. Minimal pembelian untuk cicilan adalah Rp 2.000.000.',
    },
    {
      question: 'Apa saja bahan yang digunakan untuk produk Ardelya Craft?',
      answer: 'Kami menggunakan material premium: Kain Batik dari katun 100% dengan pewarna alami, Payet berkualitas tinggi import dari Jepang, Mutiara sintetis dengan coating berkualitas tinggi anti luntur, Crystal premium grade A import dari Eropa. Semua material telah melalui quality control ketat.',
    },
    {
      question: 'Apakah bisa memesan untuk keperluan acara (pernikahan, wisuda, dll)?',
      answer: 'Tentu saja! Kami spesialis dalam pemesanan untuk acara khusus seperti pernikahan, wisuda, acara corporate, dan event lainnya. Tim kami akan membantu konsultasi tema, warna, dan desain yang sesuai dengan acara Anda. Kami juga menyediakan paket khusus untuk event dengan jumlah besar.',
    },
    {
      question: 'Bagaimana cara mengetahui ketersediaan stok?',
      answer: 'Untuk mengecek stok, Anda bisa: 1) Mengunjungi toko offline kami, 2) Menghubungi WhatsApp customer service, 3) Melalui website dengan fitur live chat. Stok produk ready diupdate real-time. Untuk produk custom, tidak ada batasan stok karena dibuat sesuai pesanan.',
    },
    {
      question: 'Apakah produk dijamin original dan handmade?',
      answer: 'Ya, 100% semua produk Ardelya Craft adalah original dan handmade. Setiap produk dilengkapi dengan sertifikat authenticity dan tag khusus. Untuk kain batik tulis, setiap helai memiliki pattern unik yang tidak bisa diduplikasi mesin. Kami memberikan garansi keaslian untuk semua produk.',
    },
    {
      question: 'Apakah saya bisa melihat produk secara langsung di toko fisik?',
      answer: 'Ya, Anda bisa mengunjungi kedua toko fisik kami: Patrakomala Store di Braga Mall (Lantai 2) dan Kerabat Store di Dago. Di toko fisik, Anda bisa melihat, menyentuh, dan merasakan langsung kualitas produk. Tim sales kami juga siap memberikan konsultasi personal.',
    },
    {
      question: 'Bagaimana jika barang yang diterima rusak atau salah?',
      answer: 'Jika terjadi kerusakan atau kesalahan pengiriman, silakan hubungi customer service dalam 24 jam setelah barang diterima. Kami akan melakukan penggantian atau refund sesuai kondisi. Pastikan untuk dokumentasi kondisi barang dan kemasan saat diterima sebagai bukti klaim.',
    },
    {
      question: 'Bagaimana prosedur retur atau penukaran barang?',
      answer: 'Prosedur retur: 1) Hubungi customer service maksimal 7 hari setelah barang diterima, 2) Barang dalam kondisi original dan belum digunakan, 3) Lengkapi form retur, 4) Kirim barang ke alamat yang ditentukan. Biaya retur ditanggung customer kecuali ada kesalahan dari pihak kami. Proses refund 5-7 hari kerja.',
    },
    {
      question: 'Apakah Ardelya Craft menerima kolaborasi brand atau influencer?',
      answer: 'Ya, kami terbuka untuk kolaborasi dengan brand, influencer, content creator, dan mitra bisnis lainnya. Kami menyediakan program ambassador, sponsored content, dan partnership khusus. Silakan kirim proposal kerjasama ke email partnership@ardelyacraft.com atau hubungi tim marketing kami.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-elegant">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-8">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Temukan jawaban atas pertanyaan yang sering diajukan tentang produk dan layanan Ardelya Craft
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-effect rounded-lg px-6 border-border/50"
                >
                  <AccordionTrigger className="text-left font-playfair font-semibold text-lg text-gold hover:text-gold/80 transition-elegant py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-luxury-gray">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tim customer service kami siap membantu Anda dengan senang hati. Jangan ragu untuk menghubungi kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Ardelya%20Craft,%20saya%20ingin%20bertanya%20tentang%20produk%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-luxury text-luxury-black hover:bg-gold/90 transition-luxury px-8 py-4 rounded-lg font-semibold text-lg shadow-luxury"
              >
                WhatsApp Kami
              </a>
              <a
                href="mailto:info@ardelyacraft.com"
                className="inline-flex items-center justify-center border border-gold text-gold hover:bg-gold/10 transition-elegant px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;