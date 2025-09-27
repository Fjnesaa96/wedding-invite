import { useEffect, useState } from "react";

export default function Home() {
  const weddingDate = new Date("2025-02-09T10:00:00"); // tanggal sesuai undangan aslinya
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) {
        setTimeLeft({ expired: true });
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white text-center font-sans">
      {/* Header */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100">
        <h1 className="text-5xl font-bold text-pink-700">Yudis & Hana</h1>
        <p className="mt-4 text-lg text-gray-700">Tasyakuran Pernikahan</p>
        <p className="mt-2 text-gray-600">Minggu, 9 Februari 2025</p>
      </div>

      {/* Countdown */}
      <section className="py-12 bg-white shadow-inner">
        <h2 className="text-2xl font-semibold text-pink-600 mb-6">
          Hitung Mundur Acara
        </h2>
        {timeLeft.expired ? (
          <p className="text-green-600 font-bold">Acara Sedang Berlangsung 🎉</p>
        ) : (
          <div className="flex justify-center space-x-6 text-gray-700 font-semibold">
            <div>
              <p className="text-3xl">{timeLeft.days}</p>
              <span>Hari</span>
            </div>
            <div>
              <p className="text-3xl">{timeLeft.hours}</p>
              <span>Jam</span>
            </div>
            <div>
              <p className="text-3xl">{timeLeft.minutes}</p>
              <span>Menit</span>
            </div>
            <div>
              <p className="text-3xl">{timeLeft.seconds}</p>
              <span>Detik</span>
            </div>
          </div>
        )}
      </section>

      {/* Lokasi */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Lokasi</h2>
        <p className="mb-4">Gedung Serbaguna, Jakarta</p>
        <a
          href="https://goo.gl/maps/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg shadow-lg"
        >
          Buka Google Maps
        </a>
      </section>

      {/* RSVP */}
      <section className="py-12 bg-pink-50 px-4">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Konfirmasi Kehadiran</h2>
        <a
          href="https://forms.gle/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg shadow-lg"
        >
          Isi Form RSVP
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-gray-600">
        <p>© 2025 Yudis & Hana. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
    }
