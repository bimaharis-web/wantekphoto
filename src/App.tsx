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
    image: asset("portfolio/wantek-portrait-04.jpg"),
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
    image: asset("portfolio/wantek-portrait-02.jpg"),
    alt: "Portrait pria dengan busana kasual di lokasi",
  },
  {
    title: "City Portraits",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-03.jpg"),
    alt: "Portrait profesional dengan latar gedung kota",
  },
  {
    title: "Editorial Red",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-05.jpg"),
    alt: "Portrait editorial model dengan busana merah",
  },
  {
    title: "Portrait in White",
    category: "Portrait",
    image: asset("portfolio/wantek-portrait-07.jpg"),
    alt: "Portrait model dengan busana merah muda di latar studio putih",
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
    title: "Interior Story",
    category: "Product",
    image: asset("portfolio/wantek-product-05.jpg"),
    alt: "Styling furnitur dan dekorasi interior bernuansa merah muda",
  },
];

const categories: Category[] = ["All", "Beauty", "Portrait", "Product"];

const blogPosts = [
  {
    title: "Membentuk cahaya untuk portrait yang terasa hidup",
    category: "Portrait",
    readTime: "4 menit membaca",
    image: asset("portfolio/wantek-portrait-02.jpg"),
    alt: "Portrait pria dengan cahaya lembut",
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
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  useEffect(() => {
    document.body.style.overflow = selectedWork || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedWork, menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedWork(null);
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
                  src={works[0].image}
                  alt={works[0].alt}
                  className="h-full w-full object-cover object-center saturate-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 text-[9px] font-semibold tracking-[0.2em] text-white/85 uppercase">
                  Wantek portfolio / 01
                </p>
              </div>
              <p className="absolute right-0 -bottom-7 text-[9px] tracking-[0.18em] text-black/45 uppercase">
                Wantek Photo — Est. 2024
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="bg-[#181816] py-24 text-[#f4f3ef] sm:py-32">
          <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
            <div className="mb-14 flex flex-col justify-between gap-10 border-b border-white/15 pb-8 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-[10px] font-semibold tracking-[0.22em] text-white/45 uppercase">
                  Selected portfolio
                </p>
                <h2 className="font-display text-5xl leading-none tracking-[-0.04em] sm:text-7xl">
                  Recent work
                </h2>
              </div>
              <div className="flex flex-wrap gap-x-7 gap-y-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`filter-button ${
                      activeCategory === category ? "is-active" : ""
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="portfolio-grid">
              {visibleWorks.map((work, index) => (
                <button
                  key={work.title}
                  onClick={() => setSelectedWork(work)}
                  className="portfolio-item group text-left"
                  aria-label={`View ${work.title}`}
                >
                  <div className="relative h-full min-h-[360px] overflow-hidden bg-white/5">
                    <img
                      src={work.image}
                      alt={work.alt}
                      style={{ objectPosition: work.position }}
                      className="h-full w-full object-contain opacity-90 transition duration-700 ease-out group-hover:scale-[1.012] group-hover:opacity-100"
                      loading={index > 2 ? "lazy" : "eager"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
                      <div>
                        <p className="mb-1.5 text-[9px] font-semibold tracking-[0.2em] text-white/60 uppercase">
                          {work.category}
                        </p>
                        <h3 className="font-display text-3xl tracking-[-0.02em]">
                          {work.title}
                        </h3>
                      </div>
                      <span className="grid h-9 w-9 translate-y-2 place-items-center rounded-full border border-white/40 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 sm:py-32 lg:py-40">
          <div className="mx-auto grid max-w-[1480px] gap-16 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24 lg:px-12">
            <div>
              <p className="section-label">About the studio</p>
              <div className="mt-10 aspect-[4/5] max-w-md overflow-hidden bg-[#ddd8cf]">
                <img
                  src={works[1].image}
                  alt="Koleksi karya Wantek Photo"
                  className="h-full w-full object-cover object-center grayscale-[15%]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Menciptakan gambar yang terasa{" "}
                  <span className="italic text-[#a65a3a]">personal</span>, bukan
                  sekadar sempurna.
                </p>
                <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2">
                  <p className="text-sm leading-7 text-black/60">
                    Wantek Photo berfokus pada portrait, beauty, dan product
                    photography. Setiap sesi dibangun dari cahaya, karakter,
                    dan detail untuk menghasilkan visual yang bersih dan
                    berkesan.
                  </p>
                  <p className="text-sm leading-7 text-black/60">
                    Tersedia untuk proyek personal, editorial, campaign, dan
                    kebutuhan visual brand. Mari ceritakan ide Anda dan
                    menciptakan sesuatu bersama.
                  </p>
                </div>
              </div>
              <a
                href="https://www.instagram.com/wantekphoto/"
                target="_blank"
                rel="noreferrer"
                className="group mt-12 flex w-fit items-center gap-4 border-b border-black pb-2 text-[11px] font-semibold tracking-[0.16em] uppercase"
              >
                Follow @wantekphoto
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-5 sm:px-8 sm:pb-8">
          <div className="mx-auto max-w-[1480px] bg-[#a65a3a] px-6 py-20 text-[#f8f3eb] sm:px-12 sm:py-28 lg:px-20">
            <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
              <div>
                <p className="mb-7 text-[10px] font-semibold tracking-[0.22em] text-white/65 uppercase">
                  Have a project in mind?
                </p>
                <h2 className="font-display max-w-3xl text-6xl leading-[0.9] tracking-[-0.05em] sm:text-8xl lg:text-9xl">
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
              </div>
              <a
                href="https://wa.me/6285370080083"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 text-[11px] font-semibold tracking-[0.16em] uppercase"
              >
                Chat on WhatsApp
                <span className="grid h-14 w-14 place-items-center rounded-full border border-white/45 transition-colors group-hover:bg-white group-hover:text-[#a65a3a]">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
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

      {selectedWork && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4 backdrop-blur-sm sm:p-10"
          onClick={() => setSelectedWork(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedWork.title}
        >
          <button
            onClick={() => setSelectedWork(null)}
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-white/30 text-2xl font-light text-white transition hover:bg-white hover:text-black"
            aria-label="Close image"
          >
            ×
          </button>
          <div
            className="flex max-h-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedWork.image}
              alt={selectedWork.alt}
              className="max-h-[78vh] max-w-full object-contain"
            />
            <div className="mt-5 flex w-full items-center justify-between text-white">
              <h3 className="font-display text-3xl">{selectedWork.title}</h3>
              <p className="text-[9px] font-semibold tracking-[0.2em] text-white/55 uppercase">
                {selectedWork.category}
              </p>
            </div>
          </div>
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
            <img
              src={activePost.image}
              alt={activePost.alt}
              className="mt-10 max-h-[620px] w-full bg-[#ddd8cf] object-cover"
            />
            <div className="mt-10 space-y-6 text-sm leading-8 text-black/65">
              {activePost.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
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
