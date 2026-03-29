import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { gambellaTimeline } from '@/lib/gambellaTimeline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Timeline | Gambella Policy Lab',
  description:
    'A historical timeline of major political, security, displacement, and governance-related events in Gambella.',
}

function getCategoryColor(category: string) {
  switch (category) {
    case 'Security':
      return 'bg-red-100 text-red-700'
    case 'Refugees':
      return 'bg-blue-100 text-blue-700'
    case 'Humanitarian':
      return 'bg-amber-100 text-amber-700'
    case 'Politics':
      return 'bg-purple-100 text-purple-700'
    case 'Governance':
      return 'bg-green-100 text-green-700'
    case 'Demographics':
      return 'bg-slate-100 text-slate-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
}

export default function TimelinePage() {
  return (
    <div className="site-shell min-h-screen">
      <SiteNav />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10">
        <header className="mb-10">
          <span className="kicker mb-3">Timeline</span>
          <h1 className="text-3xl sm:text-5xl font-bold text-ink mt-1">
            Gambella historical timeline
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600">
            This page presents a structured timeline of major political, security,
            displacement, and governance-related events affecting Gambella. It is
            designed to help readers place current policy challenges in historical
            context.
          </p>
        </header>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="relative ml-3 border-l border-slate-200 pl-6 sm:ml-4 sm:pl-8">
            {gambellaTimeline.map((event, index) => (
              <article
                key={`${event.year}-${event.title}-${index}`}
                className="relative mb-8 last:mb-0"
              >
                <div className="absolute -left-[34px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-green-700 shadow-sm sm:-left-[42px]" />

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold text-slate-900">
                      {event.year}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${getCategoryColor(
                        event.category
                      )}`}
                    >
                      {event.category}
                    </span>
                  </div>

                  <h2 className="mt-3 text-lg font-bold text-slate-900">
                    {event.title}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {event.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">Note</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            This timeline is intended as a structured public-reference tool. Some
            entries may summarize complex events in a short format, so readers
            should treat it as an analytical overview rather than a full historical
            record.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}