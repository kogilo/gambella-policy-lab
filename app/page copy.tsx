import { candidatesData } from '@/lib/data'
import ThemeFilter from '@/components/ThemeFilter'
import HeroFaces from '@/components/HeroFaces'
import HeroCandidates from '@/components/HeroCandidates'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Image from 'next/image'
import Link from 'next/link'

function getScoreHex(score: number): string {
  if (score >= 7) return '#16a34a'
  if (score >= 5) return '#d97706'
  return '#dc2626'
}

function getScoreColor(score: number): string {
  if (score >= 7) return 'text-score-solid'
  if (score >= 5) return 'text-score-mixed'
  return 'text-score-fragile'
}

function getScoreLabel(score: number): string {
  if (score >= 7) return 'Strong'
  if (score >= 5) return 'Mixed'
  return 'Fragile'
}

const measureTags: Record<string, { label: string; bg: string; text: string }> = {
  costed: { label: 'costed', bg: 'bg-blue-500/10', text: 'text-blue-600' },
  realistic: { label: 'realistic', bg: 'bg-score-solid/10', text: 'text-score-solid' },
  unlikely: { label: 'unlikely', bg: 'bg-score-mixed/10', text: 'text-score-mixed' },
  unrealistic: { label: 'unrealistic', bg: 'bg-score-fragile/10', text: 'text-score-fragile' },
  out_of_scope: { label: 'out of scope', bg: 'bg-purple-500/10', text: 'text-purple-600' },
  best: { label: 'priority', bg: 'bg-score-solid/10', text: 'text-score-solid' },
  worst: { label: 'high risk', bg: 'bg-score-fragile/10', text: 'text-score-fragile' },
}

function MeasureTag({ type }: { type: string }) {
  const tag = measureTags[type]
  if (!tag) return null

  return (
    <span
      className={`text-[9px] uppercase tracking-[0.1em] px-1.5 py-0.5 rounded font-bold ${tag.bg} ${tag.text}`}
    >
      {tag.label}
    </span>
  )
}

const criteria = [
  { key: 'coherence', label: 'Policy Coherence' },
  { key: 'solidite', label: 'Institutional Strength' },
  { key: 'robustesse', label: 'Resilience' },
  { key: 'pragmatisme', label: 'Practicality' },
  { key: 'detail', label: 'Level of Detail' },
] as const

