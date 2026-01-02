import { useState } from 'react'
import RSVPForm from '../components/RSVPForm'
import ConfirmedPopup from '../components/ConfirmedPopup'

export default function RSVPPage() {
  const [popupGuests, setPopupGuests] = useState([])

  async function onSuccess(data) {
    // data should include `confirmed` array of guest names
    if (data?.confirmed) setPopupGuests(data.confirmed)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-8 px-6 py-16">
      <h2 className="text-3xl font-semibold">RSVP</h2>
      <p className="text-gray-600">Please let us know if you can join us.</p>
      <RSVPForm onSuccess={onSuccess} />

      {popupGuests.length >= 0 && popupGuests && (
        <>{popupGuests.length >= 0 && popupGuests.length !== 0 && <ConfirmedPopup guests={popupGuests} onClose={() => setPopupGuests([])} />}</>
      )}
    </div>
  )
}
