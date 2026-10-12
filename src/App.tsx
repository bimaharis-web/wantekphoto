import { useEffect, useState } from "react";

type Category = "All" | "Beauty" | "Portrait" | "Product";

type Work = {
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  alt: string;
  position?: string;
};

const works: Work[] = [
  {
    title: "Portrait & Campaign",
    category: "Beauty",
    image: "/portfolio/wantek-portfolio-01.png",
    alt: "Koleksi portrait, beauty, lifestyle, dan campaign oleh Wantek Photo",
  },
  {
    title: "Fashion Stories",
    category: "Portrait",
    image: "/portfolio/wantek-portfolio-02.png",
    alt: "Koleksi fashion, editorial, dan commercial portrait oleh Wantek Photo",
  },
  {
    title: "Commercial Works",
    category: "Product",
    image: "/portfolio/wantek-portfolio-03.png",
    alt: "Koleksi product, food, interior, dan commercial photography oleh Wantek Photo",
  },
  {
    title: "People & Moments",
    category: "Portrait",
    image: "/portfolio/wantek-portfolio-04.png",
    alt: "Koleksi event, family, lifestyle, dan portrait oleh Wantek Photo",
  },
];

const categories: Category[] = ["All", "Beauty", "Portrait", "Product"];

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