export default function HomePage() {
  const sortedCandidates = [...candidatesData].sort((a, b) => b.globalScore - a.globalScore)
  const maxScore = sortedCandidates[0]?.globalScore ?? 10

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
    <div className="site-shell min-h-screen">
      <SiteNav />

      <header className="border-b border-[var(--border)] relative overflow-hidden">
        <HeroFaces />
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-24 relative z-10">
          <div className="floating-in max-w-3xl">
            <span className="kicker mb-5">Gambella Civic Policy Platform</span>
            <h1 className="headline-xl mt-3">
              Local politics, governance analysis, and public-policy profiles.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink-3 max-w-2xl leading-relaxed">
              A structured civic platform focused on governance, service delivery, development
              priorities, and regional policy analysis in Gambella. We do not endorse any actor;
              we present a consistent framework for comparing priorities, strengths, risks, and
              implementation readiness.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="soft-chip">Governance profiles</span>
              <span className="soft-chip">Consistent evaluation</span>
              <span className="soft-chip">Public policy focus</span>
              <span className="soft-chip">Updated 2026</span>
            </div>
          </div>

          <div className="mt-12">
            <HeroCandidates
              candidates={sortedCandidates.map((c) => ({
                slug: c.slug,
                name: c.name,
                photo: c.photo,
                politicalColor: c.politicalColor,
                globalScore: c.globalScore,
              }))}
            />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-16">
        <section id="scorecard" className="mb-14 sm:mb-20 scroll-mt-24">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="kicker mb-2">Results</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mt-1">Overall scorecard</h2>
              <p className="text-sm text-ink-3 mt-2">
                A uniform governance and policy framework applied across all profiles.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[10px] font-medium">
              <span className="soft-chip">
                <span className="w-2 h-2 rounded-full bg-score-solid mr-1.5 inline-block" />
                Strong 7+
              </span>
              <span className="soft-chip">
                <span className="w-2 h-2 rounded-full bg-score-mixed mr-1.5 inline-block" />
                Mixed 5-7
              </span>
              <span className="soft-chip">
                <span className="w-2 h-2 rounded-full bg-score-fragile mr-1.5 inline-block" />
                Fragile {'<'}5
              </span>
            </div>
          </div>
          <ThemeFilter />
        </section>

        <section className="panel-card p-6 sm:p-8 mb-14 sm:mb-20">
          <span className="kicker mb-2">Cross-analysis</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mt-1">Comparison by criterion</h2>
          <p className="text-sm text-ink-3 mt-2 mb-8">
            A side-by-side view of profile performance across the five evaluation criteria.
          </p>

          <div className="overflow-x-auto -mx-2 px-2">
            <table className="w-full min-w-[640px] data-table">
              <thead>
                <tr>
                  <th className="w-32">Criteria</th>
                  {sortedCandidates.map((candidate) => (
                    <th key={candidate.slug} className="text-center">
                      <Link
                        href={`/candidats/${candidate.slug}`}
                        className="group inline-flex flex-col items-center gap-1.5"
                      >
                        <div className="relative w-9 h-9 rounded-lg overflow-hidden">
                          <Image
                            src={candidate.photo}
                            alt={candidate.name}
                            fill
                            className="object-cover"
                            sizes="36px"
                          />
                        </div>
                        <span className="text-[10px] text-ink-3 group-hover:text-ink truncate max-w-[100px] normal-case tracking-normal font-medium">
                          {candidate.name}
                        </span>
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {criteria.map((criterion) => (
                  <tr key={criterion.key}>
                    <td className="text-xs font-semibold text-ink-2">{criterion.label}</td>
                    {sortedCandidates.map((candidate) => {
                      const score = candidate.scores?.[criterion.key] ?? 0
                      return (
                        <td key={candidate.slug} className="text-center">
                          <div className="flex flex-col items-center gap-1.5">
                            <span className="score-display text-sm" style={{ color: getScoreHex(score) }}>
                              {score.toFixed(1)}
                            </span>
                            <div className="score-bar w-full max-w-[56px]">
                              <div
                                className="score-bar-fill"
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
                <tr className="border-t-2 border-ink/10">
                  <td className="label-mono !text-[10px] py-3">Overall</td>
                  {sortedCandidates.map((candidate) => (
                    <td key={candidate.slug} className="text-center py-3">
                      <span className="score-display text-lg" style={{ color: getScoreHex(candidate.globalScore) }}>
                        {candidate.globalScore.toFixed(1)}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel-card p-6 sm:p-8 mb-14 sm:mb-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <span className="kicker mb-2">Overview</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mt-1">Overall scores</h2>
            </div>
            <span className="label-mono">Normalized to 10</span>
          </div>

          <div className="space-y-3">
            {sortedCandidates.map((candidate, index) => (
              <Link key={candidate.slug} href={`/candidats/${candidate.slug}`} className="block group">
                <div className="flex items-center gap-3 sm:gap-4 py-3 border-b border-[var(--border)] last:border-b-0">
                  <span className="score-display text-sm text-ink-4 w-6">#{index + 1}</span>
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0">
                    <Image src={candidate.photo} alt={candidate.name} fill className="object-cover" sizes="32px" />
                  </div>

                  <span className="text-xs sm:text-sm font-semibold text-ink w-36 truncate group-hover:text-accent transition-colors">
                    {candidate.name}
                  </span>

                  <div className="flex-1 flex items-center gap-3">
                    <div className="flex-1 score-bar !h-5">
                      <div
                        className="h-full score-bar-fill flex items-center"
                        style={{
                          width: `${(candidate.globalScore / maxScore) * 100}%`,
                          backgroundColor: getScoreHex(candidate.globalScore),
                        }}
                      >
                        <span className="text-[9px] sm:text-[10px] font-semibold text-white ml-1.5 sm:ml-2.5 score-display whitespace-nowrap">
                          {candidate.globalScore.toFixed(1)}/10
                        </span>
                      </div>
                    </div>
                    <span className={`label-mono !text-[9px] hidden sm:inline ${getScoreColor(candidate.globalScore)}`}>
                      {getScoreLabel(candidate.globalScore)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-5 mb-14 sm:mb-20">
          <div className="panel-card p-6 sm:p-7">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-score-solid" />
              <span className="kicker !text-score-solid">Priority measures</span>
            </div>
            <h2 className="text-xl font-bold text-ink mt-1">Most robust measures</h2>
            <p className="text-xs text-ink-3 mb-5 mt-1">
              Measures that appear coherent, practical, and easier to implement.
            </p>

            <div className="space-y-3">
              {allBestMeasures.map((measure, index) => (
                <Link key={`${measure.slug}-${index}`} href={`/candidats/${measure.slug}`} className="block group">
                  <div className="playful-dash p-3.5 hover:shadow-sm transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="relative w-7 h-7 rounded-md overflow-hidden shrink-0">
                        <Image src={measure.photo} alt={measure.candidate} fill className="object-cover" sizes="28px" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                            {measure.title}
                          </span>
                          <MeasureTag type={measure.type} />
                        </div>
                        <div className="text-xs text-ink-3 mt-1 line-clamp-2">{measure.detail}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="panel-card p-6 sm:p-7">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-score-fragile" />
              <span className="kicker !text-score-fragile">Risk areas</span>
            </div>
            <h2 className="text-xl font-bold text-ink mt-1">More fragile measures</h2>
            <p className="text-xs text-ink-3 mb-5 mt-1">
              Measures that may face funding, feasibility, or implementation risks.
            </p>

            <div className="space-y-3">
              {allWorstMeasures.map((measure, index) => (
                <Link key={`${measure.slug}-${index}`} href={`/candidats/${measure.slug}`} className="block group">
                  <div className="playful-dash p-3.5 hover:shadow-sm transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="relative w-7 h-7 rounded-md overflow-hidden shrink-0">
                        <Image src={measure.photo} alt={measure.candidate} fill className="object-cover" sizes="28px" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                            {measure.title}
                          </span>
                          <MeasureTag type={measure.type} />
                        </div>
                        <div className="text-xs text-ink-3 mt-1 line-clamp-2">{measure.detail}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="profiles" className="mb-14 sm:mb-20 scroll-mt-24">
          <span className="kicker mb-2">Profiles</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mt-1">Policy and governance profiles</h2>
          <p className="text-sm text-ink-3 mt-2 mb-8">
            Regional governance, sector priorities, and public-policy positioning.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedCandidates.map((candidate) => (
              <Link key={candidate.slug} href={`/candidats/${candidate.slug}`} className="group">
                <div className="panel-card overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-[3px] rounded-t-[12px]" style={{ backgroundColor: candidate.politicalColor }} />
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                        <Image src={candidate.photo} alt={candidate.name} fill className="object-cover" sizes="40px" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-bold text-ink truncate group-hover:text-accent transition-colors">
                          {candidate.name}
                        </h3>
                        <div className="text-xs text-ink-3 truncate">{candidate.party}</div>
                      </div>
                      <span className={`score-display text-lg ${getScoreColor(candidate.globalScore)}`}>
                        {candidate.globalScore.toFixed(1)}
                      </span>
                    </div>

                    <p className="text-xs text-ink-3 leading-relaxed mb-4 line-clamp-2">{candidate.politicalLine}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium" style={{ color: candidate.politicalColor }}>
                        {candidate.party}
                      </span>
                      <span className="text-xs text-ink-4 group-hover:text-accent transition-colors">
                        View analysis &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="panel-card p-6 sm:p-8 mb-14 sm:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <span className="kicker mb-2">Method</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mt-1">How the framework works</h2>
            </div>
            <Link href="/methodologie" className="text-sm text-accent font-medium hover:underline">
              Full methodology &rarr;
            </Link>
          </div>

          <div className="note-grid">
            {[
              { name: 'Policy Coherence', desc: 'Whether priorities fit together without internal contradiction.' },
              { name: 'Institutional Strength', desc: 'Whether the profile shows realistic institutional grounding and constraints.' },
              { name: 'Resilience', desc: 'Whether the approach can withstand fiscal, political, or implementation shocks.' },
              { name: 'Practicality', desc: 'Whether the measures appear actionable in a real regional context.' },
              { name: 'Level of Detail', desc: 'Whether the proposals are concrete enough to evaluate meaningfully.' },
            ].map((criterion, index) => (
              <div key={criterion.name} className="playful-dash p-4">
                <div className="score-display text-2xl text-ink-4 mb-2">0{index + 1}</div>
                <div className="text-sm font-semibold text-ink">{criterion.name}</div>
                <div className="text-xs text-ink-3 mt-1 leading-relaxed">{criterion.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel-card p-6 sm:p-8 mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink text-center mb-2">Explore the platform</h2>
          <p className="text-sm text-ink-3 text-center mb-8">
            Compare profiles, review analysis, and understand the evaluation approach.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/comparateur" className="group playful-dash p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">&#9878;</div>
              <div className="text-sm font-bold text-ink group-hover:text-accent transition-colors">Comparator</div>
              <div className="text-xs text-ink-3 mt-1">Two profiles side by side</div>
            </Link>

            <Link href="/faq" className="group playful-dash p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">&#10067;</div>
              <div className="text-sm font-bold text-ink group-hover:text-accent transition-colors">FAQ</div>
              <div className="text-xs text-ink-3 mt-1">Questions about the project</div>
            </Link>

            <Link href="/methodologie" className="group playful-dash p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">&#128269;</div>
              <div className="text-sm font-bold text-ink group-hover:text-accent transition-colors">Methodology</div>
              <div className="text-xs text-ink-3 mt-1">Detailed scoring framework</div>
            </Link>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  )
}