import { useEffect, useState } from "react";

type Category = "All" | "Beauty" | "Portrait" | "Product";

type Work = {
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  alt: string;
  position?: string;
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const works: Work[] = [
  {
    title: "THYS Fashion Campaign",
    category: "Beauty",
    image: asset("portfolio/wantek-instagram-01.jpg"),
    alt: "Model memegang tas dalam kampanye fashion THYS oleh Wantek Photo",
  },
  {
    title: "Monogram Collection",
    category: "Beauty",
    image: asset("portfolio/wantek-instagram-05.jpg"),
    alt: "Model dalam kampanye Monogram Collection oleh Wantek Photo",
  },
  {
    title: "Golden Hour Beauty",
    category: "Beauty",
    image: asset("portfolio/wantek-portrait-02.jpg"),
    alt: "Portrait beauty dengan busana kuning dan pencahayaan hangat",
  },
  {
    title: "Beauty in Color",
    category: "Beauty",
    image: asset("portfolio/wantek-portrait-06.jpg"),
    alt: "Close-up beauty portrait dengan riasan warna-warni",
  },
  {
    title: "Makeup Portrait",
    category: "Beauty",
    image: asset("portfolio/wantek-product-06.jpg"),
    alt: "Close-up beauty portrait dengan riasan mata kuning",
  },
  {
    title: "Spring Summer Editorial",
    category: "Beauty",
    image: asset("portfolio/wantek-beauty-05.jpg"),
    alt: "Model mengenakan koleksi tas Spring Summer",
  },
  {
    title: "Music & Portrait",
    category: "Portrait",
    image: asset("portfolio/wantek-beauty-02.jpg"),
    alt: "Portrait pasangan dalam sesi foto bertema musik",
  },
  {
    title: "Lifestyle Portrait",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-01.jpg"),
    alt: "Pasangan bersantai di ruang keluarga",
  },
  {
    title: "Studio Portrait",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-04.jpg"),
    alt: "Portrait pria dengan busana kasual di latar industrial",
  },
  {
    title: "Editorial Red",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-03.jpg"),
    alt: "Portrait editorial model dengan busana merah di latar studio",
  },
  {
    title: "Corporate Portraits",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-05.jpg"),
    alt: "Portrait tiga profesional dengan latar gedung perkantoran",
  },
  {
    title: "Portrait in Pink",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-07.jpg"),
    alt: "Portrait model dengan busana merah muda di studio",
  },
  {
    title: "Soft Light Beauty",
    category: "Beauty",
    image: asset("portfolio/wantek-beauty-07.jpg"),
    alt: "Portrait beauty model dengan makeup natural dan blazer abu-abu",
  },
  {
    title: "Studio Fashion Portrait",
    category: "Beauty",
    image: asset("portfolio/wantek-beauty-08.jpg"),
    alt: "Model dalam sesi fashion studio dengan latar putih",
  },
  {
    title: "Beauty Editorial Close-up",
    category: "Beauty",
    image: asset("portfolio/wantek-beauty-09.jpg"),
    alt: "Close-up model dengan makeup editorial",
  },
  {
    title: "Pink Studio Beauty",
    category: "Beauty",
    image: asset("portfolio/wantek-beauty-10.jpg"),
    alt: "Model dalam editorial fashion dengan latar merah muda",
  },
  {
    title: "Blue Studio Beauty",
    category: "Beauty",
    image: asset("portfolio/wantek-beauty-11.jpg"),
    alt: "Portrait beauty model dengan latar biru dan makeup natural",
  },
  {
    title: "Monochrome Fashion Editorial",
    category: "Beauty",
    image: asset("portfolio/wantek-beauty-12.jpg"),
    alt: "Dua model menampilkan koleksi busana hitam di studio",
  },
  {
    title: "Blue Couture",
    category: "Beauty",
    image: asset("portfolio/wantek-beauty-13.jpg"),
    alt: "Model mengenakan gaun biru dalam sesi editorial fashion",
  },
  {
    title: "Colorful Fashion Story",
    category: "Beauty",
    image: asset("portfolio/wantek-beauty-14.jpg"),
    alt: "Model mengenakan busana biru dengan properti payung warna-warni",
  },
  {
    title: "Jewelry Beauty Portrait",
    category: "Beauty",
    image: asset("portfolio/wantek-beauty-15.jpg"),
    alt: "Close-up beauty portrait dengan makeup natural dan anting",
  },
  {
    title: "Portrait in Charcoal",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-16.jpg"),
    alt: "Portrait pria duduk dengan busana hitam di studio",
  },
  {
    title: "Couple & Keyboard",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-08.jpg"),
    alt: "Portrait pasangan bersama keyboard dalam sesi studio",
  },
  {
    title: "Dark Studio Portrait",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-09.jpg"),
    alt: "Portrait editorial pria dengan pencahayaan studio dramatis",
  },
  {
    title: "Outdoor Portrait",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-10.jpg"),
    alt: "Portrait pria di area outdoor dengan tas perjalanan",
  },
  {
    title: "Couple in the Garden",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-11.jpg"),
    alt: "Portrait pasangan di tengah suasana taman",
  },
  {
    title: "Portrait in Navy",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-12.jpg"),
    alt: "Portrait model pria dengan busana biru tua di studio",
  },
  {
    title: "Editorial Street Portrait",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-13.jpg"),
    alt: "Portrait editorial pria di latar dinding kota",
  },
  {
    title: "Wedding Portrait",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-14.jpg"),
    alt: "Portrait pasangan pengantin dalam sesi foto pernikahan",
  },
  {
    title: "Live Performance Portrait",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-15.jpg"),
    alt: "Penyanyi tampil di atas panggung dengan pencahayaan biru",
  },
  {
    title: "Stylish Carry Bag",
    category: "Product",
    image: asset("portfolio/wantek-product-07.jpg"),
    alt: "Kampanye tas hitam dengan model dan latar studio merah muda",
  },
  {
    title: "Tony Roma's Food Campaign",
    category: "Product",
    image: asset("portfolio/wantek-product-08.jpg"),
    alt: "Foto burger dalam kampanye menu restoran",
  },
  {
    title: "Pink Living Room Campaign",
    category: "Product",
    image: asset("portfolio/wantek-product-09.jpg"),
    alt: "Styling interior ruang keluarga dengan furnitur dan dekorasi",
  },
  {
    title: "Electric Grill Campaign",
    category: "Product",
    image: asset("portfolio/wantek-product-10.jpg"),
    alt: "Pemanggang listrik dan hidangan dalam set pemotretan produk",
  },
  {
    title: "Espacio Coffee Campaign",
    category: "Product",
    image: asset("portfolio/wantek-product-11.jpg"),
    alt: "Rangkaian minuman kopi dan mesin espresso untuk kampanye produk",
  },
  {
    title: "Living Room Interior",
    category: "Product",
    image: asset("portfolio/wantek-product-12.jpg"),
    alt: "Interior ruang keluarga dengan furnitur dan dekorasi rumah",
  },
  {
    title: "Food Styling",
    category: "Product",
    image: asset("portfolio/wantek-product-13.jpg"),
    alt: "Hidangan panggang ditata untuk pemotretan produk makanan",
  },
  {
    title: "Camera & Watch Product Story",
    category: "Product",
    image: asset("portfolio/wantek-product-14.jpg"),
    alt: "Detail kamera dan jam tangan dalam editorial produk",
  },
  {
    title: "Holiday Plush Toys",
    category: "Product",
    image: asset("portfolio/wantek-product-15.jpg"),
    alt: "Koleksi mainan plush dalam kampanye produk liburan",
  },
  {
    title: "Kels Grill Campaign",
    category: "Product",
    image: asset("portfolio/wantek-instagram-04.jpg"),
    alt: "Foto produk pemanggang Kels dengan hidangan di meja oleh Wantek Photo",
  },
  {
    title: "Kels Rice Cooker Campaign",
    category: "Product",
    image: asset("portfolio/wantek-instagram-03.jpg"),
    alt: "Kampanye rice cooker Kels dengan hidangan di atas meja oleh Wantek Photo",
  },
  {
    title: "Living Room Campaign",
    category: "Product",
    image: asset("portfolio/wantek-beauty-03.jpg"),
    alt: "Kampanye furnitur ruang keluarga",
  },
  {
    title: "Kitchen Essentials",
    category: "Product",
    image: asset("portfolio/wantek-beauty-04.jpg"),
    alt: "Rangkaian peralatan dapur dan perlengkapan memanggang",
  },
  {
    title: "Spring Summer Bag",
    category: "Product",
    image: asset("portfolio/wantek-product-03.jpg"),
    alt: "Kampanye tas Spring Summer dengan model",
  },
  {
    title: "Office Interior Story",
    category: "Product",
    image: asset("portfolio/wantek-product-05.jpg"),
    alt: "Siluet profesional di interior kantor dengan jendela gedung kota",
  },
];

const heroSlides = [works[0], works[7], works[30], works[18]];

const categories: Exclude<Category, "All">[] = [
  "Beauty",
  "Portrait",
  "Product",
];

type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

type BlogPost = {
  title: string;
  category: string;
  readTime: string;
  published?: string;
  author?: string;
  image: string;
  alt: string;
  excerpt: string;
  body: Array<string | BlogBlock>;
};

const blogPosts: BlogPost[] = [
  {
    title: "Membentuk cahaya untuk portrait yang terasa hidup",
    category: "Portrait",
    readTime: "4 menit membaca",
    image: asset("portfolio/wantek-portrait-04.jpg"),
    alt: "Portrait pria dengan busana kasual di latar industrial",
    excerpt:
      "Arah cahaya, jarak, dan bayangan dapat mengubah suasana portrait. Berikut beberapa hal yang perlu diperhatikan sebelum sesi dimulai.",
    body: [
      "Cahaya yang baik tidak selalu berarti cahaya yang paling terang. Untuk portrait, mulai dengan memperhatikan arah datangnya cahaya dan bagaimana bayangan membentuk wajah.",
      "Cahaya jendela memberi transisi yang lembut, sementara sumber yang lebih terarah dapat memberi kontras dan karakter. Geser posisi subjek sedikit demi sedikit sambil mengamati catchlight dan bayangan di sisi wajah.",
      "Yang terpenting, pilih kualitas cahaya sesuai cerita foto. Beri ruang bagi subjek untuk merasa nyaman agar ekspresi dan bahasa tubuh tetap terasa alami.",
    ],
  },
  {
    title: "Warna dan tekstur dalam fotografi beauty",
    category: "Beauty",
    readTime: "3 menit membaca",
    image: asset("portfolio/wantek-portrait-06.jpg"),
    alt: "Close-up beauty portrait dengan riasan berwarna",
    excerpt:
      "Riasan, warna latar, dan detail kulit bekerja bersama untuk membuat foto beauty terasa utuh, bukan ramai.",
    body: [
      "Dalam foto beauty, warna yang kuat bisa menjadi titik fokus, tetapi perlu diseimbangkan dengan elemen lain di dalam frame. Tentukan satu aksen utama, lalu jaga latar dan wardrobe tetap mendukung.",
      "Tekstur kulit dan riasan terlihat berbeda di setiap jenis cahaya. Cahaya lembut membantu menjaga detail tetap halus, sedangkan cahaya yang lebih keras dapat menonjolkan tekstur dan memberi kesan editorial.",
      "Sebelum memotret, samakan referensi visual dengan tim makeup dan styling. Persiapan kecil ini membantu warna, tekstur, dan mood tetap konsisten dari awal hingga hasil akhir.",
    ],
  },
  {
    title: "Foto produk yang bercerita lewat detail",
    category: "Product",
    readTime: "5 menit membaca",
    image: asset("portfolio/wantek-instagram-04.jpg"),
    alt: "Pemanggang Kels dan hidangan dalam set pemotretan produk",
    excerpt:
      "Komposisi, prop, dan pencahayaan membantu calon pelanggan memahami fungsi sekaligus karakter sebuah produk.",
    body: [
      "Foto produk yang efektif tidak hanya menunjukkan bentuk barang, tetapi juga memberi konteks tentang cara produk digunakan. Mulailah dari satu pesan utama yang perlu ditangkap audiens.",
      "Pilih properti yang memperkuat cerita tanpa mengalihkan perhatian. Sisakan ruang yang cukup di sekitar produk, lalu gunakan cahaya untuk memisahkan bentuk dan material dari latar.",
      "Ambil beberapa variasi: tampilan keseluruhan, detail material, dan momen penggunaan. Rangkaian gambar ini membuat cerita produk lebih lengkap untuk katalog maupun kampanye.",
    ],
  },
  {
    title: "Menjaga Jiwa di Balik Lensa: Fotografi di Era Kecerdasan Buatan (AI)",
    category: "Photography Insights / Tren",
    readTime: "6 menit membaca",
    published: "Oktober 2026",
    author: "Wantekphoto",
    image: asset("portfolio/wantek-portrait-03.jpg"),
    alt: "Portrait profesional dari portofolio Wantek Photo, merepresentasikan sentuhan manusia dalam fotografi",
    excerpt:
      "Di tengah gambar yang bisa dihasilkan secara instan oleh AI, momen autentik, empati, dan cerita manusia tetap menjadi jiwa fotografi.",
    body: [
      {
        type: "paragraph",
        text: 'Dalam beberapa tahun terakhir, lanskap industri kreatif—khususnya dunia fotografi—mengalami pergeseran yang sangat masif. Kehadiran teknologi Artificial Intelligence (AI) atau Kecerdasan Buatan membuat siapa saja bisa "menciptakan" gambar yang luar biasa hanya dengan mengetikkan beberapa kalimat perintah (prompt).',
      },
      {
        type: "paragraph",
        text: "Bagi sebagian fotografer tradisional, fenomena ini memunculkan kecemasan: Apakah profesi fotografer akan segera tergantikan oleh mesin?",
      },
      {
        type: "paragraph",
        text: "Sebagai seorang fotografer yang, di sisi lain, juga hidup berdampingan dengan perkembangan teknologi digital, saya melihat AI bukan sebagai ancaman yang mematikan, melainkan sebagai cermin yang memaksa kita untuk mendefinisikan ulang apa arti sejati dari sebuah fotografi.",
      },
      {
        type: "heading",
        text: '1. Ketika Gambar Menjadi "Instan", Apa Nilai Sebuah Karya?',
      },
      {
        type: "paragraph",
        text: "Hari ini, AI mampu menghasilkan foto pemandangan yang megah, model fesyen dengan pencahayaan sempurna, hingga produk komersial tanpa perlu menyewa studio mahal. Gambar-gambar yang dihasilkan sangat mulus secara visual.",
      },
      {
        type: "paragraph",
        text: "Namun, ada satu hal fundamental yang tidak pernah bisa ditiru oleh AI: kejadian nyata, waktu yang tidak bisa diputar ulang, dan jiwa manusia.",
      },
      {
        type: "paragraph",
        text: "Sebuah foto portofolio profesional bukan sekadar kumpulan piksel yang indah dipandang. Ia adalah rekaman dari sebuah detik yang autentik:",
      },
      {
        type: "list",
        items: [
          "Getar gugup seorang klien saat pertama kali berdiri di depan kamera.",
          "Ekspresi tawa lepas yang natural karena suasana hangat saat sesi pemotretan.",
          "Keringat dan kerja keras di balik layar (behind the scene) saat mengejar momen golden hour di lapangan.",
        ],
      },
      {
        type: "paragraph",
        text: 'Elemen-elemen emosional dan dokumenter inilah yang memberikan "nyawa" pada karya fotografi yang tidak akan pernah bisa direplikasi oleh generator AI.',
      },
      {
        type: "heading",
        text: "2. AI sebagai Alat Bantu (Tools), Bukan Pengganti Visi Kreatif",
      },
      {
        type: "paragraph",
        text: "Alih-alih menolak kehadiran teknologi, fotografer modern dapat memanfaatkan AI sebagai alat bantu yang mempercepat proses kerja (workflow), bukan menghapuskan proses kreatifnya:",
      },
      {
        type: "list",
        items: [
          "Penyuntingan cepat (editing efficiency): fitur berbasis AI di aplikasi seperti Adobe Lightroom membantu mempercepat seleksi foto, pembersihan latar belakang yang rumit, hingga noise reduction. Waktu yang biasanya dihabiskan berjam-jam di depan komputer kini bisa dialihkan untuk berinteraksi lebih dekat dengan klien.",
          "Eksplorasi konsep: AI bisa digunakan sebagai papan mood (moodboard) digital untuk mencari inspirasi gaya warna atau tata letak sebelum benar-benar turun ke lapangan melakukan sesi pemotretan.",
        ],
      },
      {
        type: "heading",
        text: "3. Mengapa Fotografer Profesional Justru Semakin Dicari?",
      },
      {
        type: "paragraph",
        text: 'Justru di era di mana internet dibanjiri oleh jutaan gambar buatan AI yang terlihat seragam dan "terlalu sempurna", keaslian menjadi barang mewah yang paling dicari.',
      },
      {
        type: "paragraph",
        text: "Klien korporat, pasangan yang ingin mengabadikan momen pernikahan, atau individu yang memesan sesi potret profil profesional kini semakin menghargai human touch. Mereka ingin cerita nyata, bukan ilusi digital. Mereka ingin berkolaborasi dengan manusia yang bisa mendengarkan cerita mereka, memahami visi mereka, dan mengeksekusinya dengan empati.",
      },
      {
        type: "heading",
        text: "Kesimpulan: Kamera Menangkap Cahaya, Fotografer Menangkap Cerita",
      },
      {
        type: "paragraph",
        text: "AI dapat menciptakan gambar, tetapi AI tidak memiliki pengalaman hidup. Ia tidak tahu bagaimana rasanya berdiri di bawah terik matahari demi mendapatkan sudut pandang terbaik, atau bagaimana membangun chemistry agar orang yang awalnya kaku di depan kamera bisa tersenyum lepas.",
      },
      {
        type: "paragraph",
        text: "Di era kecerdasan buatan ini, masa depan fotografi tetap berada di tangan mereka yang berani memegang kamera dengan integritas, empati, dan sudut pandang yang unik.",
      },
      {
        type: "paragraph",
        text: "Karena pada akhirnya, fotografi bukan tentang seberapa canggih alat yang digunakan, melainkan tentang cerita apa yang ingin Anda sampaikan kepada dunia.",
      },
      {
        type: "paragraph",
        text: "Ingin berdiskusi atau mengabadikan momen autentik Anda melalui lensa? Mari terhubung dan wujudkan cerita visual Anda bersama Wantekphoto.",
      },
    ] satisfies Array<string | BlogBlock>,
  },
];

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<
    Exclude<Category, "All"> | null
  >(null);
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroAutoplay, setHeroAutoplay] = useState(true);

  const visibleWorks = activeCategory
    ? works.filter((work) => work.category === activeCategory)
    : [];

  useEffect(() => {
    if (!heroAutoplay) return;
    const interval = window.setInterval(() => {
      setHeroIndex((index) => (index + 1) % heroSlides.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [heroAutoplay]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  if (window.location.pathname.replace(/\/+$/, "").endsWith("/blog")) {
    return <BlogPage />;
  }

  return (
    <div className="min-h-screen bg-[#f4f3ef] text-[#181816]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-black/10 bg-[#f4f3ef]/90 backdrop-blur-md">
        <div className="mx-auto flex h-[74px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <button
            onClick={() => scrollTo("home")}
            className="text-[15px] font-semibold tracking-[0.2em] uppercase"
          >
            Wantek<span className="text-[#a65a3a]">.</span>
          </button>

          <nav className="hidden items-center gap-9 text-[11px] font-semibold tracking-[0.16em] uppercase md:flex">
            <button className="nav-link" onClick={() => scrollTo("work")}>
              Portfolio
            </button>
            <button className="nav-link" onClick={() => scrollTo("about")}>
              About
            </button>
            <a className="nav-link" href={`${import.meta.env.BASE_URL}blog/`}>
              Blog
            </a>
            <button className="nav-link" onClick={() => scrollTo("contact")}>
              Contact
            </button>
          </nav>

          <a
            href="https://www.instagram.com/wantekphoto/"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 border-b border-black pb-1 text-[11px] font-semibold tracking-[0.14em] uppercase sm:flex"
          >
            Instagram
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Open menu"
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto flex min-h-[92svh] max-w-[1480px] items-end px-5 pt-28 pb-12 sm:px-8 sm:pb-16 lg:px-12"
        >
          <div className="grid w-full items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative z-10 lg:pb-8">
              <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-black/55 uppercase">
                <span className="h-px w-8 bg-[#a65a3a]" />
                Photographer / Visual Storyteller
              </p>
              <h1 className="font-display max-w-[830px] text-[clamp(4.5rem,10vw,9.5rem)] leading-[0.74] font-medium tracking-[-0.06em]">
                Beauty
                <span className="block pl-[0.4em] italic">&amp; form.</span>
              </h1>
              <div className="mt-10 flex max-w-xl flex-col gap-7 border-t border-black/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-sm text-sm leading-6 text-black/60">
                  Portrait, beauty, dan product photography dengan pendekatan
                  visual yang tenang, jujur, dan penuh detail.
                </p>
                <button
                  onClick={() => scrollTo("work")}
                  className="group flex shrink-0 items-center gap-3 text-[11px] font-semibold tracking-[0.16em] uppercase"
                >
                  View selected work
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-black/25 transition-colors group-hover:bg-black group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[570px] lg:mx-0 lg:ml-auto">
              <div className="absolute -top-5 -left-5 h-24 w-24 border-t border-l border-[#a65a3a]/70" />
              <div className="relative aspect-[4/5] overflow-hidden bg-[#ddd8cf]">
                <img
                  key={heroIndex}
                  src={heroSlides[heroIndex].image}
                  alt={heroSlides[heroIndex].alt}
                  className="hero-slide h-full w-full object-cover object-center saturate-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 text-[9px] font-semibold tracking-[0.2em] text-white/85 uppercase">
                  Wantek portfolio / {String(heroIndex + 1).padStart(2, "0")}
                </p>
                <div className="absolute right-4 bottom-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setHeroAutoplay(false);
                      setHeroIndex(
                        (heroIndex - 1 + heroSlides.length) % heroSlides.length,
                      );
                    }}
                    className="grid h-8 w-8 place-items-center rounded-full border border-white/60 text-lg text-white transition-colors hover:bg-white hover:text-black"
                    aria-label="Foto hero sebelumnya"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroAutoplay(!heroAutoplay)}
                    className="grid h-8 w-8 place-items-center rounded-full border border-white/60 text-[10px] text-white transition-colors hover:bg-white hover:text-black"
                    aria-label={
                      heroAutoplay
                        ? "Jeda slideshow hero"
                        : "Lanjutkan slideshow hero"
                    }
                  >
                    {heroAutoplay ? "Ⅱ" : "▶"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setHeroAutoplay(false);
                      setHeroIndex((heroIndex + 1) % heroSlides.length);
                    }}
                    className="grid h-8 w-8 place-items-center rounded-full border border-white/60 text-lg text-white transition-colors hover:bg-white hover:text-black"
                    aria-label="Foto hero berikutnya"
                  >
                    ›
                  </button>
                </div>
              </div>
              <p className="absolute right-0 -bottom-7 text-[9px] tracking-[0.18em] text-black/45 uppercase">
                Wantek Photo — Est. 2024
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="bg-[#111110] py-24 text-[#f4f3ef] sm:py-32">
          <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
            <div className="mb-12 flex flex-col justify-between gap-10 border-b border-white/15 pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-[10px] font-semibold tracking-[0.22em] text-white/45 uppercase">
                  {activeCategory
                    ? `Wantek Photo · ${activeCategory} album`
                    : "Wantek Photo · Portfolio"}
                </p>
                <h2 className="font-display text-5xl leading-none tracking-[-0.04em] sm:text-7xl">
                  {activeCategory ? (
                    <>
                      {activeCategory}
                      <span className="text-[#a65a3a]">.</span>
                    </>
                  ) : (
                    <>
                      The collection<span className="text-[#a65a3a]">.</span>
                    </>
                  )}
                </h2>
              </div>
              {activeCategory && (
                <button
                  type="button"
                  onClick={() => setActiveCategory(null)}
                  className="album-back"
                >
                  <span aria-hidden="true">←</span>
                  Semua kategori
                </button>
              )}
            </div>

            {activeCategory ? (
              <>
                <div className="album-carousel">
              <button
                type="button"
                className="album-arrow"
                onClick={() =>
                  setActiveWorkIndex(
                    (activeWorkIndex - 1 + visibleWorks.length) %
                      visibleWorks.length,
                  )
                }
                aria-label="Foto sebelumnya"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <figure className="album-frame" aria-live="polite">
                <div className="album-image-wrap">
                  <img
                    key={visibleWorks[activeWorkIndex].title}
                    src={visibleWorks[activeWorkIndex].image}
                    alt={visibleWorks[activeWorkIndex].alt}
                    style={{
                      objectPosition: visibleWorks[activeWorkIndex].position,
                    }}
                    className="album-image"
                    fetchPriority="high"
                  />
                  <span className="album-counter">
                    {String(activeWorkIndex + 1).padStart(2, "0")}
                    <span className="mx-2 text-white/30">/</span>
                    {String(visibleWorks.length).padStart(2, "0")}
                  </span>
                </div>
                <figcaption className="album-caption">
                  <div>
                    <p className="mb-2 text-[9px] font-semibold tracking-[0.22em] text-[#c28a6f] uppercase">
                      {visibleWorks[activeWorkIndex].category}
                    </p>
                    <h3 className="font-display text-3xl leading-none tracking-[-0.02em] sm:text-4xl">
                      {visibleWorks[activeWorkIndex].title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-xs leading-6 text-white/50 sm:text-sm">
                      {visibleWorks[activeWorkIndex].alt}
                    </p>
                  </div>
                  <span className="hidden text-[9px] font-semibold tracking-[0.2em] text-white/35 uppercase sm:block">
                    Wantek Photo
                  </span>
                </figcaption>
              </figure>

              <button
                type="button"
                className="album-arrow"
                onClick={() =>
                  setActiveWorkIndex((activeWorkIndex + 1) % visibleWorks.length)
                }
                aria-label="Foto berikutnya"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
                </div>

                <div className="album-dots" aria-label="Pilih foto">
                  {visibleWorks.map((work, index) => (
                    <button
                      key={work.title}
                      type="button"
                      className={`album-dot ${index === activeWorkIndex ? "is-active" : ""}`}
                      onClick={() => setActiveWorkIndex(index)}
                      aria-label={`Tampilkan foto ${index + 1}: ${work.title}`}
                      aria-current={
                        index === activeWorkIndex ? "true" : undefined
                      }
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="category-grid">
                {categories.map((category) => {
                    const categoryWorks = works.filter(
                      (work) => work.category === category,
                    );
                    const cover = categoryWorks[0];

                    return (
                      <button
                        key={category}
                        type="button"
                        className="category-card"
                        onClick={() => {
                          setActiveCategory(category);
                          setActiveWorkIndex(0);
                        }}
                        aria-label={`Buka album ${category}, ${categoryWorks.length} foto`}
                      >
                        <span className="category-card-image">
                          <img src={cover.image} alt="" loading="lazy" />
                          <span className="category-card-overlay" />
                          <span className="category-card-count">
                            {String(categoryWorks.length).padStart(2, "0")}{" "}
                            photographs
                          </span>
                          <span className="category-card-title">
                            <span className="font-display text-4xl sm:text-5xl">
                              {category}
                            </span>
                            <span className="category-card-open">
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                          </span>
                        </span>
                      </button>
                    );
                })}
              </div>
            )}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
            <div className="about-heading">
              <p className="about-eyebrow">The person behind the photographs</p>
              <h2 className="font-display">
                Behind the Lens <span>&amp; Story.</span>
              </h2>
            </div>

            <div className="about-layout">
              <div className="about-portrait-column">
                <div className="about-portrait">
                  <img
                    src={asset("wantek-siswanto.png")}
                    alt="Wantek Siswanto berdiri di koridor dengan komposisi simetris"
                    className="about-portrait-image"
                    loading="lazy"
                  />
                  <span className="about-portrait-shade" />
                  <span className="about-portrait-corner about-portrait-corner-top" />
                  <span className="about-portrait-label">
                    Wantek Siswanto / Photographer
                  </span>
                  <span className="about-portrait-index">01 — 01</span>
                  <span className="about-portrait-corner about-portrait-corner-bottom" />
                </div>
                <div className="about-credentials">
                  <div>
                    <span>01</span>
                    <p>Seni Rupa · UNJ</p>
                  </div>
                  <div>
                    <span>02</span>
                    <p>Fotografi · ISI Yogyakarta</p>
                  </div>
                  <div>
                    <span>03</span>
                    <p>Magister Ilmu Komunikasi · UMB</p>
                  </div>
                  <div>
                    <span>10+</span>
                    <p>Tahun di industri kreatif</p>
                  </div>
                </div>
              </div>

              <div className="about-copy">
                <p className="about-intro">
                  Halo, saya <span>Wantek Siswanto.</span> Bagi saya, fotografi
                  bukan sekadar menangkap pantulan cahaya, melainkan cara
                  merekam jiwa, menyusun emosi, dan menceritakan narasi yang
                  jujur dari setiap subjek di depan lensa.
                </p>
                <p>
                  Perjalanan saya di dunia visual bermula dari bangku kuliah
                  Seni Rupa di Universitas Negeri Jakarta dan diperdalam
                  melalui studi Fotografi di Institut Seni Indonesia (ISI)
                  Yogyakarta. Di tengah perjalanan profesional, saya juga
                  sedang menempuh pendidikan Magister Ilmu Komunikasi di
                  Universitas Mercu Buana sebagai upaya mempertemukan
                  pengalaman praktis dengan perspektif akademis di bidang
                  komunikasi.
                </p>
                <p>
                  Dengan rekam jejak lebih dari satu dekade berkecimpung di
                  industri media kreatif nasional—mulai dari berkontribusi
                  sebagai fotografer dan penulis untuk Tabloid NOVA, hingga
                  memotret untuk berbagai majalah gaya hidup dan komersial
                  terkemuka di bawah naungan Kompas Gramedia, MRA Media Group,
                  dan Kawan Lama Group—saya terbiasa menghadirkan standar visual
                  yang tajam, penuh detail, dan memiliki karakter timeless.
                </p>
                <p>
                  Melalui Wantekphoto, setiap bingkai dikurasi dengan pendekatan
                  yang tenang, natural, dan mengutamakan estetika visual yang
                  bersih. Baik itu dalam proyek potret personal, komersial
                  produk, maupun dokumentasi cerita kehidupan, fokus saya
                  adalah menjaga keaslian momen agar tetap hidup dan bermakna
                  ketika dilihat kembali bertahun-tahun ke depan.
                </p>

                <div className="about-signoff">
                  <p className="font-display">
                    Let’s capture stories that matter.
                  </p>
                  <a
                    href="https://www.instagram.com/wantekphoto/"
                    target="_blank"
                    rel="noreferrer"
                    className="about-instagram"
                  >
                    Mari terhubung di Instagram @wantekphoto
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-5 sm:px-8 sm:pb-8">
          <div className="mx-auto max-w-[1480px] bg-[#a65a3a] px-6 py-20 text-[#f8f3eb] sm:px-12 sm:py-28 lg:px-20">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
              <div className="flex flex-col items-start">
                <p className="mb-7 text-[10px] font-semibold tracking-[0.22em] text-white/65 uppercase">
                  Have a project in mind?
                </p>
                <h2 className="font-display max-w-3xl text-6xl leading-[0.9] tracking-[-0.05em] sm:text-8xl lg:text-7xl xl:text-8xl">
                  Let's create.
                </h2>
                <a
                  href="https://wa.me/6285370080083"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block text-sm tracking-[0.12em] text-white/75 transition-colors hover:text-white"
                >
                  WhatsApp — 0853-7008-0083
                </a>
                <a
                  href="https://wa.me/6285370080083"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 flex items-center gap-5 text-[11px] font-semibold tracking-[0.16em] uppercase"
                >
                  Chat on WhatsApp
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-white/45 transition-colors group-hover:bg-white group-hover:text-[#a65a3a]">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </a>
              </div>
              <div className="w-full max-w-lg lg:justify-self-end">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-white/75 uppercase">
                    Find us
                  </p>
                  <a
                    href="https://maps.app.goo.gl/KQbMVdmj3jMhxcJ57"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-[9px] font-semibold tracking-[0.14em] text-white/80 uppercase transition-colors hover:text-white"
                  >
                    Buka di Google Maps
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
                <div className="aspect-[16/9] max-h-60 overflow-hidden border border-white/35 bg-[#181816]/10">
                  <iframe
                    title="Lokasi Wantekphoto di Google Maps"
                    src="https://maps.google.com/maps?q=-6.2290212%2C106.6927902&z=16&output=embed"
                    className="h-full w-full border-0 grayscale-[0.15]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1480px] flex-col gap-5 px-5 py-8 text-[9px] font-semibold tracking-[0.17em] text-black/45 uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} Wantek Photo</p>
        <a
          href="https://wa.me/6285370080083"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-black"
        >
          WhatsApp · 0853-7008-0083
        </a>
        <button onClick={() => scrollTo("home")} className="text-left hover:text-black">
          Back to top ↑
        </button>
      </footer>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#181816] p-6 text-[#f4f3ef] md:hidden">
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-semibold tracking-[0.2em] uppercase">
              Wantek<span className="text-[#a65a3a]">.</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="grid h-10 w-10 place-items-center text-2xl font-light"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <nav className="font-display my-auto flex flex-col gap-5 text-6xl">
            <button className="text-left" onClick={() => scrollTo("work")}>
              Portfolio
            </button>
            <button className="text-left" onClick={() => scrollTo("about")}>
              About
            </button>
            <a
              className="text-left"
              href={`${import.meta.env.BASE_URL}blog/`}
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </a>
            <button className="text-left" onClick={() => scrollTo("contact")}>
              Contact
            </button>
          </nav>
          <a
            href="https://www.instagram.com/wantekphoto/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border-t border-white/20 pt-5 text-xs tracking-[0.15em] uppercase"
          >
            @wantekphoto
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}

    </div>
  );
}

function BlogPage() {
  const [activePost, setActivePost] = useState<(typeof blogPosts)[number] | null>(
    null,
  );

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Blog — Wantek Photo";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f3ef] text-[#181816]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-black/10 bg-[#f4f3ef]/90 backdrop-blur-md">
        <div className="mx-auto flex h-[74px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href={import.meta.env.BASE_URL}
            className="text-[15px] font-semibold tracking-[0.2em] uppercase"
          >
            Wantek<span className="text-[#a65a3a]">.</span>
          </a>
          <nav className="flex items-center gap-6 text-[11px] font-semibold tracking-[0.16em] uppercase sm:gap-9">
            <a className="nav-link" href={`${import.meta.env.BASE_URL}#work`}>
              Portfolio
            </a>
            <a className="nav-link" href={`${import.meta.env.BASE_URL}#about`}>
              About
            </a>
            <a className="nav-link" href={`${import.meta.env.BASE_URL}blog/`}>
              Blog
            </a>
            <a
              className="nav-link hidden sm:inline-block"
              href={`${import.meta.env.BASE_URL}#contact`}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1480px] px-5 pt-36 pb-24 sm:px-8 sm:pt-44 lg:px-12">
        <div className="mb-16 border-b border-black/15 pb-10 sm:mb-20 sm:pb-14">
          <p className="section-label">Stories from the studio</p>
          <h1 className="font-display mt-8 text-7xl leading-[0.85] tracking-[-0.05em] sm:text-9xl">
            Journal<span className="text-[#a65a3a]">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-7 text-black/60">
            Catatan tentang portrait, beauty, dan product photography—dari
            persiapan hingga proses membangun sebuah gambar.
          </p>
        </div>

        {activePost ? (
          <article className="mx-auto max-w-3xl">
            <button
              className="mb-10 text-[10px] font-semibold tracking-[0.16em] text-black/55 uppercase hover:text-black"
              onClick={() => setActivePost(null)}
            >
              ← Kembali ke semua artikel
            </button>
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[#a65a3a] uppercase">
              {activePost.category} · {activePost.readTime}
            </p>
            <h2 className="font-display mt-5 text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
              {activePost.title}
            </h2>
            {(activePost.published || activePost.author) && (
              <p className="mt-5 text-[10px] font-semibold tracking-[0.14em] text-black/45 uppercase">
                {activePost.published}
                {activePost.published && activePost.author && (
                  <span className="px-2">·</span>
                )}
                {activePost.author && <>Oleh {activePost.author}</>}
              </p>
            )}
            <img
              src={activePost.image}
              alt={activePost.alt}
              className="mt-10 max-h-[620px] w-full bg-[#ddd8cf] object-cover"
            />
            <div className="mt-10 space-y-6 text-sm leading-8 text-black/65">
              {activePost.body.map((block, index) => {
                if (typeof block === "string") {
                  return <p key={block}>{block}</p>;
                }

                if (block.type === "heading") {
                  return (
                    <h3
                      key={`${block.type}-${index}`}
                      className="font-display pt-5 text-3xl leading-tight text-[#181816] sm:text-4xl"
                    >
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul
                      key={`${block.type}-${index}`}
                      className="list-disc space-y-3 pl-6 marker:text-[#a65a3a]"
                    >
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return <p key={`${block.type}-${index}`}>{block.text}</p>;
              })}
            </div>
          </article>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-[#ddd8cf]">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.025]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col border-b border-black/15 py-6">
                  <p className="text-[9px] font-semibold tracking-[0.18em] text-[#a65a3a] uppercase">
                    {post.category} <span className="px-2 text-black/30">/</span>
                    {post.published && (
                      <>
                        {post.published}{" "}
                        <span className="px-2 text-black/30">/</span>
                      </>
                    )}
                    {post.readTime}
                  </p>
                  <h2 className="font-display mt-4 text-4xl leading-[0.95] tracking-[-0.03em]">
                    {post.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-6 text-black/60">
                    {post.excerpt}
                  </p>
                  <button
                    className="mt-6 flex w-fit items-center gap-3 border-b border-black pb-2 text-[10px] font-semibold tracking-[0.15em] uppercase"
                    onClick={() => {
                      setActivePost(post);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Baca artikel
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <footer className="mx-auto flex max-w-[1480px] flex-col gap-5 border-t border-black/10 px-5 py-8 text-[9px] font-semibold tracking-[0.17em] text-black/45 uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} Wantek Photo</p>
        <a
          href={import.meta.env.BASE_URL}
          className="transition-colors hover:text-black"
        >
          Kembali ke beranda ↑
        </a>
      </footer>
    </div>
  );
}
