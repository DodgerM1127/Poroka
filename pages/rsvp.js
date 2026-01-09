import { useState } from 'react'
import RSVPForm from '../components/RSVPForm'
import ConfirmedPopup from '../components/ConfirmedPopup'

export default function RSVPPage() {
  const [popupMessage, setPopupMessage] = useState(null)

  async function onSuccess(data, submittedName) {
    // show only a personalized Slovenian message to the submitter
    if (submittedName) {
      const message = `Hvala, ${submittedName}! Vaš odgovor je prejet. Če se karkoli spremeni, nama prosim sporočite.`
      setPopupMessage(message)
      return
    }

    // fallback: if API returned confirmed list, show only the latest submitted name
    if (data?.confirmed && Array.isArray(data.confirmed) && data.confirmed.length > 0) {
      const last = data.confirmed[data.confirmed.length - 1]
      const message = `Hvala, ${last}! Vaš odgovor je prejet. Če se karkoli spremeni, nama prosim sporočite.`
      setPopupMessage(message)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-8 px-6 py-16">
      <h2 className="text-3xl font-semibold">Sporoči nama če prideš na poroko</h2>
      <p className="text-gray-600">Prosiva, sporoči nama, ali se nam boš pridružil/a.</p>
      <RSVPForm onSuccess={onSuccess} />

      {popupMessage && (
        <ConfirmedPopup message={popupMessage} onClose={() => setPopupMessage(null)} />
      )}
    </div>
  )
}
