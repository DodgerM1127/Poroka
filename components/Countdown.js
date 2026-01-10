import { useEffect, useState } from 'react'

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    function calc() {
      const t = new Date(targetDate) - new Date()
      if (t <= 0) {
        setTimeLeft(null)
        return
      }
      const days = Math.floor(t / (1000 * 60 * 60 * 24))
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((t / (1000 * 60)) % 60)
      const seconds = Math.floor((t / 1000) % 60)
      setTimeLeft({ days, hours, minutes, seconds })
    }
    calc()
    const iv = setInterval(calc, 1000)
    return () => clearInterval(iv)
  }, [targetDate])

  if (timeLeft == null) return <div className="text-xl">The wedding day has arrived 🎉</div>

  return (
    <div className="inline-flex flex-wrap justify-center gap-6 text-center mx-auto">
      <div className="w-24">
        <div className="text-4xl font-semibold">{timeLeft.days}</div>
        <div className="text-sm text-gray-500">dni</div>
      </div>
      <div className="w-24">
        <div className="text-4xl font-semibold">{timeLeft.hours}</div>
        <div className="text-sm text-gray-500">ure</div>
      </div>
      <div className="w-24">
        <div className="text-4xl font-semibold">{timeLeft.minutes}</div>
        <div className="text-sm text-gray-500">minute</div>
      </div>
      <div className="w-24">
        <div className="text-4xl font-semibold">{timeLeft.seconds}</div>
        <div className="text-sm text-gray-500">sekunde</div>
      </div>
    </div>
  )
}
