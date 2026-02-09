# Election Lab

Open-source template for analyzing political programs with AI. Built with Next.js 15, Tailwind CSS, and TypeScript.

> Originally built for the [Paris 2026 municipal elections](https://labo-paris.com). Fork it, adapt it, deploy it for any election.

![Election Lab](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## What is this?

A ready-to-deploy website that presents AI-generated analyses of political programs. Each candidate is scored on 5 criteria, with detailed breakdowns, thematic scores, strengths, weaknesses, and more.

**Features:**
- Ranking dashboard with sortable themes
- Individual candidate pages with full analysis
- Head-to-head comparison tool
- Methodology page explaining the scoring system
- FAQ and About pages
- Responsive design (mobile-first)
- Editorial press-style UI
- No database required -- pure static site

## Quick Start

```bash
git clone https://github.com/Liftof/election-lab.git
cd election-lab
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data Schema

All candidate data lives in `lib/candidatesData.json`. Each candidate follows this schema:

```typescript
interface Candidate {
  slug: string              // URL-friendly identifier
  name: string              // Full name
  party: string             // Political party
  photo: string             // Path to photo in /public/candidates/
  politicalColor: string    // Hex color for the party
  campaignUrl: string       // Official campaign website
  politicalLine: string     // Brief description
  globalScore: number       // Overall score /10
  scores: {
    coherence: number       // Internal consistency
    solidite: number        // Technical soundness
    robustesse: number      // Budget resilience
    pragmatisme: number     // Actionability
    detail: number          // Level of detail
  }
  strengths: string[]       // Top 3 strengths
  weaknesses: string[]      // Top 3 weaknesses
  problematicMeasures: string[]  // Measures needing clarification
  verdict: string           // One-sentence summary
  bestMeasures: KeyMeasure[]     // Best proposals
  worstMeasures: KeyMeasure[]    // Weakest proposals
  thematicScores: ThematicScore[] // Scores by theme
  contradictions: string[]       // Internal contradictions
  blindSpots: string[]           // Topics not addressed
}
```

## Customization

### 1. Replace candidate data
Edit `lib/candidatesData.json` with your own candidates and scores.

### 2. Add candidate photos
Place photos in `public/candidates/{slug}.jpg`. Recommended: square, 400x400px minimum.

### 3. Update branding
- Edit `app/layout.tsx` for site title, description, and metadata
- Edit `components/SiteNav.tsx` for navigation labels
- Edit `components/SiteFooter.tsx` for footer content

### 4. Customize themes
The 5 thematic domains (Housing, Transport, Security, Environment, Budget) can be changed in the data file. The UI adapts automatically.

### 5. Customize criteria
The 5 scoring criteria can be renamed in the components. Search for the `criteria` array across files.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Liftof/election-lab)

Or manually:

```bash
npm run build
npx vercel --prod
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript 5
- **Fonts**: Manrope (body) + Instrument Serif (display) via Google Fonts
- **Deployment**: Vercel (recommended)

## Project Structure

```
├── app/                    # Next.js pages
│   ├── page.tsx           # Homepage with rankings
│   ├── candidats/[slug]/  # Individual candidate pages
│   ├── comparateur/       # Head-to-head comparison
│   ├── methodologie/      # Scoring methodology
│   ├── faq/              # Frequently asked questions
│   └── a-propos/         # About page
├── components/            # React components
├── lib/                   # Data loading utilities
│   └── candidatesData.json # All candidate data
├── types/                 # TypeScript interfaces
└── public/               # Static assets
```

## License

MIT -- do whatever you want with it.

## Credits

Built by [@pierbapt](https://x.com/pierbapt). Originally created for the Paris 2026 municipal election analysis at [labo-paris.com](https://labo-paris.com).
