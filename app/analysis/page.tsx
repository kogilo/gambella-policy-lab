import RefugeeTrendChart from '@/components/RefugeeTrendChart'
import RefugeeMindMap from '@/components/RefugeeMindMap'
import ZoneBreakdownChart from '@/components/ZoneBreakdownChart'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function AnalysisPage() {
  return (
    <div className="site-shell min-h-screen">
      <SiteNav />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10">
        
        {/* Header */}
        <h1 className="text-2xl sm:text-4xl font-bold mb-6">
          Gambella Refugee & Population Dynamics
        </h1>

        <p className="text-sm text-slate-600 mb-10">
          This section provides a data-driven overview of refugee inflow and local population
          trends over time, along with key structural impacts on governance and society.
        </p>

        {/* Trend + Mind Map */}
        <section className="space-y-10 mb-12">
          <RefugeeTrendChart />
          <RefugeeMindMap />

          <p className="text-xs text-slate-500">
            Note: Data is illustrative and used for analytical modeling purposes.
          </p>
        </section>

        {/* Zone Breakdown */}
        <section className="mt-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Zone-level breakdown
          </h2>

          <p className="text-sm text-slate-600 mb-6">
            Zone-based view of refugee concentration and resident population over time across
            Anywaa, Nuer, and Mejang zones.
          </p>

          <ZoneBreakdownChart />

          {/* Zone Summary Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm text-slate-500">Anywaa Zone</div>
              <div className="mt-2 text-sm text-slate-700">
                Primary refugee concentration zone
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm text-slate-500">Nuer Zone</div>
              <div className="mt-2 text-sm text-slate-700">
                Resident population with minimal refugee presence
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm text-slate-500">Mejang Zone</div>
              <div className="mt-2 text-sm text-slate-700">
                Smaller population zone with limited refugee impact
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}