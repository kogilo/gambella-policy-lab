'use client'

import { useMemo, useState } from 'react'
// import ScoreBarChart from '@/components/ScoreBarChart'
// import ScoreRadarChart from '@/components/ScoreRadarChart'

import { candidatesData } from '@/lib/data'
import ThemeFilter from '@/components/ThemeFilter'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Image from 'next/image'
import Link from 'next/link'

import dynamic from 'next/dynamic'

const ScoreBarChart = dynamic(() => import('@/components/ScoreBarChart'), {
  ssr: false,
})

const ScoreRadarChart = dynamic(() => import('@/components/ScoreRadarChart'), {
  ssr: false,
})

function getScoreHex(score: number): string {
  if (score >= 7) return '#15803d'
  if (score >= 5) return '#d97706'
  return '#dc2626'
}

function getScoreColor(score: number): string {
  if (score >= 7) return 'text-green-700'
  if (score >= 5) return 'text-amber-600'
  return 'text-red-600'
}

function getScoreLabel(score: number): string {
  if (score >= 7) return 'Strong'
  if (score >= 5) return 'Mixed'
  return 'Fragile'
}

const measureTags: Record<string, { label: string; bg: string; text: string }> = {
  costed: { label: 'Costed', bg: 'bg-blue-50', text: 'text-blue-700' },
  realistic: { label: 'Realistic', bg: 'bg-green-50', text: 'text-green-700' },
  unlikely: { label: 'Unlikely', bg: 'bg-amber-50', text: 'text-amber-700' },
  unrealistic: { label: 'Unrealistic', bg: 'bg-red-50', text: 'text-red-700' },
  out_of_scope: { label: 'Out of scope', bg: 'bg-purple-50', text: 'text-purple-700' },
  best: { label: 'Priority', bg: 'bg-green-50', text: 'text-green-700' },
  worst: { label: 'High risk', bg: 'bg-red-50', text: 'text-red-700' },
}

