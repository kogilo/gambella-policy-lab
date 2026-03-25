export interface AnalysisPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  content: string
}

export const analysisPosts: AnalysisPost[] = [
  {
    slug: 'security-and-displacement-in-gambella',
    title: 'Security and displacement in Gambella',
    excerpt:
      'How refugee inflow, camp management, and local governance intersect in Gambella.',
    date: '2026-03-25',
    category: 'Security',
    content: `
Security in Gambella cannot be understood only as a policing issue.

It is closely connected to displacement, camp management, host-community protection, and institutional coordination. High refugee inflow places pressure on land, public services, and local administration. If camp management is weak, these pressures can intensify.

A stronger security framework requires:
- better coordination between local government and camp authorities,
- stronger host-community protection,
- more reliable data systems,
- and clearer crisis-response planning.

The policy question is not only how to respond to immediate stress, but how to build long-term governance capacity.
    `.trim(),
  },
  {
    slug: 'education-pressure-in-high-inflow-zones',
    title: 'Education pressure in high-inflow zones',
    excerpt:
      'Why displacement pressure affects school continuity, staffing, and youth opportunity.',
    date: '2026-03-25',
    category: 'Education',
    content: `
Education systems in high-inflow zones face layered pressure.

Classroom access, teacher availability, language support, and infrastructure can all be affected when population pressure rises quickly. In this context, education policy must be treated as both a service-delivery issue and a long-term stability issue.

Priority questions include:
- Are schools accessible in high-pressure areas?
- Are teacher pipelines strong enough?
- Is youth training connected to local opportunity?
- Are school systems resilient under security stress?

A stronger education profile is one that links school access with implementation realism.
    `.trim(),
  },
]