export default function RefugeeMindMap() {
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-8">

      {/* Causes */}
      <div className="p-4 border rounded-xl bg-red-50">
        <h3 className="font-bold mb-2">Causes</h3>
        <ul className="text-sm space-y-1">
          <li>• Conflict in South Sudan</li>
          <li>• Border instability</li>
          <li>• Forced displacement</li>
        </ul>
      </div>

      {/* Core Issue */}
      <div className="p-4 border rounded-xl bg-yellow-50">
        <h3 className="font-bold mb-2">Core Issue</h3>
        <p className="text-sm">
          Rising refugee population interacting with local governance,
          land use, and political dynamics.
        </p>
      </div>

      {/* Effects */}
      <div className="p-4 border rounded-xl bg-green-50">
        <h3 className="font-bold mb-2">Impacts</h3>
        <ul className="text-sm space-y-1">
          <li>• Land pressure</li>
          <li>• Political influence</li>
          <li>• Social services strain</li>
        </ul>
      </div>
    </div>
  )
}