function MeasureTag({ type }: { type: string }) {
  const tag = measureTags[type]
  if (!tag) return null

  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${tag.bg} ${tag.text}`}>
      {tag.label}
    </span>
  )
}

function SectionHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-8">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">{kicker}</div>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{subtitle}</p> : null}
    </div>
  )
}

const criteria = [
  { key: 'coherence', label: 'Policy Coherence' },
  { key: 'solidite', label: 'Institutional Strength' },
  { key: 'robustesse', label: 'Resilience' },
  { key: 'pragmatisme', label: 'Practicality' },
  { key: 'detail', label: 'Level of Detail' },
] as const

const policyThemes = [
  'Governance',
  'Education',
  'Health',
  'Agriculture',
  'Infrastructure',
  'Youth Employment',
  'Public Services',
  'Regional Development',
]

export default function HomePage() {
  const [chartView, setChartView] = useState<'all' | 'top3' | 'top5'>('all')
  const [selectedTheme, setSelectedTheme] = useState('Overall')
  
  const [selectedProfiles, setSelectedProfiles] = useState<string[]>(
  candidatesData.map((candidate) => candidate.slug)
)
  const sortedCandidates = [...candidatesData].sort((a, b) => b.globalScore - a.globalScore)
  const maxScore = sortedCandidates[0]?.globalScore ?? 10
  const featured = sortedCandidates[0]
  

 const chartCandidates = useMemo(() => {
  let scoped =
    chartView === 'top3'
      ? sortedCandidates.slice(0, 3)
      : chartView === 'top5'
      ? sortedCandidates.slice(0, 5)
      : sortedCandidates

  return scoped.filter((candidate) => selectedProfiles.includes(candidate.slug))
}, [chartView, sortedCandidates, selectedProfiles])
const hasSelectedProfiles = chartCandidates.length > 0

const availableThemes = useMemo(() => {
  const themes = new Set<string>()

  candidatesData.forEach((candidate) => {
    candidate.thematicScores?.forEach((item) => {
      if (item.theme) themes.add(item.theme)
    })
  })

  return ['Overall', ...Array.from(themes)]
}, [])

function toggleProfile(slug: string) {
  setSelectedProfiles((prev) =>
    prev.includes(slug)
      ? prev.filter((item) => item !== slug)
      : [...prev, slug]
  )
}


  const allBestMeasures = candidatesData
    .flatMap((candidate) =>
      candidate.bestMeasures.map((measure) => ({
        ...measure,
        candidate: candidate.name,
        slug: candidate.slug,
        photo: candidate.photo,
      })),
    )
    .slice(0, 6)

  const allWorstMeasures = candidatesData
    .flatMap((candidate) =>
      candidate.worstMeasures.map((measure) => ({
        ...measure,
        candidate: candidate.name,
        slug: candidate.slug,
        photo: candidate.photo,
      })),
    )
    .slice(0, 6)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteNav />

      <header className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-800">
              Gambella Civic Policy Platform
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-tight">
              Governance analysis, policy priorities, and regional development insight.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              A civic platform focused on Gambella, Ethiopia — comparing governance priorities,
              service delivery, sector performance, and public-policy readiness through a clear
              and consistent framework.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#profiles"
                className="rounded-xl bg-green-800 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explore Profiles
              </a>
              <a
                href="#scorecard"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                View Scorecard
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                Governance profiles
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                Policy comparison
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                Public-service focus
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                Updated 2026
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            {featured ? (
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
                <div className="relative h-64 sm:h-72">
                  <Image
                    src={featured.photo}
                    alt={featured.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-800">
                      Featured Focus
                    </div>
                    <h2 className="mt-3 text-2xl font-bold text-white">{featured.name}</h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-100">
                      {featured.politicalLine}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
                <div className="text-sm font-semibold text-blue-700">Education &amp; Youth</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  Schools, teacher support, youth skills, and opportunity pipelines.
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
                <div className="text-sm font-semibold text-emerald-700">Health &amp; Community</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  Clinics, staffing, outreach, and public-service access across communities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm text-slate-500">Profiles</div>
            <div className="mt-2 text-3xl font-bold text-slate-900">{sortedCandidates.length}</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm text-slate-500">Top Score</div>
            <div className="mt-2 text-3xl font-bold text-slate-900">
              {sortedCandidates[0]?.globalScore?.toFixed(1) ?? '0.0'}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm text-slate-500">Policy Criteria</div>
            <div className="mt-2 text-3xl font-bold text-slate-900">5</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm text-slate-500">Updated</div>
            <div className="mt-2 text-3xl font-bold text-slate-900">2026</div>
          </div>
        </section>

        <section className="mb-14">
          <SectionHeader
            kicker="Themes"
            title="Policy themes"
            subtitle="Core areas used to frame governance and development analysis across the platform."
          />

          <div className="flex flex-wrap gap-3">
            {policyThemes.map((theme) => (
              <span
                key={theme}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {theme}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm sm:p-8">
 
<div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm font-medium text-slate-600">Chart view:</span>

      <button
        onClick={() => setChartView('all')}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          chartView === 'all'
            ? 'bg-green-800 text-white'
            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
        }`}
      >
        All
      </button>

      <button
        onClick={() => setChartView('top3')}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          chartView === 'top3'
            ? 'bg-green-800 text-white'
            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
        }`}
      >
        Top 3
      </button>

      <button
        onClick={() => setChartView('top5')}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          chartView === 'top5'
            ? 'bg-green-800 text-white'
            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
        }`}
      >
        Top 5
      </button>
    </div>

    <div className="text-xs text-slate-500">
      Showing:{' '}
      <span className="font-semibold text-slate-700">
        {chartView === 'all'
          ? 'All profiles'
          : chartView === 'top3'
          ? 'Top 3 profiles'
          : 'Top 5 profiles'}
      </span>
    </div>
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="theme-filter" className="text-sm font-medium text-slate-600">
      Theme
    </label>
    <select
      id="theme-filter"
      value={selectedTheme}
      onChange={(e) => setSelectedTheme(e.target.value)}
      className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-green-700 focus:outline-none"
    >
      {availableThemes.map((theme) => (
        <option key={theme} value={theme}>
          {theme}
        </option>
      ))}
    </select>
  </div>
