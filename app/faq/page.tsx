import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Gambella Policy Lab, its methodology, scoring system, and limitations.',
  openGraph: {
    title: 'FAQ — Gambella Policy Lab',
    description:
      'Frequently asked questions about governance analysis, scoring, and methodology used in the platform.',
  },
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteNav />

      {/* Header */}
      <header className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
          <span className="text-xs font-semibold uppercase tracking-wide text-green-700">
            FAQ
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold mt-2">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Everything you need to know about the platform, methodology, and limitations.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-8 sm:py-12 space-y-3">

        {/* Q1 */}
        <details className="group rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <summary className="p-5 sm:p-6 cursor-pointer flex items-start gap-3 hover:bg-slate-50 transition">
            <span className="font-bold text-green-700 mt-0.5">▶</span>
            <span className="font-semibold">Who created this platform?</span>
          </summary>
          <div className="px-6 pb-6 text-sm text-slate-600">
            This platform is an independent civic initiative created by{' '}
            <span className="font-semibold">Abulla</span>. It is not affiliated with any political
            organization or government institution.
          </div>
        </details>

        {/* Q2 */}
        <details className="group rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <summary className="p-5 sm:p-6 cursor-pointer flex items-start gap-3 hover:bg-slate-50 transition">
            <span className="font-bold text-green-700 mt-0.5">▶</span>
            <span className="font-semibold">What is the purpose of this platform?</span>
          </summary>
          <div className="px-6 pb-6 text-sm text-slate-600">
            The goal is to provide a structured and transparent way to analyze governance profiles,
            policy priorities, and public-service performance in Gambella. It helps users compare
            different approaches using consistent criteria.
          </div>
        </details>

        {/* Q3 */}
        <details className="group rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <summary className="p-5 sm:p-6 cursor-pointer flex items-start gap-3 hover:bg-slate-50 transition">
            <span className="font-bold text-green-700 mt-0.5">▶</span>
            <span className="font-semibold">How are the scores calculated?</span>
          </summary>
          <div className="px-6 pb-6 text-sm text-slate-600">
            Each profile is evaluated across five criteria: coherence, institutional strength,
            resilience, practicality, and level of detail. Each is scored out of 10, and the overall
            score is the average of the five.
            <div className="mt-4">
              <Link
                href="/methodologie"
                className="inline-block px-4 py-2 rounded-lg bg-green-800 text-white text-xs font-semibold hover:bg-green-900 transition"
              >
                View full methodology →
              </Link>
            </div>
          </div>
        </details>

        {/* Q4 */}
        <details className="group rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <summary className="p-5 sm:p-6 cursor-pointer flex items-start gap-3 hover:bg-slate-50 transition">
            <span className="font-bold text-green-700 mt-0.5">▶</span>
            <span className="font-semibold">Does this platform support any political group?</span>
          </summary>
          <div className="px-6 pb-6 text-sm text-slate-600">
            No. This is a neutral analytical tool. It does not endorse any candidate, group, or
            institution. It is designed to support informed understanding, not political advocacy.
          </div>
        </details>

        {/* Q5 */}
        <details className="group rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <summary className="p-5 sm:p-6 cursor-pointer flex items-start gap-3 hover:bg-slate-50 transition">
            <span className="font-bold text-green-700 mt-0.5">▶</span>
            <span className="font-semibold">Can the analysis be wrong?</span>
          </summary>
          <div className="px-6 pb-6 text-sm text-slate-600">
            Yes. The platform evaluates structure, clarity, and consistency of profiles. It cannot
            predict future outcomes or political behavior. Users should treat it as a decision-support
            tool, not a final authority.
          </div>
        </details>

        {/* Q6 */}
        <details className="group rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <summary className="p-5 sm:p-6 cursor-pointer flex items-start gap-3 hover:bg-slate-50 transition">
            <span className="font-bold text-green-700 mt-0.5">▶</span>
            <span className="font-semibold">Where does the data come from?</span>
          </summary>
          <div className="px-6 pb-6 text-sm text-slate-600">
            The platform uses publicly available information such as policy descriptions, governance
            priorities, and structured profile data. No private or confidential data is used.
          </div>
        </details>

        {/* Q7 */}
        <details className="group rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <summary className="p-5 sm:p-6 cursor-pointer flex items-start gap-3 hover:bg-slate-50 transition">
            <span className="font-bold text-green-700 mt-0.5">▶</span>
            <span className="font-semibold">Is my data collected?</span>
          </summary>
          <div className="px-6 pb-6 text-sm text-slate-600">
            No. The platform does not collect personal data or use tracking cookies.
          </div>
        </details>

        {/* Q8 */}
        <details className="group rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <summary className="p-5 sm:p-6 cursor-pointer flex items-start gap-3 hover:bg-slate-50 transition">
            <span className="font-bold text-green-700 mt-0.5">▶</span>
            <span className="font-semibold">How often is the platform updated?</span>
          </summary>
          <div className="px-6 pb-6 text-sm text-slate-600">
            Updates occur when new information becomes available or when profiles are significantly
            revised. The platform evolves continuously.
          </div>
        </details>

        {/* Q9 */}
        <details className="group rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <summary className="p-5 sm:p-6 cursor-pointer flex items-start gap-3 hover:bg-slate-50 transition">
            <span className="font-bold text-green-700 mt-0.5">▶</span>
            <span className="font-semibold">How can I report an issue?</span>
          </summary>
          <div className="px-6 pb-6 text-sm text-slate-600">
            If you find an error or inconsistency, you can contact the project owner. Corrections can
            be reviewed and incorporated into future updates.
          </div>
        </details>

        {/* Bottom */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center mt-8">
          <p className="text-sm text-slate-600 mb-3">
            Need more details?
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link
              href="/methodologie"
              className="px-5 py-2 rounded-lg border border-slate-200 text-sm font-semibold hover:bg-slate-50"
            >
              Methodology
            </Link>
            <Link
              href="/"
              className="px-5 py-2 rounded-lg bg-green-800 text-white text-sm font-semibold hover:bg-green-900"
            >
              Back to dashboard
            </Link>
          </div>
        </div>

        <SiteFooter />
      </main>
    </div>
  )
}