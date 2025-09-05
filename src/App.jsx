import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// Perbaikan path impor CSS
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


// Setup worker untuk react-pdf
// Menjadi seperti ini
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;


// ... (Komponen Navbar, HeroSection, DonationSection, LocationSection, GallerySection, VideoSection, ContactSection, Footer tetap sama)

// Komponen Navbar
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-emerald-600 to-green-800 p-4 shadow-lg rounded-b-xl">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold font-inter">
          Musholla Al-Muttaqin
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="text-white hover:text-emerald-200 transition duration-300 font-inter">Beranda</a>
          </li>
          <li>
            <a href="#donasi" className="text-white hover:text-emerald-200 transition duration-300 font-inter">Donasi</a>
          </li>
          <li>
            <a href="#lokasi" className="text-white hover:text-emerald-200 transition duration-300 font-inter">Lokasi</a>
          </li>
          <li>
            <a href="#galeri" className="text-white hover:text-emerald-200 transition duration-300 font-inter">Galeri</a>
          </li>
           <li>
            <a href="#proposal" className="text-white hover:text-emerald-200 transition duration-300 font-inter">Proposal</a>
          </li>
          <li>
            <a href="#kontak" className="text-white hover:text-emerald-200 transition duration-300 font-inter">Kontak</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Komponen Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="bg-green-50 flex items-center justify-center min-h-[calc(100vh-80px)] py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-emerald-800 mb-6 leading-tight font-inter">
          Membangun Bersama, Meraih Berkah
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto font-inter">
          Mari bersama-sama wujudkan pembangunan dan operasional Musholla Al-Muttaqin di GVS Jalan Elang V Blok E7 Sarakan Sepatan Kabupaten Tangerang. Setiap donasi Anda adalah investasi akhirat.
        </p>
        <a
          href="#donasi"
          className="inline-block bg-emerald-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-emerald-700 transition duration-300 transform hover:scale-105 font-inter"
        >
          Donasi Sekarang
        </a>
      </div>
    </section>
  );
};

// Komponen Donasi Section
const DonationSection = () => {
  const accountNumber = "0004301880006828";
  const [showMessage, setShowMessage] = useState(false);

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = accountNumber;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <section id="donasi" className="bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-emerald-800 mb-8 font-inter">
          Salurkan Donasi Anda
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-inter">
          Kami sangat menghargai setiap bentuk dukungan Anda. Donasi dapat disalurkan melalui rekening bank atau QRIS.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-4xl mx-auto">
          {/* Kolom Donasi Rekening Bank */}
          <div className="bg-green-50 border border-emerald-300 rounded-xl p-8 shadow-md w-full lg:w-1/2">
            <p className="text-2xl font-bold text-emerald-700 mb-4 font-inter">
              Transfer Bank
            </p>
            <p className="text-xl text-gray-800 mb-2 font-inter">
              Bank BTN
            </p>
            <p className="text-xl text-gray-800 mb-2 font-inter">
              Nomor Rekening: <span className="font-mono bg-gray-200 px-3 py-1 rounded-md">{accountNumber}</span>
            </p>
            <p className="text-xl text-gray-800 mb-6 font-inter">
              Atas Nama: <span className="font-semibold">Musholla Al-Mutaqin</span>
            </p>
            <button
              onClick={copyToClipboard}
              className="bg-emerald-600 text-white text-md font-semibold py-2 px-6 rounded-full shadow-md hover:bg-emerald-700 transition duration-300 font-inter"
            >
              Salin Nomor Rekening
            </button>
          </div>

          {/* Kolom Donasi QRIS */}
          <div className="bg-green-50 border border-emerald-300 rounded-xl p-8 shadow-md w-full lg:w-1/2">
            <p className="text-2xl font-bold text-emerald-700 mb-4 font-inter">
              Scan QRIS
            </p>
            <p className="text-lg text-gray-700 mb-4 font-inter">
              Scan kode QR di bawah untuk berdonasi melalui QRIS.
            </p>
            <div className="relative w-full overflow-hidden rounded-lg border border-gray-300" > {/* (1280 / 914) * 100% */}
              <img
                src="./qris.jpg" // Ukuran QRIS disesuaikan
                alt="QRIS Code for Donation"
                className="w-full h-full object-contain rounded-lg border border-gray-300"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/914x1280/CCCCCC/333333?text=QRIS+Tidak+Tersedia"; }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 font-inter">
            </p>
          </div>
        </div>
        <p className="text-md text-gray-600 mt-8 font-inter">
          Jazakumullah Khairan Katsiran atas kebaikan Anda.
        </p>
      </div>
      {showMessage && (
        <div className="fixed bottom-5 right-5 bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-xl animate-fade-in-up">
          Nomor rekening berhasil disalin!
        </div>
      )}
    </section>
  );
};

