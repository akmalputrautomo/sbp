import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import gambar from "../img/upacara-ngaben-4.jpg";
import gambar1 from "../img/omed-omedan3.jpg";
import gambar2 from "../img/tari-kecak.jpg";
import gambar3 from "../img/saraswati-day.jpg";

export const PopularMovie = () => {
  const gambarkumpul = [
    {
      id: 1,
      foto: gambar,
      penjelasan: "Ngaben adalah upacara kremasi yang dilakukan untuk membebaskan jiwa dari tubuh fisik dan mengantarkannya ke alam baka.",
      judul: "Upacara Ngaben",
    },
    {
      id: 2,
      foto: gambar1,
      penjelasan: "Omed-Omedan adalah upacara tradisional di mana pemuda dan pemudi saling mengucapkan selamat dan bercanda, diakhiri dengan saling menyiram air.",
      judul: "Upacara Omed-Omedan",
    },
    {
      id: 3,
      foto: gambar2,
      penjelasan: "Tari Kecak adalah pertunjukan seni tradisional Bali yang melibatkan nyanyian 'cak' oleh sekelompok pria, yang menceritakan kisah Ramayana.",
      judul: "Tari Kecak",
    },
    {
      id: 4,
      foto: gambar3,
      penjelasan: "Saraswati adalah perayaan untuk menghormati Dewi Ilmu Pengetahuan, Keseniandan dan Kebijaksanaan.",
      judul: "Hari Saraswati",
    },
  ];

  return (
    <div className="h-full mt-10 px-4">
      <div className="font-bold flex justify-between items-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white">ADAT BALI</h1>
        <form className="text-lg sm:text-xl text-red-500 gap-2 flex items-center">
          <a href="/allmovie" className="hover:underline">
            Lihat Semua Adat
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </form>
      </div>
      <div>
        <Swiper
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1 }, // Untuk layar kecil
            768: { slidesPerView: 2 }, // Untuk tablet
            1024: { slidesPerView: 4 }, // Untuk desktop
          }}
        >
          {gambarkumpul.map((gambar) => (
            <SwiperSlide key={gambar.id}>
              <Link to={`detail/${gambar.id}`}>
                <img className="p-4 rounded-[1.5rem] transition-transform transform hover:scale-105" src={gambar.foto} alt={gambar.judul} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
