export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 text-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-pink-700">
        Undangan Pernikahan
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-700">
        Yudis ❤️ Hana
      </p>

      <p className="mt-2 text-md md:text-lg text-gray-600">
        Sabtu, 20 Desember 2025
      </p>

      <div className="mt-8 bg-white shadow-lg rounded-2xl p-6 max-w-md">
        <h2 className="text-xl font-semibold text-pink-600">
          Hitung Mundur Acara
        </h2>
        <p className="mt-2 text-gray-500">
          (Countdown bisa ditambahkan di sini 🚀)
        </p>
      </div>
    </div>
  );
    }
