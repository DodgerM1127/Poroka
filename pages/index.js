import Link from 'next/link'
import Countdown from '../components/Countdown'

export default function Home() {
  const target = '2026-08-29T14:00:00+01:00'
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-3xl font-serif text-teal-600">Gaja & Matej</h1>
        </div>
        <nav className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-8">
            <Link href="/"><a className="text-teal-600 font-semibold hover:text-teal-700">DOMOV</a></Link>
            <a href="#story" className="text-gray-500 hover:text-gray-700">NAJINA ZGODBA</a>
            <a href="#schedule" className="text-gray-500 hover:text-gray-700">PROGRAM POROKE</a>
            <Link href="/rsvp"><a className="text-gray-500 hover:text-gray-700" onClick={() => console.log('Navigate to /rsvp (nav)')}>POTRDI UDELEŽBO</a></Link>
            <a href="#gallery" className="text-gray-500 hover:text-gray-700">FOTO GALERIJA</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gray-200 bg-center bg-cover flex items-center justify-center">
        {/* Background image can be added here: add class bg-[url('/images/hero.jpg')] to this section when ready */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center text-white z-10 px-6 max-w-2xl">
          <h2 className="text-5xl font-serif font-bold mb-4">Proslavljava najino ljubezen</h2>
          {/* Countdown moved directly under the heading */}
          <div className="mb-6">
            <Countdown targetDate={target} />
          </div>
          <p className="text-lg leading-relaxed">
            Dobrodošli na naši poročni spletni strani! Vesela sva, da bova ta poseben dan delila z vami. Tukaj najdete vse informacije o poroki — urnik, fotografije in še več. Komaj čakava, da z vami praznujemo v Ljubljani!
          </p>
        </div>
      </section>

      {/* Program Poroke (Schedule) */}
      <section id="schedule" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-teal-600 mb-6">Program poroke</h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-4"><span className="font-mono text-teal-600">14:00</span> <span>Cerkev — obred na Župniji sv. Nikolaja</span></li>
          <li className="flex items-start gap-4"><span className="font-mono text-teal-600">16:00</span> <span>Pogostitev in pogostitev pri restoranu</span></li>
          <li className="flex items-start gap-4"><span className="font-mono text-teal-600">18:00</span> <span>Premik na Javornik — druženje in ples</span></li>
        </ul>
      </section>

      {/* About Our Story Section */}
      <section id="story" className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold text-teal-600 mb-6">O najini zgodbi</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Preberite, kako sva se spoznala, o najinem zaroki in poti skupaj. Vesela sva, da z vami deliva najino zgodbo.
          </p>
        </div>
        <div className="bg-gray-300 h-64 rounded flex items-center justify-center text-gray-500">
          Fotografija bo tukaj
        </div>
      </section>

      {/* Foto Galerija */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-teal-600 mb-6">Foto galerija</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-gray-200 h-40 rounded flex items-center justify-center text-gray-500">Fotografija bo tukaj</div>
          ))}
        </div>
      </section>

      {/* RSVP Button */}
      <section className="bg-gray-50 py-12 text-center">
        <Link href="/rsvp">
          <a className="inline-block px-6 py-3 rounded bg-pink-600 text-white font-semibold hover:bg-pink-700" onClick={() => console.log('Navigate to /rsvp (cta)')}>
            POTRDI UDELEŽBO
          </a>
        </Link>
      </section>

      <footer className="bg-white border-t mt-auto py-6 text-center text-gray-600 text-sm">
        <p>gajamatej.com — G&M — Gaja & Matej</p>
      </footer>
    </div>
  )
}
