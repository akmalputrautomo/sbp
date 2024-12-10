import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMovieDataQuery } from "../../services/get-data-movie";
import { Link } from "react-router-dom";
import gambar from "../img/upacara-ngaben-4.jpg";
import gambar1 from "../img/omed-omedan3.jpg";
import gambar2 from "../img/tari-kecak.jpg";
import gambar3 from "../img/saraswati-day.jpg";

export const PopularMovie = () => {
  // const { data } = useMovieDataQuery({
  //   // languange: "en-us",
  //   // page: "PageNow",
  // });

  // const movie = data ? data.results : [];
  const gambarkumpul = [
    { id: 1, foto: gambar, penjelasan: "Ngaben adalah upacara kremasi yang dilakukan untuk membebaskan jiwa dari tubuh fisik dan mengantarkannya ke alam baka.", judul: "Upacara Ngaben" },
    { id: 2, foto: gambar1, penjelasan: "Omed-Omedan adalah upacara tradisional di mana pemuda dan pemudi saling mengucapkan selamat dan bercanda, diakhiri dengan saling menyiram air.", judul: "Upacara Omed-Omedan" },
    { id: 3, foto: gambar2, penjelasan: "Tari Kecak adalah pertunjukan seni tradisional Bali yang melibatkan nyanyian 'cak' oleh sekelompok pria, yang menceritakan kisah Ramayana.", judul: "Tari Kecak" },
    { id: 4, foto: gambar3, penjelasan: "Saraswati adalah perayaan untuk menghormati Dewi Ilmu Pengetahuan, Keseniandan dan Kebijaksanaan.", judul: "Hari Saraswati" },
  ];

  return (
    <div className="h-full mt-10">
      <div className="font-bold flex justify-between px-2 items-center mb-10">
        <h1 className=" text-5xl text-white ">ADAT BALI</h1>
        <form className="text-xl text-red-500 gap-2 justify-center items-center flex">
          <a href="/allmovie">Lihat Semua Adat</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </form>
      </div>
      <div>
        <Swiper spaceBetween={50} slidesPerView={4} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
          {gambarkumpul.map((gambar) => (
            <SwiperSlide>
              <Link key={gambar.id} to={`detail/${gambar.id}`}>
                <img className="p-4 rounded-[1.5rem] transition-transform transform hover:scale-105" src={gambar.foto}></img>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
