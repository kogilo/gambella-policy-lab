import Link from 'next/link'
import Image from 'next/image'
import { Candidate } from '@/types/candidate'

interface CandidateCardProps {
  candidate: Candidate
  rank: number
}

function getScoreColor(score: number): string {
  if (score >= 7) return 'text-score-solid'
  if (score >= 5) return 'text-score-mixed'
  return 'text-score-fragile'
}

function getScoreHex(score: number): string {
  if (score >= 7) return '#16a34a'
  if (score >= 5) return '#d97706'
  return '#dc2626'
}

export default function CandidateCard({ candidate, rank }: CandidateCardProps) {
  return (
    <Link href={`/candidats/${candidate.slug}`}>
      <article className="panel-card group overflow-hidden transition-all hover:shadow-md">
        <div
          className="h-[3px] rounded-t-[12px]"
          style={{ backgroundColor: candidate.politicalColor }}
        />
        <div className="p-4 md:p-5">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="flex w-full flex-1 items-center gap-4 md:w-auto md:gap-5">
              <div className="score-display w-7 shrink-0 text-center text-lg text-ink-4 sm:w-8 sm:text-xl">
                {rank}
              </div>

              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg md:h-14 md:w-14">
                <Image
                  src={candidate.photo}
                  alt={candidate.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <h3 className="text-base font-semibold text-ink transition-colors group-hover:text-accent md:text-lg">
                    {candidate.name}
                  </h3>
                  <span className="mt-0.5 text-xs text-ink-3 sm:mt-0">
                    {candidate.party}
                  </span>
                </div>

                <div className="mt-2 hidden flex-wrap gap-4 md:flex">
                  {[
                    { label: 'COH', value: candidate.scores.coherence },
                    { label: 'INS', value: candidate.scores.solidite },
                    { label: 'RES', value: candidate.scores.robustesse },
                    { label: 'PRA', value: candidate.scores.pragmatisme },
                    { label: 'DET', value: candidate.scores.detail },
                  ].map((score) => (
                    <div key={score.label} className="flex items-center gap-1.5">
                      <span className="label-mono !text-[9px]">{score.label}</span>
                      <span className={`score-display text-xs ${getScoreColor(score.value)}`}>
                        {score.value.toFixed(1)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 space-y-1.5 md:hidden">
                  {[
                    { label: 'COH', value: candidate.scores.coherence },
                    { label: 'INS', value: candidate.scores.solidite },
                    { label: 'RES', value: candidate.scores.robustesse },
                    { label: 'PRA', value: candidate.scores.pragmatisme },
                    { label: 'DET', value: candidate.scores.detail },
                  ].map((score) => (
                    <div key={score.label} className="flex items-center gap-2">
                      <span className="label-mono !text-[9px] w-7">{score.label}</span>
                      <div className="score-bar flex-1">
                        <div
                          className="score-bar-fill"
                          style={{
                            width: `${(score.value / 10) * 100}%`,
                            backgroundColor: getScoreHex(score.value),
                          }}
                        />
                      </div>
                      <span
                        className={`score-display w-8 text-right text-[11px] ${getScoreColor(score.value)}`}
                      >
                        {score.value.toFixed(1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="self-end text-right md:ml-4 md:self-center">
              <div className={`score-display text-3xl ${getScoreColor(candidate.globalScore)}`}>
                {candidate.globalScore}
              </div>
              <div className="label-mono mt-0.5 !text-[9px]">/10</div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}