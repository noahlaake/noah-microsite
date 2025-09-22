// app/page.tsx
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Top nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-4 w-4 rounded-full bg-emerald-400" />
            <span className="text-sm text-neutral-300 tracking-widest">
              NOAH RAPHAEL LAAKE
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#results" className="hover:text-white">Results</a>
            <a href="#media" className="hover:text-white">Media</a>
            <a href="#partners" className="hover:text-white">Partners</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[70vh]">
        {/* background image */}
        <Image
          src="/hero_noah.jpg"
          alt="Noah Laake racing"
          fill
          priority
          className="object-cover object-[55%_35%] select-none"
        />
        {/* dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/40 to-neutral-950/80" />

        {/* content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <p className="text-xs font-semibold tracking-widest text-emerald-300">
            U23 • LATVIAN NATIONAL TEAM • OLYMPIC UNIT
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight headline-stroke">
            Road to LA 2028: Partner<br className="hidden sm:block" />
            with a Rising BMX Finalist
          </h1>

          <p className="mt-6 max-w-2xl text-neutral-300">
            European Championships Finalist (8th, 2025). Competing across UEC
            European Cup, UCI World Cups, and Worlds. Join the journey with
            authentic content, elite visibility, and performance-driven
            storytelling.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-medium text-neutral-900 hover:bg-emerald-400 transition"
            >
              Become a Partner →
            </a>
            <a
              href="#media"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-5 py-3 text-neutral-200 hover:bg-neutral-900 transition"
            >
              View Media
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              2025 UEC Finalist
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Content-ready athlete
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights (short) */}
      <section id="results" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold">Career Highlights</h2>
        <p className="mt-3 max-w-3xl text-neutral-300">
          A clear progression from national champion to European finalist — with
          eyes on World Cups, Worlds 2026 (Australia), and LA 2028 qualification.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["2025", "UEC BMX Racing European Championships — U23 Final (8th)"],
            ["2024–2025", "Multiple European Cup mains & semis; World Cup debut (Papendal)"],
            ["2017–2023", "National titles, Baltic Cup Overall, consistent international starts"],
          ].map(([year, line]) => (
            <div key={year} className="rounded-2xl border border-neutral-800 p-5">
              <div className="text-sm text-neutral-400">{year}</div>
              <div className="mt-1 text-neutral-100">{line}</div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a href="#contact" className="text-emerald-400 hover:text-emerald-300">
            Request full results →
          </a>
        </div>
      </section>

      {/* Media Gallery */}
      <section id="media" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Media Gallery</h2>
            <p className="mt-2 max-w-3xl text-neutral-300">
              High-quality action and behind-the-scenes content available for
              partner campaigns and social amplification.
            </p>
          </div>
          <a href="#contact" className="text-emerald-400 hover:text-emerald-300">
            Request media kit →
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {[
    "/action-1.jpg",
    "/action-2.jpg",
    "/action-3.jpg",
    "/action-4.jpg",
    "/behind-1.jpg",
    "/behind-2.jpg",
    "/behind-3.jpg",
    "/lifestyle-1.jpg",
  ].map((src, i) => (
    <figure
      key={i}
      className="group relative overflow-hidden rounded-2xl border border-neutral-800"
    >
      <img
        src={src}
        alt={`gallery-${i + 1}`}
        loading="lazy"
        className="h-56 w-full object-cover transition group-hover:scale-105"
      />
    </figure>
  ))}
</div>
      </section>

      {/* Desired Partners */}
      <section id="partners" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold">Desired Partners</h2>
        <p className="mt-2 max-w-3xl text-neutral-300">
          Room for 1 Title, 3–5 Core, and several Starter partners — with tiered
          deliverables and clear placement mockups.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Bell Helmets",
            "Speedco Bikes",
            "Fly Racing Gear",
            "Nike Sportswear",
            "Red Bull",
            "Decathlon",
            "Audi quattro",
          ].map((name) => (
            <div key={name} className="rounded-2xl border border-neutral-800 p-6">
              <div className="text-neutral-100">{name}</div>
              <div className="mt-1 text-sm text-neutral-400">Prospective partner</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-neutral-800 p-8 bg-neutral-900/40">
          <h2 className="text-2xl font-semibold">Let’s talk</h2>
          <p className="mt-2 max-w-2xl text-neutral-300">
            Interested in partnering or requesting the full results & media kit?
            Drop a line and we’ll respond quickly.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:eric.laakee@gmail.com?subject=Noah%20Laake%20—%20Sponsorship"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-medium text-neutral-900 hover:bg-emerald-400 transition"
            >
              Email the team
            </a>
            <a
              href="#media"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-5 py-3 text-neutral-200 hover:bg-neutral-900 transition"
            >
              Review media
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Noah Raphael Laake
      </footer>
    </div>
  );
}
