import candidatesDataJson from './candidatesData.json'
import { Candidate } from '@/types/candidate'

export const candidatesData: Candidate[] = candidatesDataJson.map((c: any) => ({
  ...c,
  scores: c.scores ?? {
    coherence: 0,
    solidite: 0,
    robustesse: 0,
    pragmatisme: 0,
    detail: 0,
  },
  bestMeasures: c.bestMeasures ?? [],
  worstMeasures: c.worstMeasures ?? [],
  thematicScores: c.thematicScores ?? [],
  strengths: c.strengths ?? [],
  weaknesses: c.weaknesses ?? [],
  problematicMeasures: c.problematicMeasures ?? [],
  contradictions: c.contradictions ?? [],
  blindSpots: c.blindSpots ?? [],
}))


export function getCandidateBySlug(slug: string): Candidate | undefined {
  return candidatesData.find((candidate) => candidate.slug === slug)
}



