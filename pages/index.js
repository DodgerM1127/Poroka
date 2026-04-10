import Link from 'next/link'
import Countdown from '../components/Countdown'

export default function Povabljeni() {
  const target = '2026-08-29T14:00:00+02:00'
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="relative h-screen bg-center bg-cover flex items-center justify-center" style={{ backgroundImage: "url('/images/slika 2.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
        {/* Use /public/images/1.jpg as hero background */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center text-white z-10 px-6 max-w-2xl">
          <h1 className="text-5xl font-serif font-bold mb-4">Gaja & Matej</h1>
          <h2 className="text-4xl font-serif font-bold mb-4 mt-6">29. avgusta 2026</h2>
          
          <p className="text-lg leading-relaxed mt-12">
            Če si odprl tole spletno stran, si verjetno v najinih srcih pustil poseben pečat, zato te vabiva, da se nama pridružiš na najini poroki.</p>

          {/* Countdown moved directly under the heading */}
          <div className="mt-8 mb-6">
            <Countdown targetDate={target} />
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h3 className="text-3xl font-bold text-[#b17253] mb-6 text-center">Dragi prijatelj!</h3>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">Najin dan ne bo isti brez tebe. Da bova lažje pripravila vse potrebno, te prosiva, da se čim prej označiš, ali prideš, najpozneje pa do 29. 6. Se vidimo kmalu!</p>
      </section>

      {/* RSVP Button */}
      <section className="py-8 text-center">
        <Link href="/rsvp_povabljeni">
          <a className="inline-block px-6 py-3 rounded bg-[#b17253] text-white font-semibold hover:bg-[#944b33]" onClick={() => console.log('Navigate to /rsvp (cta)')}>POTRDI UDELEŽBO</a>
        </Link>
      </section>


      {/* Program Poroke (Schedule) - full width background */}
      <section id="schedule" className="w-full bg-[#b17253] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold mb-6 text-center">Časovnica</h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6 items-start">
              {/* Poroka */}
              <div className="flex justify-end"><img src="/icons/church.svg" alt="cerkev" className="w-20 h-20" /></div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold text-white">Poroka</div>
                <div className="text-lg text-white">14:00</div>
                <div className="text-lg text-white">Obred v <a href="https://www.google.com/maps/place/Cerkev+Marije+Pomo%C4%8Dnice+Rakovnik/@46.0371188,14.5260094,18.85z/data=!4m6!3m5!1s0x47652dbb6745fa4b:0x39e09d01345d1f99!8m2!3d46.0374167!4d14.5250851!16s%2Fg%2F11fj1bqd1r?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="underline text-white">Župnijski cerkvi Marije Pomočnice</a></div>
              </div>
              {/* Skupinsko slikanje */}
              <div className="flex justify-end"><img src="/icons/camera.svg" alt="foto" className="w-20 h-20" /></div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold text-white">Skupinsko slikanje</div>
                <div className="text-lg text-white">16:00</div>
                <div className="text-lg text-white">Pred cerkvijo</div>
              </div>
              {/* Zakuska */}
              <div className="flex justify-end"><img src="/icons/food.svg" alt="hrana" className="w-20 h-20" /></div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold text-white">Zakuska</div>
                <div className="text-lg text-white">16:05</div>
                <div className="text-lg text-white"><a href="https://www.google.com/maps/place/Dija%C5%A1ki+dom+Janeza+Boska/@46.0373266,14.5255353,19.55z/data=!4m6!3m5!1s0x47652d22f6689f6d:0xcbddcd1aaef38011!8m2!3d46.0370064!4d14.525536!16s%2Fg%2F11j81t443l?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" className="underline text-white" target="_blank">Dijaški dom</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dresscode Section */}
      <section id="dresscode" className="max-w-6xl mx-auto px-6 py-16">
        <div>
          <h3 className="text-3xl font-bold text-[#b17253] mb-6 text-center">Nekaj majhnih želja</h3>
          <div className="text-gray-600 text-lg leading-relaxed mb-4 space-y-2">
            <p className="text-gray-600 text-lg leading-relaxed text-center">Zelo bova vesela, če nama pomagate ustvariti tisto pravo, nežno vzdušje, zato imava par majhnih želja glede videza in dogajanja:</p>
            <p className="text-gray-600 text-lg leading-relaxed text-center">Barve v <a href="https://www.color-hex.com/color-palette/1032030" target="_blank" className="text-[#b17253] hover:underline">pastelih</a>. Najbolj boste zablesteli v kakšnih nežnih, pastelnih odtenkih. Če se le da, se poskusite izogniti beli (ta je tokrat rezervirana za nevesto), črni in rdeči.</p>
          </div>
        </div>
      </section>

      {/* Color Palette Images */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-64 rounded overflow-hidden">
            <img src="/images/paletam1.jpg" alt="Paleta 1" className="w-full h-full object-cover shadow-lg" />
          </div>
          <div className="h-64 rounded overflow-hidden">
            <img src="/images/paletam2.jpg" alt="Paleta 2" className="w-full h-full object-cover shadow-lg" />
          </div>
          <div className="h-64 rounded overflow-hidden">
            <img src="/images/paletam1.jpg" alt="Paleta 1" className="w-full h-full object-cover shadow-lg" />
          </div>
          <div className="h-64 rounded overflow-hidden">
            <img src="/images/paletam2.jpg" alt="Paleta 2" className="w-full h-full object-cover shadow-lg" />
          </div>
        </div>
      </section>

      {/* Par malenkosti Section */}
            <section id="malenkosti" className="max-w-6xl mx-auto px-6 py-16">
              <div>
                <h3 className="text-3xl font-bold text-[#b17253] mb-6 text-center">Nekaj malenkosti</h3>
                <div className="text-gray-600 text-lg leading-relaxed mb-4 space-y-2">
                  <p className="text-gray-600 text-lg leading-relaxed text-center">Šopek naj ostane pri nevesti. Tradicije so super, a bi krajo šopka tokrat raje izpustila. Naj nevesta v svojem cvetju uživa cel večer.</p>
                  <p className="text-gray-600 text-lg leading-relaxed text-center">Irish goodbye: Če naju vidiš sredi plesa, ti pa si že utrujen in pripravljen za odhod domov, brez skrbi — lahko greš tudi brez posebnega poslavljanja, ne bova jezna. Če pa nama boš želel še kaj povedati, sva vedno za kakav, sprehod ali kosilo.</p>
                  <p className="text-gray-600 text-lg leading-relaxed text-center">Ne želiva si pijančevanja. Naj bo večer poln dobre volje, plesa in lepih trenutkov, ne pa zgodb, ki se jih naslednji dan nihče ne spomni.</p>
                  <p className="text-gray-600 text-lg leading-relaxed text-center">Telefon naj večino časa ostane v torbici ali žepu. Zelo vesela bova vseh fotografij, a med cerkveno poroko in prvim plesom bi rada videla obraze, ne ekranov. Imava tudi super fotografinjo Ano in snemalca Petra, ki bosta ujela vse pomembne trenutke.</p>
                </div>
              </div>
            </section>


      {/* Ali želiš pomagati Section */}
      <section id="help" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-[#b17253] mb-6 text-center">Ali želiš pomagati?</h3>
        <p className="text-gray-600 text-lg leading-relaxed text-center">Ker sva že večkrat slišala, naj ne bova trmasta in ne delava vsega sama iščeva, kakšnega pekovskega mojstra ali vajenca, ki bi bil pripravljen speči kakšno dobroto. Če si želiš pomagati, se vpiši v <a href="https://docs.google.com/spreadsheets/d/1s5tt8S0iLu9WvMv3C8WelAbdJPP3aeCN2pZeOF8QZmQ/edit?usp=sharing" target="_blank" className="text-[#b17253] hover:underline">tabelo</a>.</p>
      </section>

      {/* Image Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <img src="/images/slika 3.jpg" alt="Slika 3" className="w-full max-w-md h-auto rounded shadow-lg mx-auto" />
      </section>

      {/* Darila Section */}
      <section id="gifts" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-[#b17253] mb-6 text-center">Darila</h3>
        <p className="text-gray-600 text-lg leading-relaxed text-center">Največje darilo nama bo vaša družba, a če naju želite razveseliti še s čim, bova najbolj hvaležna za prispevek v sklad za začetek najine skupne življenjske poti.</p>
      </section>

      {/* Image Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <img src="/images/slika 1.jpg" alt="Slika 1" className="w-full max-w-md h-auto rounded shadow-lg mx-auto" />
      </section>

      {/* Slike Section */}
      <section id="photos" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-[#b17253] mb-6 text-center">Slike</h3>
        <p className="text-gray-600 text-lg leading-relaxed text-center">Zelo bova vesela vseh fotografij.<a href="https://drive.google.com/drive/folders/1hGHXVAJj1xgGZez_Q5omlQYMj0cB4OmN?usp=sharing" target="_blank" className="text-[#b17253] hover:underline">Tukaj</a> lahko naložiš in pogledaš vse slike s poroke, tudi midva jih bova naložila po poroki.</p>
      </section>

      {/* Foto Galerija */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-16">
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


    </div>
  )
}
