import Link from 'next/link'
import Countdown from '../components/Countdown'

export default function Home() {
  const target = '2026-08-29T14:00:00+01:00'
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="relative h-screen bg-center bg-cover flex items-center justify-center" style={{ backgroundImage: "url('/images/1.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
        {/* Use /public/images/1.jpg as hero background */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center text-white z-10 px-6 max-w-2xl">
          <h1 className="text-5xl font-serif font-bold mb-4">Gaja & Matej</h1>
          <h2 className="text-5xl font-serif font-bold mb-4">29. avgusta 2026</h2>
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

      {/* RSVP Button */}
      <section className="py-8 text-center">
        <Link href="/rsvp">
          <a className="inline-block px-6 py-3 rounded bg-teal-600 text-white font-semibold hover:bg-teal-700" onClick={() => console.log('Navigate to /rsvp (cta)')}>POTRDI UDELEŽBO</a>
        </Link>
      </section>


      {/* Program Poroke (Schedule) */}
      <section id="schedule" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-teal-600 mb-6">Program poroke</h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-4"><span className="font-mono text-teal-600">14:00</span> <span>Poroka — obred v <a href="https://www.google.com/maps/place/Cerkev+Marije+Pomo%C4%8Dnice+Rakovnik/@46.0371188,14.5260094,18.85z/data=!4m6!3m5!1s0x47652dbb6745fa4b:0x39e09d01345d1f99!8m2!3d46.0374167!4d14.5250851!16s%2Fg%2F11fj1bqd1r?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="text-teal-600 hover:underline">Župnijski cerkevi Marije Pomočnice</a> </span></li>
          <li className="flex items-start gap-4"><span className="font-mono text-teal-600">16:00</span> <span>Slikanje — pred cerkvijo</span></li>
          <li className="flex items-start gap-4"><span className="font-mono text-teal-600">16:15</span> <span>Zakuska — <a href="https://www.google.com/maps/place/Dija%C5%A1ki+dom+Janeza+Boska/@46.0373266,14.5255353,19.55z/data=!4m6!3m5!1s0x47652d22f6689f6d:0xcbddcd1aaef38011!8m2!3d46.0370064!4d14.525536!16s%2Fg%2F11j81t443l?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" className="text-teal-600 hover:underline" target="_blank">sledi drugim</a></span></li>
        </ul>
      </section>

      {/* About Najine želje Section */}
      <section id="wishes" className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold text-teal-600 mb-6">Najine želje</h3>
          <div className="text-gray-600 text-lg leading-relaxed mb-4 space-y-2">
            <p>Darila - Denar</p>
            <p>Dresscode: <a href="https://www.color-hex.com/color-palette/1223" target="_blank" className="text-teal-600 hover:underline">pastel</a></p>
            <p>Prepovedane barve oblek: Bela, Črna, Rdeča</p>
            <p>Brez kraje šopka</p>
            <p>Ni maškar</p>
          </div>
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


      <footer className="bg-white border-t mt-auto py-6 text-center text-gray-600 text-sm">
        <p>gajamatej.com — G&M — Gaja & Matej</p>
      </footer>
    </div>
  )
}