</div>

<div className="mb-6">
  <div className="mb-3 text-sm font-medium text-slate-600">Profiles</div>

  <div className="flex flex-wrap gap-3">
    {sortedCandidates.map((candidate) => {
      const checked = selectedProfiles.includes(candidate.slug)

      return (
        <label
          key={candidate.slug}
          className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm cursor-pointer transition ${
            checked
              ? 'border-green-700 bg-green-50 text-green-800'
              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
          }`}
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={() => toggleProfile(candidate.slug)}
            className="h-4 w-4 rounded border-slate-300 text-green-700 focus:ring-green-700"
          />
          <span>{candidate.name}</span>
        </label>
      )
    })}
  </div>

  <div className="mt-3 text-xs text-slate-500">
    Selected: <span className="font-semibold text-slate-700">{selectedProfiles.length}</span>
  </div>
 <div className="mt-3 flex flex-wrap gap-2">
  <button
    onClick={() => setSelectedProfiles(sortedCandidates.map((candidate) => candidate.slug))}
    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
  >
    Select all
  </button>

  <button
    onClick={() => setSelectedProfiles([])}
    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
  >
    Clear all
  </button>

  <button
    onClick={() => setSelectedProfiles(sortedCandidates.slice(0, 3).map((candidate) => candidate.slug))}
    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
  >
    Top 3 only
  </button>
</div>


</div>

 <SectionHeader
  kicker="Visualization"
  title="📊 Overall score bar chart"
  subtitle="A quick visual comparison of overall profile scores."
/>

  {hasSelectedProfiles ? (
  <ScoreBarChart
    key={`${chartView}-${selectedTheme}-${selectedProfiles.join('-')}`}
    candidates={chartCandidates}
    selectedTheme={selectedTheme}
  />
) : (
  <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
    Select at least one profile to display the bar chart.
  </div>
)}
</section>

<section className="mb-16 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm sm:p-8">
 <SectionHeader
  kicker="Comparison"
  title="🕸 Radar chart by criterion"
  subtitle="A visual comparison of the top profiles across the five evaluation criteria."
/>

  {hasSelectedProfiles ? (
  <ScoreRadarChart
    key={`${chartView}-${selectedProfiles.join('-')}`}
    candidates={chartCandidates}
  />
) : (
  <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
    Select at least one profile to display the radar chart.
  </div>
)}

{selectedProfiles.length > 5 && (
  <div className="text-xs text-amber-600 mt-1">
    Showing many profiles may reduce chart readability.
  </div>
)}

</section>



<section id="scorecard" className="mb-14 scroll-mt-24">
  <SectionHeader
    kicker="Scorecard"
    title="Overall scorecard"
    subtitle="A uniform framework applied across governance and policy profiles."
  />
  <ThemeFilter />
</section>

        <section className="mb-14">
          <SectionHeader
            kicker="Highlights"
            title="Top-performing profiles"
            subtitle="A quick dashboard view of the strongest overall profiles in the current dataset."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {sortedCandidates.slice(0, 3).map((candidate) => (
              <div key={candidate.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-xl">
                    <Image src={candidate.photo} alt={candidate.name} fill className="object-cover" sizes="56px" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm text-slate-500">{candidate.party}</div>
                    <div className="truncate text-lg font-bold text-slate-900">{candidate.name}</div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-2 flex justify-between text-sm text-slate-600">
                    <span>Overall Score</span>
                    <span className="font-bold">{candidate.globalScore.toFixed(1)}/10</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${candidate.globalScore * 10}%`,
                        backgroundColor: candidate.politicalColor,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="mb-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <SectionHeader
            kicker="Comparison"
            title="Comparison by criterion"
            subtitle="A side-by-side view of profile performance across the five evaluation criteria."
          />

          <div className="overflow-x-auto">
            <table className="min-w-[760px] w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Criteria
                  </th>
                  {sortedCandidates.map((candidate) => (
                    <th key={candidate.slug} className="px-4 py-3 text-center">
                      <Link href={`/candidats/${candidate.slug}`} className="group inline-flex flex-col items-center gap-2">
                        <div className="relative h-10 w-10 overflow-hidden rounded-xl">
                          <Image
                            src={candidate.photo}
                            alt={candidate.name}
                            fill
                            className="object-cover"
                            sizes="40px"
                          />
                        </div>
                        <span className="max-w-[110px] truncate text-[11px] font-medium text-slate-600 group-hover:text-slate-900">
                          {candidate.name}
                        </span>
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {criteria.map((criterion) => (
                  <tr key={criterion.key} className="border-b border-slate-100 last:border-b-0">
                    <td className="px-4 py-4 text-sm font-semibold text-slate-700">{criterion.label}</td>
                    {sortedCandidates.map((candidate) => {
                      const score = candidate.scores?.[criterion.key] ?? 0
                      return (
                        <td key={candidate.slug} className="px-4 py-4 text-center">
                          <div className="flex flex-col items-center gap-2">
                            <span className="text-sm font-bold" style={{ color: getScoreHex(score) }}>
                              {score.toFixed(1)}
                            </span>
                            <div className="h-2 w-full max-w-[70px] overflow-hidden rounded-full bg-slate-100">
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${(score / 10) * 100}%`,
                                  backgroundColor: getScoreHex(score),
                                }}
                              />
                            </div>
                          </div>
                        </td>
                      )
                    })}
                  </tr>
                ))}

                <tr className="bg-slate-50">
                  <td className="px-4 py-4 text-sm font-bold text-slate-900">Overall</td>
                  {sortedCandidates.map((candidate) => (
                    <td key={candidate.slug} className="px-4 py-4 text-center">
                      <span className="text-base font-bold" style={{ color: getScoreHex(candidate.globalScore) }}>
                        {candidate.globalScore.toFixed(1)}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <SectionHeader
            kicker="Overview"
            title="Overall scores"
            subtitle="Normalized to 10 and ranked from highest to lowest."
          />

          <div className="space-y-4">
            {sortedCandidates.map((candidate, index) => (
              <Link key={candidate.slug} href={`/candidats/${candidate.slug}`} className="block">
                <div className="group flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-slate-200 hover:bg-slate-50">
                  <span className="w-8 text-sm font-semibold text-slate-400">#{index + 1}</span>

                  <div className="relative h-10 w-10 overflow-hidden rounded-xl">
                    <Image src={candidate.photo} alt={candidate.name} fill className="object-cover" sizes="40px" />
                  </div>

                  <div className="min-w-0 w-44">
                    <div className="truncate text-sm font-semibold text-slate-900 group-hover:text-green-800">
                      {candidate.name}
                    </div>
                    <div className="truncate text-xs text-slate-500">{candidate.party}</div>
                  </div>

                  <div className="flex-1">
                    <div className="h-4 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="flex h-full items-center rounded-full px-2"
                        style={{
                          width: `${(candidate.globalScore / maxScore) * 100}%`,
                          backgroundColor: getScoreHex(candidate.globalScore),
                        }}
                      >
                        <span className="text-[10px] font-semibold text-white">
                          {candidate.globalScore.toFixed(1)}/10
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className={`hidden text-xs font-semibold sm:inline ${getScoreColor(candidate.globalScore)}`}>
                    {getScoreLabel(candidate.globalScore)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              kicker="Priority measures"
              title="Most robust measures"
              subtitle="Measures that appear coherent, practical, and easier to implement."
            />

            <div className="space-y-4">
              {allBestMeasures.map((measure, index) => (
                <Link key={`${measure.slug}-${index}`} href={`/candidats/${measure.slug}`} className="block">
                  <div className="group rounded-2xl border border-slate-100 p-4 transition hover:border-slate-200 hover:bg-slate-50">
                    <div className="flex items-start gap-3">
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl">
                        <Image src={measure.photo} alt={measure.candidate} fill className="object-cover" sizes="40px" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-slate-900 group-hover:text-green-800">
                            {measure.title}
                          </span>
                          <MeasureTag type={measure.type} />
                        </div>
                        <div className="mt-2 text-sm leading-relaxed text-slate-600">{measure.detail}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              kicker="Risk areas"
              title="More fragile measures"
              subtitle="Measures that may face funding, feasibility, or implementation risks."
            />

            <div className="space-y-4">
              {allWorstMeasures.map((measure, index) => (
                <Link key={`${measure.slug}-${index}`} href={`/candidats/${measure.slug}`} className="block">
                  <div className="group rounded-2xl border border-slate-100 p-4 transition hover:border-slate-200 hover:bg-slate-50">
                    <div className="flex items-start gap-3">
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl">
                        <Image src={measure.photo} alt={measure.candidate} fill className="object-cover" sizes="40px" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-slate-900 group-hover:text-red-700">
                            {measure.title}
                          </span>
                          <MeasureTag type={measure.type} />
                        </div>
                        <div className="mt-2 text-sm leading-relaxed text-slate-600">{measure.detail}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="profiles" className="mb-14 scroll-mt-24">
          <SectionHeader
            kicker="Profiles"
            title="Policy and governance profiles"
            subtitle="Regional governance, sector priorities, and public-policy positioning."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sortedCandidates.map((candidate) => (
              <Link key={candidate.slug} href={`/candidats/${candidate.slug}`} className="group">
                <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={candidate.photo}
                      alt={candidate.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-slate-900 shadow">
                      {candidate.globalScore.toFixed(1)}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: candidate.politicalColor }}>
                      {candidate.party}
                    </div>

                    <h3 className="mt-2 text-xl font-bold text-slate-900 transition group-hover:text-green-800">
                      {candidate.name}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
                      {candidate.politicalLine}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-500">View full analysis</span>
                      <span className="text-lg text-slate-400 transition group-hover:text-green-800">→</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <SectionHeader
            kicker="Method"
            title="How the framework works"
            subtitle="The five criteria used to evaluate governance and policy profiles."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {[
              {
                name: 'Policy Coherence',
                desc: 'Whether priorities fit together without internal contradiction.',
              },
              {
                name: 'Institutional Strength',
                desc: 'Whether the profile shows realistic institutional grounding and constraints.',
              },
              {
                name: 'Resilience',
                desc: 'Whether the approach can withstand fiscal, political, or implementation shocks.',
              },
              {
                name: 'Practicality',
                desc: 'Whether the measures appear actionable in a real regional context.',
              },
              {
                name: 'Level of Detail',
                desc: 'Whether the proposals are concrete enough to evaluate meaningfully.',
              },
            ].map((criterion, index) => (
              <div key={criterion.name} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="text-2xl font-bold text-slate-300">0{index + 1}</div>
                <div className="mt-2 text-sm font-semibold text-slate-900">{criterion.name}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{criterion.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/methodologie" className="text-sm font-semibold text-green-700 hover:underline">
              View full methodology →
            </Link>
          </div>
        </section>

        <section className="mb-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <SectionHeader
            kicker="Explore"
            title="Explore the platform"
            subtitle="Compare profiles, review analysis, and understand the scoring approach."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              href="/comparateur"
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:border-slate-300 hover:bg-white hover:shadow-md"
            >
              <div className="mb-3 text-3xl">⚖</div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-green-800">Comparator</div>
              <div className="mt-1 text-xs text-slate-600">Two profiles side by side</div>
            </Link>

            <Link
              href="/faq"
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:border-slate-300 hover:bg-white hover:shadow-md"
            >
              <div className="mb-3 text-3xl">❓</div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-green-800">FAQ</div>
              <div className="mt-1 text-xs text-slate-600">Questions about the project</div>
            </Link>

            <Link
              href="/methodologie"
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:border-slate-300 hover:bg-white hover:shadow-md"
            >
              <div className="mb-3 text-3xl">🔍</div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-green-800">Methodology</div>
              <div className="mt-1 text-xs text-slate-600">Detailed scoring framework</div>
            </Link>
          </div>
        </section>
      </main>

     

      <SiteFooter />
    </div>
  )
}