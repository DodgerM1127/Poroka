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
      <section className="relative h-96 bg-center bg-cover flex items-center justify-center" style={{ backgroundImage: "url('/images/1.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
        {/* Use /public/images/1.jpg as hero background */}
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
          <li className="flex items-start gap-4"><span className="font-mono text-teal-600">14:00</span> <span>Poroka — obred v Župnijski cerkevi Marije Pomočnice </span></li>
          <li className="flex items-start gap-4"><span className="font-mono text-teal-600">16:00</span> <span>Slikanje — pred cerkvijo</span></li>
          <li className="flex items-start gap-4"><span className="font-mono text-teal-600">18:00</span> <span>Zakuska — <a href="https://www.google.com/maps/place/Dija%C5%A1ki+dom+Janeza+Boska/@46.0373266,14.5255353,19.55z/data=!4m6!3m5!1s0x47652d22f6689f6d:0xcbddcd1aaef38011!8m2!3d46.0370064!4d14.525536!16s%2Fg%2F11j81t443l?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" className="text-teal-600 hover:underline">sledi drugim</a></span></li>
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
        <div>
          <img src="/images/2.jpg" alt="O najini zgodbi" className="w-full h-64 object-cover rounded" />
        </div>
      </section>

      {/* Foto Galerija */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-teal-600 mb-6">Foto galerija</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            '/images/ANA09113.jpg',
            '/images/ANA09140.jpg',
            '/images/ANA09147.jpg',
            '/images/ANA09180.jpg',
            '/images/ANA09308.jpg',
            '/images/ANA09677.jpg'
          ].map((src, i) => (
            <div key={i} className="h-40 rounded overflow-hidden">
              <img src={src} alt={`Fotografija ${i + 1}`} className="w-full h-full object-cover" />
            </div>
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
