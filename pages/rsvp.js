import { useState } from 'react'
import RSVPForm from '../components/RSVPForm'
import ConfirmedPopup from '../components/ConfirmedPopup'

export default function RSVPPage() {
  const [popupGuests, setPopupGuests] = useState([])

  async function onSuccess(data, submittedName) {
    // show only the submitter's name in the popup
    if (submittedName) {
      setPopupGuests([submittedName])
      return
    }

    // fallback: if API returned confirmed list, show only the latest submitted name
    if (data?.confirmed && Array.isArray(data.confirmed) && data.confirmed.length > 0) {
      const last = data.confirmed[data.confirmed.length - 1]
      setPopupGuests([last])
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-8 px-6 py-16">
      <h2 className="text-3xl font-semibold">RSVP</h2>
      <p className="text-gray-600">Please let us know if you can join us.</p>
      <RSVPForm onSuccess={onSuccess} />

      {popupGuests && popupGuests.length > 0 && (
        <ConfirmedPopup guests={popupGuests} onClose={() => setPopupGuests([])} />
      )}
    </div>
  )
}
