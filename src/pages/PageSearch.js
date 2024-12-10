import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Headers from "../assets/component/navbar/Header";
import { fetchDataMovieSearch } from "../services/get-data-movie-search";
import gambar from "../assets/img/upacara-ngaben-4.jpg";
import gambar1 from "../assets/img/omed-omedan3.jpg";
import gambar2 from "../assets/img/tari-kecak.jpg";
import gambar3 from "../assets/img/saraswati-day.jpg";
import gambar4 from "../assets/img/galungan-2022-1187x588.jpg";
import gambar5 from "../assets/img/Tet-Tahun-Baru-Saka.jpg";
import gambar6 from "../assets/img/0967bf87eb00129dffa73f6930e1c194.jpg";
import gambar7 from "../assets/img/qsrnboz3cdhzijgearuh.jpg";
import gambar8 from "../assets/img/Melasti-2.jpg";
import gambar9 from "../assets/img/Ruwatan.jpg";
import gambar10 from "../assets/img/Mekare-kare-9424-scaled.jpg";
import gambar11 from "../assets/img/bali jani.jpg";
import gambar12 from "../assets/img/bhuta yadnya.png";
import gambar13 from "../assets/img/barong.jpg";
import gambar14 from "../assets/img/legong-keraton-dance.jpg";

export default function PageSearch() {
  const { nameadat } = useParams();

  const gambarkumpul = [
    { id: 1, foto: gambar, penjelasan: "Ngaben adalah upacara kremasi yang dilakukan untuk membebaskan jiwa dari tubuh fisik dan mengantarkannya ke alam baka.", judul: "Upacara Ngaben" },
    { id: 2, foto: gambar1, penjelasan: "Omed-Omedan adalah upacara tradisional di mana pemuda dan pemudi saling mengucapkan selamat dan bercanda, diakhiri dengan saling menyiram air.", judul: "Upacara Omed-Omedan" },
    { id: 3, foto: gambar2, penjelasan: "Tari Kecak adalah pertunjukan seni tradisional Bali yang melibatkan nyanyian 'cak' oleh sekelompok pria, yang menceritakan kisah Ramayana.", judul: "Tari Kecak" },
    { id: 4, foto: gambar3, penjelasan: "Saraswati adalah perayaan untuk menghormati Dewi Ilmu Pengetahuan, Keseniandan dan Kebijaksanaan.", judul: "Hari Saraswati" },
    { id: 5, foto: gambar4, penjelasan: "Galungan adalah perayaan yang memperingati kemenangan dharma (kebaikan) atas adharma (kejahatan).", judul: "Perayaan Galungan" },
    { id: 6, foto: gambar5, penjelasan: "Tahun Baru Saka adalah hari pertama tahun baru dalam penanggalan Saka, dirayakan dengan upacara dan refleksi.", judul: "Tahun Baru Saka" },
    { id: 7, foto: gambar6, penjelasan: "Kuningan adalah hari raya yang dirayakan 10 hari setelah Galungan, saat roh nenek moyang diyakini kembali ke alam semesta.", judul: "Hari Kuningan" },
    { id: 8, foto: gambar7, penjelasan: "Puja Tri Sandhya adalah ritual harian yang dilakukan oleh umat Hindu Bali untuk menghormati Tuhan dan meminta berkah.", judul: "Puja Tri Sandhya" },
    { id: 9, foto: gambar8, penjelasan: "Melasti adalah upacara pembersihan diri dan lingkungan yang dilakukan sebelum hari besar keagamaan.", judul: "Upacara Melasti" },
    { id: 10, foto: gambar9, penjelasan: "Ruwatan adalah upacara penyucian untuk menghilangkan sial atau nasib buruk.", judul: "Upacara Ruwatan" },
    { id: 11, foto: gambar10, penjelasan: "Mekare-Kare adalah tradisi perang-perangan antar pemuda desa dengan menggunakan daun pandan.", judul: "Tradisi Mekare-Kare" },
    { id: 12, foto: gambar11, penjelasan: "Bali Jani adalah upacara yang dilakukan untuk menyambut tahun baru Saka dan mengucapkan syukur atas hasil panen.", judul: "Upacara Bali Jani" },
    { id: 13, foto: gambar12, penjelasan: "Panca Yajna adalah lima jenis pengorbanan yang dilakukan sebagai bentuk penghormatan kepada Tuhan.", judul: "Panca Yajna" },
    { id: 14, foto: gambar13, penjelasan: "Tari Barong adalah tari yang menggambarkan pertempuran antara Barong (simbol kebaikan) dan Rangda (simbol kejahatan).", judul: "Tari Barong" },
    { id: 15, foto: gambar14, penjelasan: "Tari Legong adalah tari klasik Bali yang dilakukan oleh penari perempuan muda dan menggambarkan kisah dari Ramayana.", judul: "Tari Legong" },
  ];

  const hasilPencarian = gambarkumpul.filter((gambar) => gambar.judul.toLowerCase().includes(nameadat.toLowerCase()));

  return (
    <div className="bg-black">
      <Headers />
      <h1 className="text-2xl font-bold pt-20 text-white pb-4">Hasil Pencarian untuk "{nameadat}"</h1>
      {hasilPencarian.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {hasilPencarian.map((gambar) => (
            <div key={gambar.id} className="border border-white shadow-lg p-4 order rounded-md transition-transform transform hover:scale-105">
              <Link to={`/detail/${gambar.id}`}>
                <h1 className="pb-4 font-semibold text-xl text-white">{gambar.judul}</h1>
                <img src={gambar.foto} alt={gambar.judul} className="w-full h-auto rounded-lg" />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-20 text-2xl text-white">Tidak ditemukan adat dengan nama "{nameadat}"</p>
      )}
    </div>
  );
}
