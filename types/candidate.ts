export interface CandidateScores {
  coherence: number
  solidite: number
  robustesse: number
  pragmatisme: number
  detail: number
}

export interface Candidate {
  slug: string
  name: string
  party: string
  politicalColor: string
  campaignUrl: string
  politicalLine: string
  globalScore: number
  photo: string
  scores: CandidateScores

  strengths: string[]
  weaknesses: string[]
  problematicMeasures: string[]

  verdict: string

  bestMeasures: {
    title: string
    detail: string
    type: string
  }[]

  worstMeasures: {
    title: string
    detail: string
    type: string
  }[]

  thematicScores: {
    theme: string
    score: number
  }[]

  contradictions: string[]
  blindSpots: string[]
}