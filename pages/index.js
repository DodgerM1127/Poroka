import Link from 'next/link'
import Countdown from '../components/Countdown'

export default function Home() {
  const target = '2026-08-29T14:00:00+01:00'
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-4xl font-bold text-teal-600 text-center">Poroka</h1>
        </div>
        <nav className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-8">
            <Link href="/"><a className="text-teal-600 font-semibold hover:text-teal-700">HOME</a></Link>
            <a href="#story" className="text-gray-500 hover:text-gray-700">OUR STORY</a>
            <a href="#schedule" className="text-gray-500 hover:text-gray-700">WEDDING SCHEDULE</a>
            <Link href="/rsvp"><a className="text-gray-500 hover:text-gray-700">RSVP</a></Link>
            <a href="#gallery" className="text-gray-500 hover:text-gray-700">PHOTO GALLERY</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gray-200 bg-center bg-cover flex items-center justify-center">
        {/* Background image can be added here: bg-[url('/images/hero.jpg')] */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center text-white z-10 px-6 max-w-2xl">
          <h2 className="text-5xl font-bold mb-4">Celebrating our love</h2>
          <p className="text-lg leading-relaxed">
            Welcome to our wedding website! We're so excited to share our special day with you. Here you'll find all the information you need about our wedding from the schedule to photos and more. We can't wait to celebrate with you in Ljubljana!
          </p>
        </div>
      </section>

      {/* CTA Button */}
      <section className="bg-gray-50 py-8 text-center">
        <Link href="/rsvp">
          <a className="inline-block px-6 py-3 rounded bg-teal-600 text-white font-semibold hover:bg-teal-700">
            Wedding schedule
          </a>
        </Link>
      </section>

      {/* About Our Story Section */}
      <section id="story" className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-4xl font-bold text-teal-600 mb-6">About our story</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Read about how we met, our engagement, and our journey together. We're excited to share our story with you.
          </p>
        </div>
        <div className="bg-gray-300 h-64 rounded flex items-center justify-center text-gray-500">
          {/* Image placeholder - add your image here */}
          Image will go here
        </div>
      </section>

      {/* Countdown Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <Countdown targetDate={target} />
      </section>

      {/* RSVP Button */}
      <section className="bg-gray-50 py-12 text-center">
        <Link href="/rsvp">
          <a className="inline-block px-6 py-3 rounded bg-pink-600 text-white font-semibold hover:bg-pink-700">
            RSVP Now
          </a>
        </Link>
      </section>

      <footer className="bg-white border-t mt-auto py-6 text-center text-gray-600 text-sm">
        <p>gajamatej.com — G&M — Gaja & Matej</p>
      </footer>
    </div>
  )
}
