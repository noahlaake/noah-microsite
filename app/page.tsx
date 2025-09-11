'use client'
import Image from 'next/image'
import { Trophy, Camera, PlayCircle, Mail, Instagram, Youtube, ArrowRight } from '@/components/icons'

const results = [
  { year: 2025, event: 'UEC European Championships — Men U23', place: '8th (Final)' },
  { year: 2025, event: 'Latvian National Championships — Men U23', place: '2nd (Vice-Champion)' },
  { year: 2024, event: 'UEC European Cup — Valmiera', place: '3rd' },
  { year: 2017, event: 'Latvian National Championships — Boys 12', place: '1st (Champion)' },
]

const partners = [
  'Bell Helmets',
  'Speedco Bikes',
  'Fly Racing Gear',
  'Nike Sportswear',
  'Red Bull Energy Drink',
  'Decathlon',
  'Audi Quattro',
]

// ↓↓↓ MAIN PAGE ↓↓↓
export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-inner" />
            <div className="text-sm uppercase tracking-widest text-neutral-300">
              Noah Raphael Laake
            </div>
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
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_noah.jpg?v=2"
            alt="BMX hero"
            fill
            className="object-cover h-[70vh] object-[80%_15%]"
            priority
          />
          {/* darker on the left so text pops */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-emerald-400 font-semibold tracking-wide uppercase">
              U23 • LATVIAN NATIONAL TEAM • OLYMPIC UNIT
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Road to LA 2028: Partner<br className="hidden sm:block" /> with a Rising BMX Finalist
            </h1>
            <p className="mt-6 text-neutral-300 text-lg">
              European Championships Finalist (8th, 2025). Competing across UEC European Cup, UCI World
              Cups, and Worlds. Join the journey with authentic content, elite visibility, and performance-
              driven storytelling.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 font-medium text-neutral-900 hover:bg-emerald-400 transition">
                Become a Partner <ArrowRight size={18} />
              </a>
              <a href="#media" className="inline-flex items-center gap-2 rounded-2xl border border-neutral-700 px-5 py-3 font-medium text-neutral-200 hover:bg-neutral-900 transition">
                View Media <PlayCircle size={18} />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-neutral-300 text-sm">
              <div className="flex items-center gap-2"><Trophy size={18} className="text-emerald-400" /> 2025 UEC Finalist</div>
              <div className="flex items-center gap-2"><Camera size={18} className="text-emerald-400" /> Content-ready athlete</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Career Highlights</h2>
            <p className="mt-2 text-neutral-400 max-w-2xl">
              A clear progression from national champion to European finalist — with eyes on World Cups,
              Worlds 2026 (Australia), and LA 2028 qualification.
            </p>
          </div>
          <a href="#contact" className="text-emerald-400 hover:text-emerald-300 font-medium">Request full results →</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((r, i) => (
            <div key={i} className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-5 hover:border-neutral-700 transition">
              <div className="text-sm text-neutral-400">{r.year}</div>
              <div className="mt-2 font-medium">{r.event}</div>
              <div className="mt-2 text-emerald-400 font-semibold">{r.place}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Media */}
      <section id="media" className="bg-neutral-900/30 border-y border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Media Gallery</h2>
              <p className="mt-2 text-neutral-400 max-w-2xl">
                High-quality action and behind-the-scenes content available for partner campaigns and social amplification.
              </p>
            </div>
            <a href="#contact" className="text-emerald-400 hover:text-emerald-300 font-medium">Request media kit →</a>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              '/action1.jpg','/action2.jpg','/action3.jpg','/action4.jpg',
              '/behind1.jpg','/behind2.jpg','/behind3.jpg','/lifestyle1.jpg',
            ].map((src, i) => (
              <figure key={i} className="group relative overflow-hidden rounded-2xl border border-neutral-800">
                <Image src={src} alt={src} width={800} height={600} className="h-56 w-full object-cover group-hover:scale-105 transition" />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-sm text-neutral-200"></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold">Desired Partners</h2>
        <p className="mt-2 text-neutral-400">Room for 1 Title, 3–5 Core, and several Starter partners — with tiered deliverables and clear placement mockups.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center text-neutral-300">
          {partners.map((p, i) => (
            <div key={i} className="flex items-center justify-center rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 text-center text-sm sm:text-base font-medium">
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-semibold">Let’s Build a Partnership</h2>
              <p className="mt-3 text-neutral-300 max-w-2xl">
                Tell us your goals (reach, brand lift, content, hospitality) and we’ll tailor a package.
                Title, Core, and Starter tiers available — or custom.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:partner@noahlaake.com" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 font-medium text-neutral-900 hover:bg-emerald-400 transition">
                  <Mail size={18}/> partner@noahlaake.com
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-2xl border border-neutral-700 px-5 py-3 font-medium text-neutral-200 hover:bg-neutral-900 transition">
                  <Instagram size={18}/> @noah.laake
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-2xl border border-neutral-700 px-5 py-3 font-medium text-neutral-200 hover:bg-neutral-900 transition">
                  <Youtube size={18}/> /@noahlaake
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
              <h3 className="font-semibold">Quick Facts</h3>
              <ul className="mt-3 space-y-2 text-neutral-300 text-sm">
                <li>• Men U23, Latvian National Team</li>
                <li>• 2025 European Championships Finalist (8th)</li>
                <li>• 2025 National Vice-Champion</li>
                <li>• Content-ready media kit</li>
                <li>• Target: Worlds 2026 (AUS) & LA 2028</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-neutral-500 text-sm border-t border-neutral-800">
        © {new Date().getFullYear()} Noah Raphael Laake — Sponsor Microsite
      </footer>
    </div>
  )
}
