'use client'

import type { CandidateScores } from '@/types/candidate'

interface ScoreRadarProps {
  scores: CandidateScores
}

function getScoreHex(value: number): string {
  if (value >= 7) return '#16a34a'
  if (value >= 5) return '#d97706'
  return '#dc2626'
}

export default function ScoreRadar({ scores }: ScoreRadarProps) {
  const criteria = [
    { key: 'coherence', label: 'Coherence', value: scores.coherence },
    { key: 'solidite', label: 'Institutional Strength', value: scores.solidite },
    { key: 'robustesse', label: 'Resilience', value: scores.robustesse },
    { key: 'pragmatisme', label: 'Practicality', value: scores.pragmatisme },
    { key: 'detail', label: 'Detail', value: scores.detail },
  ]

  return (
    <div className="space-y-0">
      {criteria.map((criterion) => (
        <div
          key={criterion.key}
          className="score-pill flex items-center gap-2.5 py-3 sm:gap-4 sm:py-4"
        >
          <span className="label-mono w-20 shrink-0 !text-[9px] sm:w-28 sm:!text-[11px]">
            {criterion.label}
          </span>

          <div className="score-bar flex-1">
            <div
              className="score-bar-fill transition-all duration-700"
              style={{
                width: `${(criterion.value / 10) * 100}%`,
                backgroundColor: getScoreHex(criterion.value),
              }}
            />
          </div>

          <div className="flex w-16 items-baseline justify-end gap-1 sm:w-20">
            <span
              className="score-display text-base sm:text-xl"
              style={{ color: getScoreHex(criterion.value) }}
            >
              {criterion.value.toFixed(1)}
            </span>
            <span className="text-[10px] text-ink-4 sm:text-xs">/10</span>
          </div>
        </div>
      ))}
    </div>
  )
}