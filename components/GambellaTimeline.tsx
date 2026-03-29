import { gambellaTimeline } from '@/lib/gambellaTimeline'

export default function GambellaTimeline() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Historical Timeline</h2>

      <div className="relative border-l border-slate-300 ml-4 space-y-8">
        {gambellaTimeline.map((event) => (
          <div key={event.year + event.title} className="relative pl-8">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-green-700 border-2 border-white" />

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-sm font-semibold text-green-700">
                  {event.year}
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                  {event.category}
                </span>
              </div>

              <h3 className="mt-2 text-lg font-bold text-slate-900">
                {event.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}