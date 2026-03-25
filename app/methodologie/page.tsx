import Link from 'next/link'
import { candidatesData } from '@/lib/data'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Methodology',
  description:
    'How Gambella Policy Lab evaluates governance and public-policy profiles using a consistent five-criteria framework and thematic scoring model.',
  openGraph: {
    title: 'Methodology — Gambella Policy Lab',
    description:
      'How Gambella Policy Lab evaluates governance and public-policy profiles using a consistent five-criteria framework.',
  },
}

export default function MethodologyPage() {
  const sortedCandidates = [...candidatesData].sort((a, b) => b.globalScore - a.globalScore)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteNav />

      <header className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-800">
              Public Methodology
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              How the platform evaluates governance and policy profiles
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Gambella Policy Lab uses a structured, transparent, and repeatable framework to
              compare governance profiles, policy priorities, and sector performance. The purpose is
              to make public-policy analysis easier to understand, not to endorse any political
              actor.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                {sortedCandidates.length} profiles analyzed
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                5 evaluation criteria
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                Thematic scoring
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                Independent civic analysis
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Project position</h2>
          <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
            This platform is an independent civic initiative. It does not campaign for any
            individual, institution, or political group. Its purpose is to organize public
            information into a more readable structure so users can compare governance quality,
            implementation readiness, sector strengths, and policy risks.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
              <div className="mb-2 text-2xl">⚖</div>
              <div className="text-sm font-semibold text-slate-900">Independent</div>
              <div className="mt-1 text-xs text-slate-500">No formal political affiliation</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
              <div className="mb-2 text-2xl">🔍</div>
              <div className="text-sm font-semibold text-slate-900">Transparent</div>
              <div className="mt-1 text-xs text-slate-500">Criteria and logic are public</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
              <div className="mb-2 text-2xl">📊</div>
              <div className="text-sm font-semibold text-slate-900">Repeatable</div>
              <div className="mt-1 text-xs text-slate-500">Same framework for all profiles</div>
            </div>
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Why use a structured framework?</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Consistency of treatment',
                description:
                  'Every profile is evaluated using the same criteria, the same scoring logic, and the same structure. This improves comparability across profiles.',
              },
              {
                title: 'Clearer public understanding',
                description:
                  'Governance and policy documents can be long and uneven. A structured framework makes strengths, weaknesses, and tradeoffs easier to see.',
              },
              {
                title: 'Faster synthesis',
                description:
                  'The platform helps organize large amounts of public information into a format that users can review more efficiently.',
              },
              {
                title: 'Traceable reasoning',
                description:
                  'Scores are tied to explicit criteria and supporting descriptions rather than vague impressions.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Information base</h2>
          <p className="mb-5 text-sm leading-relaxed text-slate-600">
            The platform is designed around public-facing policy and governance information. It is
            not based on private conversations, insider access, or non-public records.
          </p>

          <div className="space-y-3">
            {[
              {
                label: 'Public policy statements',
                detail:
                  'Published descriptions of governance priorities, policy goals, and institutional plans.',
              },
              {
                label: 'Sector-focused content',
                detail:
                  'Material related to education, health, agriculture, infrastructure, public services, and other development priorities.',
              },
              {
                label: 'Structured profile data',
                detail:
                  'Standardized fields such as scores, thematic scores, strengths, risks, contradictions, and blind spots.',
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-green-700" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                  <div className="mt-1 text-sm text-slate-600">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Analysis process</h2>
          <p className="mb-5 text-sm leading-relaxed text-slate-600">
            Each profile is organized through the same sequence so that the results are comparable.
          </p>

          <div className="space-y-3">
            {[
              {
                step: '1',
                title: 'Profile collection',
                detail:
                  'Basic profile information is assembled, including name, institutional category, summary description, and visual identity.',
                color: '#2563EB',
              },
              {
                step: '2',
                title: 'Criteria scoring',
                detail:
                  'Each profile is scored across five core criteria: coherence, institutional strength, resilience, practicality, and level of detail.',
                color: '#2563EB',
              },
              {
  step: '3',
  title: 'Thematic scoring',
  detail:
    'Profiles are also described by sector or theme, such as governance, security, education, health, agriculture, infrastructure, and public services.',
  color: '#D97706',
},
              {
                step: '4',
                title: 'Strengths and risks',
                detail:
                  'Major strengths, weaknesses, problematic measures, contradictions, and blind spots are recorded.',
                color: '#D97706',
              },
              {
                step: '5',
                title: 'Overall synthesis',
                detail:
                  'An overall score and summary verdict are produced to help users compare profiles quickly.',
                color: '#EA580C',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">The five evaluation criteria</h2>

          <div className="space-y-3">
            {[
              {
                title: '1. Policy Coherence',
                detail:
                  'Do the profile’s priorities fit together logically, or do they create internal tension?',
                example:
                  'Example: highly ambitious public-service targets without matching implementation logic may reduce coherence.',
                color: 'bg-green-700',
              },
              {
                title: '2. Institutional Strength',
                detail:
                  'Does the profile reflect realistic institutional grounding, administrative capacity, and constraints?',
                example:
                  'Example: a profile with attention to delivery systems and public administration may score higher here.',
                color: 'bg-green-700',
              },
              {
                title: '3. Resilience',
                detail:
                  'Can the approach hold up under budget pressure, political stress, or implementation obstacles?',
                example:
                  'Example: a plan with redundancy, prioritization, and realistic sequencing is more resilient.',
                color: 'bg-amber-500',
              },
              {
                title: '4. Practicality',
                detail:
                  'Are the proposals actionable in a real regional or local governance setting?',
                example:
                  'Example: practical service-delivery improvements score better than vague or symbolic promises.',
                color: 'bg-amber-500',
              },
              {
                title: '5. Level of Detail',
                detail:
                  'Is there enough specificity to evaluate what would actually happen in practice?',
                example:
                  'Example: timelines, implementation steps, and concrete sector plans improve this score.',
                color: 'bg-red-500',
              },
            ].map((criterion) => (
              <div key={criterion.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start gap-3">
                  <span className={`mt-0.5 h-6 w-1 shrink-0 rounded-sm ${criterion.color}`} />
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{criterion.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{criterion.detail}</p>
                    <p className="mt-2 text-xs italic text-slate-500">{criterion.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Thematic scoring areas</h2>
          <p className="mb-5 text-sm leading-relaxed text-slate-600">
            In addition to the five cross-cutting criteria, profiles are also described through
            sector-specific themes.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                theme: 'Governance',
                icon: '🏛',
                points: ['Institutional capacity', 'Administrative structure', 'Delivery systems', 'Public accountability'],
              },
              {
                theme: 'Education',
                icon: '🎓',
                points: ['School access', 'Teacher support', 'Learning quality', 'Youth development'],
              },
              {
                theme: 'Security',
                icon: '🛡',
                points: [
                  'Public safety coordination',
                  'Camp-management oversight',
                  'Host-community protection',
                  'Crisis-response capacity',
                ],
              },
              {
                theme: 'Health',
                icon: '🏥',
                points: ['Primary care', 'Community health', 'Staffing', 'Access to services'],
              },
              {
                theme: 'Agriculture',
                icon: '🌾',
                points: ['Food security', 'Production systems', 'Farmer support', 'Rural livelihoods'],
              },
              {
                theme: 'Infrastructure',
                icon: '🛣',
                points: ['Roads', 'Utilities', 'Public works', 'Connectivity'],
              },
              {
                theme: 'Public Services',
                icon: '📋',
                points: ['Service delivery', 'Local administration', 'Community access', 'Operational readiness'],
              },
            ].map((domain) => (
              <div key={domain.theme} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 text-2xl">{domain.icon}</div>
                <h3 className="mb-2 text-sm font-bold text-slate-900">{domain.theme}</h3>
                <ul className="space-y-1">
                  {domain.points.map((point) => (
                    <li key={point} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <span className="mt-0.5 text-slate-400">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Score weighting</h2>
          <p className="mb-4 text-sm text-slate-600">
            Each of the five main criteria contributes equally to the overall score.
          </p>

          <div className="grid gap-3 sm:grid-cols-5">
            {['Coherence', 'Institutional Strength', 'Resilience', 'Practicality', 'Detail'].map((criterion) => (
              <div key={criterion} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                <div className="text-xs text-slate-500">{criterion}</div>
                <div className="mt-1 text-lg font-bold text-slate-900">20%</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm leading-relaxed text-slate-600">
              <span className="font-semibold text-slate-900">Overall score</span> = average of the
              five main criteria. Equal weighting helps keep the framework balanced instead of
              overemphasizing one dimension.
            </p>
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Reading the scores</h2>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
              <div className="text-2xl font-bold text-green-700">7+</div>
              <div className="mt-1 text-xs font-semibold text-green-700">Strong</div>
              <div className="mt-1 text-xs text-slate-500">
                The profile appears coherent, practical, and comparatively well structured.
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
              <div className="text-2xl font-bold text-amber-600">5–7</div>
              <div className="mt-1 text-xs font-semibold text-amber-600">Mixed</div>
              <div className="mt-1 text-xs text-slate-500">
                The profile shows useful strengths but also meaningful weaknesses or gaps.
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
              <div className="text-2xl font-bold text-red-600">&lt;5</div>
              <div className="mt-1 text-xs font-semibold text-red-600">Fragile</div>
              <div className="mt-1 text-xs text-slate-500">
                The profile lacks sufficient realism, detail, or implementation credibility.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Current profiles</h2>
          <p className="mb-5 text-sm leading-relaxed text-slate-600">
            These are the profiles currently included in the platform.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sortedCandidates.map((candidate) => (
              <Link
                key={candidate.slug}
                href={`/candidats/${candidate.slug}`}
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-white hover:shadow-sm"
              >
                <div
                  className="h-8 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: candidate.politicalColor }}
                />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-slate-900 group-hover:text-green-700">
                    {candidate.name}
                  </div>
                  <div className="text-xs text-slate-500">{candidate.party}</div>
                </div>
                <span className="text-xs font-bold text-slate-700">
                  {candidate.globalScore}/10
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Limits of the analysis</h2>

          <div className="space-y-3">
            {[
              'The platform evaluates structured profile content, not personal intentions or private decision-making.',
              'Security, refugee management, and host-community protection are sensitive governance issues and should be interpreted through evidence-based analysis rather than broad generalization.',
              'Scores reflect the quality and clarity of the policy profile, not guaranteed real-world outcomes.',
              'Comparisons simplify complex governance realities and should be read as analytical aids, not final truths.',
              'Some categories may remain incomplete if public information is limited.',
              'A strong score does not mean universal agreement; it means the profile is more coherent or usable within this framework.',
            ].map((limit, index) => (
              <div key={index} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 font-bold text-amber-600">!</span>
                <p className="text-sm leading-relaxed text-slate-600">{limit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-3 text-xl font-bold text-slate-900">Transparency note</h2>
          <p className="text-sm leading-relaxed text-slate-600">
            Scores do not replace public debate. They are meant to structure comparison, make
            assumptions more visible, and help users identify strengths, contradictions, and open
            questions. Users should treat this platform as a civic analysis tool and form their own
            independent judgment.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}