'use client'

import { useMemo, useState } from 'react'
import { candidatesData } from '@/lib/data'
import CandidateCard from '@/components/CandidateCard'

export default function ThemeFilter() {
  const [activeFilter, setActiveFilter] = useState('global')

  const themeFilters = useMemo(() => {
    const themes = new Set<string>()

    candidatesData.forEach((candidate) => {
      candidate.thematicScores.forEach((themeScore) => {
        if (themeScore.theme) themes.add(themeScore.theme)
      })
    })

    return [
      { key: 'global', label: 'Overall' },
      ...Array.from(themes).map((theme) => ({
        key: theme.toLowerCase(),
        label: theme,
      })),
    ]
  }, [])

  const sortedCandidates = [...candidatesData].sort((a, b) => {
    if (activeFilter === 'global') return b.globalScore - a.globalScore

    const getThemeScore = (candidate: typeof a) => {
      const themeMatch = candidate.thematicScores.find(
        (t) => t.theme.toLowerCase() === activeFilter
      )
      return themeMatch?.score ?? candidate.globalScore
    }

    return getThemeScore(b) - getThemeScore(a)
  })

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {themeFilters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`rounded-lg px-3 py-1.5 text-[11px] font-semibold transition-all sm:px-4 sm:py-2 sm:text-xs ${
              activeFilter === filter.key
                ? 'bg-green-800 text-white'
                : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="space-y-3 stagger-in">
        {sortedCandidates.map((candidate, index) => (
          <CandidateCard key={candidate.slug} candidate={candidate} rank={index + 1} />
        ))}
      </div>

      {activeFilter !== 'global' && (
        <p className="mt-4 text-center text-xs font-medium text-slate-500">
          Ranking by thematic score: “{themeFilters.find((f) => f.key === activeFilter)?.label}”
        </p>
      )}
    </div>
  )
}