// Komponen Lokasi Section
const LocationSection = () => {
  return (
    <section id="lokasi" className="bg-green-50 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-emerald-800 mb-8 font-inter">
          Lokasi Musholla Al-Muttaqin
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-inter">
          Musholla Al-Muttaqin berlokasi di:
        </p>
        <div className="bg-white border border-emerald-300 rounded-xl p-8 shadow-md max-w-2xl mx-auto">
          <p className="text-xl font-semibold text-gray-800 mb-4 font-inter">
            GVS Jalan Elang V Blok E7, Sarakan, Sepatan,
          </p>
          <p className="text-xl font-semibold text-gray-800 font-inter">
            Kabupaten Tangerang, Banten
          </p>
          <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-500 font-inter">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.090680650942!2d106.56886477494553!3d-6.120562693870634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8d9a2a9e2d3%3A0x60c0d1b1e2c1f0b!2sJl.%20Elang%20V%2C%20Sarakan%2C%20Kec.%20Sepatan%2C%20Kabupaten%20Tangerang%2C%20Banten!5e0!3m2!1sid!2sid!4v1716805825313!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }} // Menggunakan objek style untuk React
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Musholla Al-Muttaqin"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-2 font-inter">
            (Peta interaktif lokasi Musholla Al-Muttaqin)
          </p>
        </div>
      </div>
    </section>
  );
};

// Komponen Gallery Section
const GallerySection = () => {
  const images = [
    { src: "./depan.jpeg", alt: "Musholla Tampak Depan" },
    { src: "./dalam.jpeg", alt: "Interior Musholla" },
    { src: "./kegiatan.jpeg", alt: "Kegiatan di Musholla" },
    { src: "./lingkungan.jpeg", alt: "Lingkungan Sekitar Musholla" },
    { src: "./lingkungan2.jpg", alt: "Lingkungan Sekitar Musholla" },
    { src: "./depan2.jpeg", alt: "Lingkungan Sekitar Musholla" },
    { src: "./kegiatan2.jpeg", alt: "Kegiatan di Musholla" },
  ];

 const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <section id="galeri" className="bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-emerald-800 mb-8 font-inter">
          Galeri Musholla Al-Muttaqin
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto font-inter">
          Lihatlah beberapa foto Musholla Al-Muttaqin dan kegiatan di dalamnya. Klik gambar untuk melihat ukuran penuh.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/CCCCCC/333333?text=Gambar+Tidak+Tersedia"; }}
              />
              <p className="p-4 text-lg font-semibold text-emerald-700 font-inter">{image.alt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Fullscreen Gambar */}
      {isModalOpen && selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button className="modal-close-button" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

// Komponen Video Section (Baru)
const VideoSection = () => {
  const youtubeEmbedUrl = "https://www.youtube.com/embed/NLF0zN7Zsdc?si=aqq_wCPS1-_G9yOO"; // Ganti dengan URL embed YouTube video Anda

  return (
    <section id="video" className="bg-green-50 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-emerald-800 mb-8 font-inter">
          Video Kegiatan Musholla
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto font-inter">
          Saksikan video dokumentasi kegiatan dan progres pembangunan Musholla Al-Muttaqin.
        </p>
        <div className="relative w-full max-w-3xl mx-auto" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
            src={youtubeEmbedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

// Komponen Proposal Section (Baru)
const ProposalSection = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section id="proposal" className="bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-emerald-800 mb-8 font-inter">
          Proposal Pembangunan
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto font-inter">
          Berikut adalah proposal resmi untuk proyek pembangunan dan pengembangan Musholla Al-Muttaqin.
        </p>
        <div className="max-w-4xl mx-auto border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <Document
            file="/proposal.pdf" // Path ke file PDF di folder public
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
         <a
          href="/proposal.pdf"
          download
          className="inline-block mt-8 bg-emerald-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-emerald-700 transition duration-300 transform hover:scale-105 font-inter"
        >
          Unduh Proposal
        </a>
      </div>
    </section>
  );
};


// Komponen Kontak Section
const ContactSection = () => {
  return (
    <section id="kontak" className="bg-green-50 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-emerald-800 mb-8 font-inter">
          Hubungi Kami
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-inter">
          Jika Anda memiliki pertanyaan lebih lanjut atau ingin berkoordinasi, jangan ragu untuk menghubungi pengurus musholla.
        </p>
        <div className="bg-white border border-emerald-300 rounded-xl p-8 shadow-md max-w-md mx-auto">
          <p className="text-xl font-semibold text-gray-800 mb-4 font-inter">
            Email: <br></br><a href="mailto:musholla.almuttaqin12@gmail.com" className="text-emerald-600 hover:underline">musholla.almuttaqin12@gmail.com</a> 
          </p>
          <p className="text-xl font-semibold text-gray-800 font-inter">
            Telp/WhatsApp:  <br></br><a href="tel:+6287874166744" className="text-emerald-600 hover:underline">+62 878-7416-6744</a> 
          </p>
          <p className="text-md text-gray-600 mt-4 font-inter">
            (Komarudin)
          </p>
        </div>
      </div>
    </section>
  );
};

// Komponen Footer
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 rounded-t-xl">
      <div className="container mx-auto text-center font-inter">
        <p>© 2025 Musholla Al-Muttaqin. Hak Cipta Dilindungi.</p>
        <p className="text-sm mt-2">
          Dibangun dengan ❤️ untuk kebaikan umat.
        </p>
      </div>
    </footer>
  );
};

// Komponen Utama Aplikasi
function App() {
  return (
    <div className="font-inter antialiased">
      <Navbar />
      <HeroSection />
      <DonationSection />
      <LocationSection />
      <GallerySection />
      <VideoSection />
      <ProposalSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;