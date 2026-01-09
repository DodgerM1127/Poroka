export default function ConfirmedPopup({ guests = [], message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-semibold">Potrjeno</h3>
        {message ? (
          <p className="mt-4 text-gray-700">{message}</p>
        ) : (
          <ul className="mt-4 list-disc list-inside space-y-1">
            {guests.length === 0 ? <li>Še ni potrjenih gostov</li> : guests.map((g, i) => <li key={i}>{g}</li>)}
          </ul>
        )}
        <div className="mt-6 text-right">
          <button className="px-4 py-2 rounded bg-gray-200" onClick={onClose}>Zapri</button>
        </div>
      </div>
    </div>
  )
}
