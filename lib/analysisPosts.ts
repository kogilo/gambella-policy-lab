export interface AnalysisPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  framework?: string
  featured?: boolean
  readingTime?: string
  content: string
}

export const analysisPosts: AnalysisPost[] = [
  {
    slug: 'institutional-failure-and-displacement-in-gambella',
    title: 'Institutional failure and displacement in Gambella',
    excerpt:
      'How weak institutions, not just population pressure, can lead to the displacement of local communities.',
    date: '2026-03-25',
    category: 'Governance',
    framework: 'Institutional Economics',
    featured: true,
    readingTime: '4 min read',
    content: `
The challenge in Gambella is often described in terms of refugee inflow and demographic pressure. However, this explanation is incomplete.

A more accurate understanding requires looking at institutions.

According to the framework developed in "Why Nations Fail", long-term stability depends on the strength of inclusive institutions — systems that enforce rules fairly, protect local populations, and manage resources transparently.

Where institutions are weak, even manageable pressures can turn into serious crises.

In Gambella, the displacement of local residents is not only a result of refugee inflow. It reflects gaps in institutional coordination, land management, and security governance.

Key institutional challenges include:

- Weak coordination between regional authorities and camp management structures
- Limited protection mechanisms for host communities
- Inconsistent land-use governance under demographic pressure
- Insufficient integration of security, humanitarian, and administrative systems

When institutions are not strong enough to manage competing pressures, outcomes can become uneven.

In such environments, local populations may feel excluded from decision-making processes, and resource allocation may appear imbalanced. Over time, this can contribute to displacement, tension, and loss of trust in governance structures.

This aligns with a central idea in "Why Nations Fail":
it is not simply the presence of pressure that determines outcomes, but the strength of institutions that manage that pressure.

For Gambella, the policy question is not only how to respond to refugee inflow, but how to strengthen institutional capacity so that both host communities and displaced populations are managed fairly, safely, and sustainably.

A stronger institutional framework would include:

- Clear land governance and protection mechanisms for local communities
- Better coordination between regional authorities and humanitarian actors
- Integrated security planning linked to population dynamics
- Transparent data systems for monitoring population changes and service delivery

Without these elements, demographic pressure can translate into instability. With them, the same pressure can be managed in a way that preserves stability and supports development.

The long-term solution, therefore, lies not only in managing population numbers, but in strengthening institutions.
    `.trim(),
  },
  {
    slug: 'security-and-displacement-in-gambella',
    title: 'Security and displacement in Gambella',
    excerpt:
      'How refugee inflow, camp management, and local governance intersect in Gambella.',
    date: '2026-03-25',
    category: 'Security',
    framework: 'Governance Analysis',
    featured: false,
    readingTime: '3 min read',
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
    framework: 'Public Service Delivery',
    featured: false,
    readingTime: '3 min read',
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