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
    <div className="flex gap-4 text-center">
      <div>
        <div className="text-4xl font-semibold">{timeLeft.days}</div>
        <div className="text-sm text-gray-500">days</div>
      </div>
      <div>
        <div className="text-4xl font-semibold">{timeLeft.hours}</div>
        <div className="text-sm text-gray-500">hours</div>
      </div>
      <div>
        <div className="text-4xl font-semibold">{timeLeft.minutes}</div>
        <div className="text-sm text-gray-500">minutes</div>
      </div>
      <div>
        <div className="text-4xl font-semibold">{timeLeft.seconds}</div>
        <div className="text-sm text-gray-500">seconds</div>
      </div>
    </div>
  )
}
