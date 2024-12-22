import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import gambar from "../img/upacara-ngaben-4.jpg";
import gambar1 from "../img/omed-omedan3.jpg";
import gambar2 from "../img/tari-kecak.jpg";
import { useNavigate } from "react-router-dom";

const NowPlaying = () => {
  const navigate = useNavigate();

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
  ];

  return (
    <div>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {gambarkumpul.map((gambar) => (
          <SwiperSlide key={gambar.id}>
            <div className="w-full h-[52rem] sm:h-[40rem] md:h-[35rem] relative">
              <img className="w-screen h-full object-cover opacity-50" src={gambar.foto} alt={gambar.judul}></img>
              <div className="absolute top-0 w-full md:w-[60%] h-full flex flex-col justify-center gap-4 px-4 md:pl-10 text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{gambar.judul}</h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">{gambar.penjelasan}</p>
                <button
                  onClick={() => {
                    navigate(`/detail/${gambar.id}`);
                  }}
                  className="bg-red-500 rounded-md block w-3/4 sm:w-1/2 md:w-1/4 py-2 font-bold flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Lihat Detail</p>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NowPlaying;
