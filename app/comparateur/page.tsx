'use client'

import { useState } from 'react'
import { candidatesData } from '@/lib/data'
import type { Candidate } from '@/types/candidate'
import Image from 'next/image'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

const criteriaLabels: { key: keyof Candidate['scores']; label: string }[] = [
  { key: 'coherence', label: 'Policy Coherence' },
  { key: 'solidite', label: 'Institutional Strength' },
  { key: 'robustesse', label: 'Resilience' },
  { key: 'pragmatisme', label: 'Practicality' },
  { key: 'detail', label: 'Level of Detail' },
]

function getScoreHex(score: number): string {
  if (score >= 7) return '#16a34a'
  if (score >= 5) return '#d97706'
  return '#dc2626'
}

function getScoreLabel(score: number): string {
  if (score >= 7) return 'Strong'
  if (score >= 5) return 'Mixed'
  return 'Fragile'
}

function ComparisonBar({
  scoreA,
  scoreB,
  label,
}: {
  scoreA: number
  scoreB: number
  label: string
}) {
  const winner = scoreA > scoreB ? 'A' : scoreB > scoreA ? 'B' : 'tie'

  return (
    <div className="py-3 border-b border-[var(--border)] last:border-b-0">
      <div className="text-xs font-semibold text-ink-3 text-center mb-2">{label}</div>
      <div className="flex items-center gap-3">
        <div className="flex-1 flex justify-end">
          <div className="flex items-center gap-2">
            <span
              className={`score-display text-sm ${winner === 'A' ? '' : 'opacity-40'}`}
              style={{ color: getScoreHex(scoreA) }}
            >
              {scoreA.toFixed(1)}
            </span>
            <div className="score-bar w-16 sm:w-32">
              <div
                className="score-bar-fill float-right"
                style={{
                  width: `${(scoreA / 10) * 100}%`,
                  backgroundColor: getScoreHex(scoreA),
                }}
              />
            </div>
          </div>
        </div>

        <div className="w-8 text-center">
          {winner === 'A' && <span className="text-[10px] font-bold text-score-solid">◀</span>}
          {winner === 'B' && <span className="text-[10px] font-bold text-score-solid">▶</span>}
          {winner === 'tie' && <span className="text-[10px] font-bold text-ink-4">=</span>}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="score-bar w-16 sm:w-32">
              <div
                className="score-bar-fill"
                style={{
                  width: `${(scoreB / 10) * 100}%`,
                  backgroundColor: getScoreHex(scoreB),
                }}
              />
            </div>
            <span
              className={`score-display text-sm ${winner === 'B' ? '' : 'opacity-40'}`}
              style={{ color: getScoreHex(scoreB) }}
            >
              {scoreB.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ComparatorPage() {
  const sorted = [...candidatesData].sort((a, b) => b.globalScore - a.globalScore)
  const [slugA, setSlugA] = useState(sorted[0]?.slug ?? '')
  const [slugB, setSlugB] = useState(sorted[1]?.slug ?? '')

  const candidateA = candidatesData.find((c) => c.slug === slugA)
  const candidateB = candidatesData.find((c) => c.slug === slugB)

  const winsA =
    candidateA && candidateB
      ? criteriaLabels.filter((c) => candidateA.scores[c.key] > candidateB.scores[c.key]).length
      : 0

  const winsB =
    candidateA && candidateB
      ? criteriaLabels.filter((c) => candidateB.scores[c.key] > candidateA.scores[c.key]).length
      : 0

  return (
    <div className="site-shell min-h-screen">
      <SiteNav />

      <header className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
          <span className="kicker mb-3">Comparator</span>
          <h1 className="text-xl sm:text-4xl font-bold text-ink mt-1">Profile comparison</h1>
          <p className="text-sm sm:text-base text-ink-3 mt-2">
            Compare two governance or policy profiles across criteria, themes, strengths, and weaknesses.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
          <div>
            <label className="label-mono mb-2 block">Profile A</label>
            <select
              value={slugA}
              onChange={(e) => setSlugA(e.target.value)}
              className="w-full p-3 rounded-lg border border-[var(--border)] bg-white text-sm font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            >
              {sorted.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name} ({c.globalScore}/10)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="label-mono mb-2 block">Profile B</label>
            <select
              value={slugB}
              onChange={(e) => setSlugB(e.target.value)}
              className="w-full p-3 rounded-lg border border-[var(--border)] bg-white text-sm font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            >
              {sorted.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name} ({c.globalScore}/10)
                </option>
              ))}
            </select>
          </div>
        </div>

        {candidateA && candidateB && (
          <>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
              {[candidateA, candidateB].map((c) => (
                <Link
                  key={c.slug}
                  href={`/candidats/${c.slug}`}
                  className="group panel-card p-4 sm:p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg shrink-0 overflow-hidden">
                      <Image src={c.photo} alt={c.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-bold text-ink group-hover:text-accent truncate">
                        {c.name}
                      </div>
                      <div className="text-[11px] text-ink-3">{c.party}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[var(--border)]">
                    <span className="score-display text-3xl" style={{ color: getScoreHex(c.globalScore) }}>
                      {c.globalScore}
                    </span>
                    <span className="label-mono" style={{ color: getScoreHex(c.globalScore) }}>
                      {getScoreLabel(c.globalScore)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="panel-card p-4 sm:p-6 mb-8 text-center">
              <div className="flex items-center justify-center gap-4 sm:gap-8">
                <div>
                  <div className="score-display text-2xl sm:text-3xl" style={{ color: getScoreHex(candidateA.globalScore) }}>
                    {winsA}
                  </div>
                  <div className="text-[11px] text-ink-3">
                    {winsA > 1 ? 'criteria won' : 'criterion won'}
                  </div>
                </div>

                <div className="text-ink-4 text-lg font-bold">VS</div>

                <div>
                  <div className="score-display text-2xl sm:text-3xl" style={{ color: getScoreHex(candidateB.globalScore) }}>
                    {winsB}
                  </div>
                  <div className="text-[11px] text-ink-3">
                    {winsB > 1 ? 'criteria won' : 'criterion won'}
                  </div>
                </div>
              </div>
            </div>

            <section className="panel-card p-5 sm:p-7 mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-ink mb-1">Comparison by criterion</h2>
              <p className="text-xs text-ink-3 mb-4">Each bar represents the score out of 10.</p>

              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-semibold text-ink">
                  {candidateA.name.split(' ').slice(-1)[0]}
                </span>
                <span className="text-xs font-semibold text-ink">
                  {candidateB.name.split(' ').slice(-1)[0]}
                </span>
              </div>

              {criteriaLabels.map((c) => (
                <ComparisonBar
                  key={c.key}
                  label={c.label}
                  scoreA={candidateA.scores[c.key]}
                  scoreB={candidateB.scores[c.key]}
                />
              ))}

              <div className="pt-3 mt-2 border-t-2 border-ink/10">
                <ComparisonBar
                  label="OVERALL SCORE"
                  scoreA={candidateA.globalScore}
                  scoreB={candidateB.globalScore}
                />
              </div>
            </section>

            {candidateA.thematicScores.length > 0 && candidateB.thematicScores.length > 0 && (
              <section className="panel-card p-5 sm:p-7 mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-ink mb-4">Thematic scores</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
                  {candidateA.thematicScores.map((themeA) => {
                    const themeB = candidateB.thematicScores.find((t) => t.theme === themeA.theme)
                    if (!themeB) return null

                    const winner =
                      themeA.score > themeB.score ? 'A' : themeB.score > themeA.score ? 'B' : 'tie'

                    return (
                      <div key={themeA.theme} className="playful-dash p-3 text-center">
                        <div className="text-[11px] text-ink-3 font-medium mb-2">{themeA.theme}</div>
                        <div className="flex items-center justify-center gap-2">
                          <span
                            className={`score-display text-sm ${winner === 'A' ? '' : 'opacity-40'}`}
                            style={{ color: getScoreHex(themeA.score) }}
                          >
                            {themeA.score.toFixed(1)}
                          </span>
                          <span className="text-[10px] text-ink-4">vs</span>
                          <span
                            className={`score-display text-sm ${winner === 'B' ? '' : 'opacity-40'}`}
                            style={{ color: getScoreHex(themeB.score) }}
                          >
                            {themeB.score.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>
            )}

            <section className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {[candidateA, candidateB].map((c) => (
                <div key={c.slug} className="panel-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="relative w-7 h-7 rounded-md overflow-hidden">
                      <Image src={c.photo} alt={c.name} fill className="object-cover" sizes="28px" />
                    </div>
                    <h3 className="text-sm font-bold text-ink">Strengths</h3>
                  </div>
                  <ul className="space-y-2">
                    {c.strengths.slice(0, 4).map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-ink-2 leading-relaxed">
                        <span className="text-score-solid font-bold mt-0.5">+</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {[candidateA, candidateB].map((c) => (
                <div key={c.slug} className="panel-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="relative w-7 h-7 rounded-md overflow-hidden">
                      <Image src={c.photo} alt={c.name} fill className="object-cover" sizes="28px" />
                    </div>
                    <h3 className="text-sm font-bold text-ink">Weaknesses</h3>
                  </div>
                  <ul className="space-y-2">
                    {c.weaknesses.slice(0, 4).map((w, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-ink-2 leading-relaxed">
                        <span className="text-score-fragile font-bold mt-0.5">&minus;</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {[candidateA, candidateB].map((c) => (
                <div key={c.slug} className="panel-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="relative w-7 h-7 rounded-md overflow-hidden">
                      <Image src={c.photo} alt={c.name} fill className="object-cover" sizes="28px" />
                    </div>
                    <h3 className="text-sm font-bold text-ink">Priority measures</h3>
                  </div>
                  <div className="space-y-2">
                    {c.bestMeasures.slice(0, 3).map((m, i) => (
                      <div key={i} className="playful-dash p-3">
                        <div className="text-xs font-semibold text-ink">{m.title}</div>
                        <div className="text-[11px] text-ink-3 mt-0.5 line-clamp-2">{m.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </>
        )}

        <SiteFooter />
      </main>
    </div>
  )
}