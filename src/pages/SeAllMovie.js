import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMovieDataQuery } from "../services/get-data-movie";
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

export const SeAllMovie = () => {
  const navigate = useNavigate();
  // const { data } = useMovieDataQuery({
  //   // languange: "en-us",
  //   // page: "PageNow",
  // });

  // const movie = data ? data.results : [];
  // console.log(movie, "ovoe");
  const gambarkumpul = [
    {
      id: 1,
      foto: gambar,
      Sejarah:
        "Upacara Ngaben telah menjadi bagian integral dari tradisi Hindu Bali sejak abad ke-9, ketika Hindu mulai mengakar kuat di Pulau Bali. Upacara ini mencerminkan filosofi Bali tentang hubungan antara manusia, alam, dan Tuhan (Tri Hita Karana). Tradisi ini berkembang seiring waktu, dengan pengaruh dari kerajaan-kerajaan Bali kuno seperti Gelgel dan Klungkung. Proses Ngaben bukan hanya sekadar ritual, tetapi juga menunjukkan penghormatan mendalam kepada leluhur dan merupakan simbol pembebasan roh dari belenggu duniawi. Selama era penjajahan Belanda, pelaksanaan Ngaben sempat terhambat karena peraturan ketat, namun berhasil dilestarikan oleh masyarakat Bali hingga saat ini, Prosesnya melibatkan pembakaran jasad, yang dipercaya sebagai cara untuk membersihkan semua dosa dan keterikatan duniawi. Ngaben biasanya dilakukan oleh keluarga dengan bantuan komunitas desa, dan melibatkan serangkaian persiapan seperti membuat bade (menara kremasi) dan lembu replika. Ritual ini diiringi doa-doa khusus untuk memastikan roh mendiang diterima oleh dewa dan leluhur, serta diberkahi dalam perjalanan menuju kehidupan berikutnya.",
      penjelasan: "Ngaben adalah upacara kremasi yang sangat sakral dalam tradisi Hindu Bali. Tujuannya adalah untuk membebaskan roh dari tubuh fisik agar dapat mencapai alam baka. ",
      judul: "Upacara Ngaben",
      link: "https://youtu.be/1nqgEPjm6LQ?si=CJYPGppATNUB1diX",
    },
    {
      id: 2,
      foto: gambar1,
      Sejarah:
        "Tradisi Omed-Omedan berasal dari abad ke-17 dan dikembangkan oleh masyarakat Banjar Kaja, Sesetan, Denpasar. Awalnya, tradisi ini merupakan upacara penyucian setelah Hari Raya Nyepi dan ditujukan untuk menjaga keharmonisan antar warga desa. Nama 'Omed-Omedan' sendiri berarti 'tarik-menarik,' yang mencerminkan kegiatan inti dari ritual ini. Menurut cerita turun-temurun, tradisi ini pernah dihentikan pada masa kolonial, tetapi dihidupkan kembali setelah terjadi peristiwa spiritual, di mana masyarakat percaya bahwa penghentian tradisi tersebut menyebabkan musibah. Saat ini, Omed-Omedan dikenal sebagai tradisi unik yang menjadi daya tarik budaya Bali. Ritual ini dilakukan setelah Hari Raya Nyepi untuk menyambut tahun baru dengan semangat baru. Para peserta biasanya dipilih dari pemuda-pemudi desa yang belum menikah. Kegiatan ini diawasi oleh tetua adat untuk menjaga kesakralannya. Selain sebagai hiburan, Omed-Omedan juga mencerminkan pentingnya persatuan dan kerja sama dalam masyarakat Bali",
      penjelasan: "Omed-Omedan adalah tradisi yang melibatkan pemuda dan pemudi untuk saling menarik satu sama lain, disertai dengan prosesi menyiram air sebagai simbol pembersihan diri dan penyatuan energi positif. .",
      judul: "Upacara Omed-Omedan",
      link: "https://youtu.be/PNgq_1lOLck?si=QgHqixFIKCwlgAlS",
    },
    {
      id: 3,
      foto: gambar2,
      Sejarah:
        "Tari Kecak pertama kali diciptakan pada tahun 1930-an oleh seorang seniman Bali bernama Wayan Limbak, yang bekerja sama dengan pelukis Jerman, Walter Spies. Tari ini awalnya dikembangkan sebagai pertunjukan seni untuk wisatawan, dengan mengadaptasi tradisi sakral sanghyang, yaitu tarian ritual yang melibatkan komunikasi dengan roh-roh suci. Meskipun awalnya merupakan bagian dari upacara keagamaan, Kecak kemudian mengalami transformasi menjadi bentuk seni pertunjukan yang memukau dengan mengangkat kisah epik Ramayana. Gerakan dan suara para penari menggambarkan adegan pertempuran antara kebaikan dan kejahatan, menjadikan Tari Kecak sebagai simbol seni budaya Bali yang mendunia, Tari ini tidak menggunakan alat musik tradisional, melainkan hanya suara manusia sebagai pengiring utama. Dalam setiap pertunjukan, para penari mengenakan kain poleng (kotak-kotak hitam putih) sebagai simbol dualitas. Kecak tidak hanya menjadi hiburan, tetapi juga mencerminkan nilai-nilai spiritual dan seni yang mendalam..",
      penjelasan:
        "Tari Kecak adalah pertunjukan seni yang unik di Bali, di mana kelompok pria duduk melingkar sambil mengucapkan 'cak-cak-cak' secara serempak. Suara ini menciptakan ritme yang menggambarkan suasana dramatis dalam kisah Ramayana, khususnya saat Hanoman dan pasukan wanaranya bertempur melawan Rahwana. ",
      judul: "Tari Kecak",
      link: "https://youtu.be/mzvvh3GHkCs?si=8xxU2Zws_engyeNX",
    },
    {
      id: 4,
      foto: gambar3,
      Sejarah:
        "Hari Saraswati mulai dirayakan secara formal di Bali pada abad ke-11, saat ajaran Hindu mencapai puncak kejayaan di Pulau Bali. Tradisi ini didasarkan pada penghormatan kepada Dewi Saraswati, yang diyakini sebagai pemberi ilmu pengetahuan, seni, dan kebijaksanaan. Ritual ini berkaitan erat dengan pengembangan pendidikan tradisional di Bali, yang diawali dengan penggunaan lontar sebagai media pembelajaran. Perayaan Saraswati mencerminkan pentingnya ilmu dalam kehidupan manusia dan hubungannya dengan spiritualitas. Hingga saat ini, tradisi ini dipertahankan dengan khidmat oleh masyarakat Bali sebagai warisan budaya yang berharga, Pada hari ini, umat Hindu Bali memberikan sesajen di pura-pura dan tempat belajar seperti sekolah dan perpustakaan. Ritual ini melibatkan doa bersama dan pemberian penghormatan kepada lontar, buku, dan alat tulis sebagai simbol ilmu. Selain sebagai bentuk syukur atas berkah ilmu pengetahuan, perayaan Saraswati juga merupakan momen refleksi spiritual untuk memanfaatkan ilmu demi kebaikan bersama",
      penjelasan: "Hari Saraswati adalah perayaan yang didedikasikan untuk Dewi Saraswati, yang dianggap sebagai dewi ilmu pengetahuan dan seni.",
      judul: "Hari Saraswati",
      link: "https://youtu.be/_5DsU-d1_eI?si=WmRu2H6Yv7VHptqc",
    },
    {
      id: 5,
      foto: gambar4,
      Sejarah:
        "Ritual ini diawali dengan persiapan yang disebut Penyekeban, di mana masyarakat mulai membuat persiapan seperti memasak dan membuat penjor (hiasan bambu khas Bali). Pada hari Galungan, keluarga berkumpul untuk berdoa di pura dan memberikan sesajen kepada leluhur. Perayaan ini juga menjadi waktu bagi masyarakat Bali untuk mempererat hubungan kekeluargaan dan komunitas, sekaligus merenungkan nilai-nilai kebenaran dalam kehidupan. Perayaan Galungan pertama kali disebutkan dalam lontar-lontar kuno Bali yang berasal dari abad ke-10. Galungan diyakini sebagai peringatan kemenangan Dharma (kebenaran) atas Adharma (kejahatan), yang berakar dari mitologi Bali tentang pertempuran antara Dewa Indra dan Mayadenawa. Tradisi ini juga mencerminkan filosofi Tri Hita Karana, yaitu keharmonisan hubungan manusia dengan Tuhan, sesama manusia, dan alam. Dalam perkembangannya, Galungan menjadi perayaan utama umat Hindu Bali yang dilakukan dengan penuh suka cita setiap 210 hari berdasarkan kalender Pawukon.",
      penjelasan: "Galungan adalah perayaan penting dalam tradisi Hindu Bali yang menandai kemenangan kebaikan atas kejahatan. ",
      judul: "Perayaan Galungan",
      link: "https://youtu.be/sF6vcuynBkY?si=KDEetSq1su7SCsCw",
    },
    {
      id: 6,
      foto: gambar5,
      Sejarah:
        "Tahun Baru Saka telah dirayakan oleh umat Hindu Bali sejak abad ke-12, ketika kalender Saka mulai digunakan secara luas di Bali. Perayaan ini melibatkan berbagai ritual seperti Melasti, Tawur Kesanga, dan Nyepi, yang mencerminkan perjalanan spiritual manusia dari pembersihan diri, penyeimbangan energi, hingga perenungan. Filosofi dari Tahun Baru Saka adalah introspeksi dan pembaruan, menandai awal kehidupan baru dengan jiwa yang bersih. Ritual ini juga memiliki akar yang kuat dalam ajaran Hindu tentang siklus kehidupan dan karma.",
      penjelasan: "Tahun Baru Saka adalah perayaan spiritual yang dimulai dengan serangkaian ritual.",
      judul: "Tahun Baru Saka",
      link: "https://youtu.be/Lgv-OSIcD58?si=cLuPTmhE9g0q14HK",
    },
    {
      id: 7,
      foto: gambar6,
      Sejarah:
        "Ritual ini melibatkan doa-doa untuk memohon keselamatan dan keberkahan. Selain itu, Kuningan juga dipenuhi dengan suasana sukacita, di mana keluarga dan komunitas berkumpul untuk mempererat hubungan sosial dan spiritual, Hari Kuningan dirayakan 10 hari setelah Galungan, menandai kembalinya roh leluhur ke alam baka. Tradisi ini bermula dari mitos tentang kehadiran para leluhur yang kembali ke dunia selama Galungan untuk memberkati keturunan mereka. Hari Kuningan adalah wujud syukur kepada leluhur dan dewa atas berkah yang diberikan. Pada masa lalu, perayaan ini dilakukan dengan sederhana, tetapi seiring waktu, tradisi ini menjadi semakin kompleks dengan ditambahkannya elemen-elemen seni dan budaya khas Bali.",
      penjelasan: "Hari Kuningan adalah momen penting dalam siklus keagamaan Hindu Bali. Pada hari ini, umat memberikan sesajen khusus yang dihias dengan janur kuning sebagai simbol kemurnian dan kesucian.",
      judul: "Hari Kuningan",
      link: "https://youtu.be/iR8myUFHRqQ?si=k19uaOKecJWY1NfI",
    },
    {
      id: 8,
      foto: gambar7,
      Sejarah:
        " Ritual ini melibatkan mantra dan sembahyang yang ditujukan kepada Tuhan, serta doa-doa untuk kedamaian diri dan lingkungan. Puja ini mengingatkan umat untuk senantiasa menghubungkan diri dengan energi ilahi dalam setiap aspek kehidupan, menciptakan keseimbangan antara spiritualitas dan aktivitas sehari-hari. Puja Tri Sandhya mulai diperkenalkan pada awal abad ke-20 oleh para tokoh Hindu Bali sebagai upaya memperkuat identitas keagamaan masyarakat Bali. Ritual ini didasarkan pada ajaran Weda, yang mengajarkan pentingnya menghormati Tuhan pada tiga waktu utama: pagi, siang, dan malam. Tradisi ini juga berkembang sebagai bentuk perlawanan budaya terhadap pengaruh kolonialisme, dengan tujuan menjaga praktik spiritual asli Bali.",
      penjelasan: "Puja Tri Sandhya adalah doa rutin yang dilakukan tiga kali sehari oleh umat Hindu Bali.",
      judul: "Puja Tri Sandhya",
      link: "https://youtu.be/ZJebccRnGCI?si=kesCXPcQTDhvlcTW",
    },
    {
      id: 9,
      foto: gambar8,
      Sejarah:
        "Prosesi ini diiringi dengan doa dan gamelan, menciptakan suasana sakral. Tujuannya adalah untuk memohon kesucian dan perlindungan dari Tuhan, serta membuang segala energi negatif sebelum memasuki Hari Raya Nyepi. Upacara ini juga mencerminkan hubungan harmonis antara manusia dan alam Upacara Melasti telah dilakukan oleh umat Hindu Bali sejak abad ke-10 sebagai bagian dari persiapan Hari Raya Nyepi. Tradisi ini berakar dari kepercayaan bahwa air adalah simbol kesucian yang mampu membersihkan kotoran duniawi dan spiritual. Dalam sejarahnya, upacara ini selalu melibatkan prosesi besar-besaran ke sumber air, seperti laut, sungai, atau danau, untuk memohon kesucian alam semesta dan manusia. ",
      penjelasan: "Melasti adalah ritual pembersihan diri yang dilakukan dengan membawa pratima (arca suci) ke laut atau sumber air lainnya. .",
      judul: "Upacara Melasti",
      link: "https://youtu.be/Rk5dgecn2zg?si=EsqoD_UyhsC4GASB",
    },
    {
      id: 10,
      foto: gambar9,
      Sejarah:
        "Biasanya dilakukan untuk individu dengan keadaan tertentu, seperti lahir pada hari yang dianggap kurang baik. Upacara ini juga sering dilakukan sebagai bagian dari proses penyucian spiritual dalam kehidupan sehari-hari. Upacara Ruwatan merupakan tradisi kuno yang ditemukan dalam berbagai budaya Hindu di Nusantara, termasuk Bali dan Jawa. Dalam kepercayaan Bali, ruwatan berfungsi untuk membersihkan seseorang dari nasib buruk atau malapetaka yang disebut 'sukerta.' Tradisi ini dipercaya berasal dari mitologi Ramayana, di mana penyucian dilakukan oleh para dewa untuk melindungi manusia dari kekuatan negatif.",
      penjelasan: "Ruwatan adalah upacara yang bertujuan untuk menghilangkan energi negatif atau nasib buruk. Ritual ini melibatkan persembahan khusus, doa, dan pemercikan air suci. ",
      judul: "Upacara Ruwatan",
      link: "https://youtu.be/Nzx-QEDZtc8?si=sgQU9aFZ19x8-Ski",
    },
    {
      id: 11,
      foto: gambar10,
      Sejarah:
        " Meskipun terlihat keras, tradisi ini sebenarnya dilakukan dengan semangat persaudaraan dan diakhiri dengan doa bersama. Mekare-Kare juga menjadi momen penting untuk mempererat hubungan sosial dan menjaga keharmonisan desa. Tradisi Mekare-Kare berasal dari desa Tenganan Pegringsingan, sebuah desa Bali Aga yang masih mempertahankan tradisi kuno Bali. Ritual ini berakar dari keyakinan bahwa pertarungan simbolis dapat membantu menyeimbangkan energi positif dan negatif dalam masyarakat. Mekare-Kare juga merupakan penghormatan kepada Dewa Indra, dewa perang dan keberanian, sebagai bentuk ucapan terima kasih atas perlindungan yang diberikan.",
      penjelasan: "Mekare-Kare adalah tradisi perang-perangan menggunakan daun pandan berduri sebagai senjata. Ritual ini melibatkan pemuda desa yang saling bertarung secara simbolis untuk menguji keberanian dan kekuatan.",
      judul: "Tradisi Mekare-Kare",
      link: "https://youtu.be/LwBsRRIBpB8?si=RBkIDGXO8RN-U0LU",
    },
    {
      id: 12,
      foto: gambar11,
      Sejarah:
        "Ritual ini melibatkan pemberian sesajen di pura-pura, doa bersama, dan berbagai aktivitas budaya. Masyarakat percaya bahwa melalui Bali Jani, mereka dapat menjaga keharmonisan dengan alam dan mendapatkan berkah untuk masa depan. Upacara Bali Jani bermula sebagai bentuk rasa syukur atas panen yang melimpah. Ritual ini muncul bersamaan dengan perkembangan pertanian di Bali pada abad ke-12, ketika masyarakat mulai mengadopsi sistem irigasi Subak. Tradisi ini berkembang menjadi bagian penting dari perayaan Tahun Baru Saka, mencerminkan rasa syukur dan harapan akan kesejahteraan yang berkelanjutan.",
      penjelasan: "Bali Jani adalah upacara yang dilakukan untuk menyambut Tahun Baru Saka sekaligus merayakan hasil panen. ",
      judul: "Upacara Bali Jani",
      link: "",
    },
    {
      id: 13,
      foto: gambar12,
      Sejarah:
        "Yajna ini meliputi persembahan kepada dewa-dewa (Dewa Yajna), leluhur (Pitra Yajna), manusia lainnya (Manusa Yajna), mahluk hidup lainnya (Bhuta Yajna), dan diri sendiri (Rsi Yajna). Setiap jenis Yajna memiliki ritual khusus yang mencerminkan rasa syukur dan tanggung jawab manusia sebagai bagian dari alam semesta, Konsep Panca Yajna telah dikenal dalam ajaran Hindu sejak ribuan tahun lalu dan diadaptasi secara lokal oleh masyarakat Bali. Panca Yajna adalah lima bentuk pengorbanan yang mencakup penghormatan kepada Tuhan, leluhur, guru, mahluk hidup lainnya, dan diri sendiri. Tradisi ini merupakan wujud harmoni yang diajarkan dalam filosofi Hindu Bali, yaitu menjaga keseimbangan antara hubungan manusia dengan Tuhan, sesama, dan alam.",
      penjelasan: "Panca Yajna adalah lima jenis pengorbanan suci dalam tradisi Hindu Bali.",
      judul: "Panca Yajna",
      link: "https://youtu.be/LwmLD62DiKM?si=jR1PNQ6RXgH0zl7t",
    },
    {
      id: 14,
      foto: gambar13,
      Sejarah:
        "Tradisi ini tidak hanya menjadi hiburan, tetapi juga media untuk mempererat hubungan sosial di masyarakat Tradisi Omed-Omedan berasal dari Banjar Kaja Sesetan, Denpasar, yang telah dilakukan sejak abad ke-18. Tradisi ini bermula sebagai cara untuk meredakan konflik antar pemuda di desa tersebut dan berkembang menjadi simbol persatuan dan cinta kasih. Dalam sejarahnya, tradisi ini juga dipercaya memiliki kekuatan magis untuk mendatangkan keberuntungan bagi masyarakat desa.",
      penjelasan: "Omed-Omedan adalah tradisi unik di mana pemuda-pemudi saling menarik dan mencium satu sama lain sebagai simbol persatuan dan cinta kasih. Ritual ini dilakukan setelah Hari Raya Nyepi, diiringi doa dan persembahan.",
      judul: "Tradisi Omed-Omedan",
      link: "https://youtu.be/zvsjfKvZrdg?si=bXm1VBsTgyM1_eLy",
    },
    {
      id: 15,
      foto: gambar14,
      Sejarah:
        "Arak-arakan ini melibatkan masyarakat yang membawa Ogoh-Ogoh sambil diiringi gamelan dan teriakan semangat. Tujuan dari tradisi ini adalah untuk mengusir energi negatif dan membersihkan lingkungan sebelum memasuki hari Nyepi yang tenang dan damai ,Pawai Ogoh-Ogoh mulai diperkenalkan pada awal abad ke-20 sebagai bagian dari Tawur Kesanga, ritual sehari sebelum Nyepi. Tradisi ini mencerminkan pengusiran energi negatif melalui simbol-simbol raksasa yang diarak keliling desa. Ogoh-Ogoh dibuat dengan kreativitas tinggi, sering kali menggambarkan makhluk mitologis atau karakter kontemporer yang relevan dengan isu-isu sosial.",
      penjelasan: "Ogoh-Ogoh adalah patung raksasa yang diarak keliling desa pada malam sebelum Nyepi.",
      judul: "Pawai Ogoh-Ogoh",
      link: "https://youtu.be/KmMdnxyJ6o8?si=lz2dnl5NlJ6dWRFk",
    },
  ];

  return (
    <div className="bg-black">
      <div className="px-4 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-center text-red-600">ADAT BALI</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {gambarkumpul.map((gambar) => (
            <div
              onClick={() => {
                navigate(`/detail/${gambar.id}`);
              }}
              key={gambar.id}
              className="cursor-pointer border border-gray-700 rounded-md transition-transform transform hover:scale-105"
            >
              <h1 className="pl-2 pb-2 text-xl">{gambar.judul}</h1>
              <img className="px-4 rounded-[1.5rem]" src={gambar.foto} alt={gambar.judul} />
              <div className="p-4">
                <p>{gambar.penjelasan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
