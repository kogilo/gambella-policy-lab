import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Gambella Policy Lab',
  description:
    'Learn about the purpose, methodology, and vision behind Gambella Policy Lab.',
}

export default function AboutPage() {
  return (
    <div className="site-shell min-h-screen">
      <SiteNav />

      {/* Header */}
      <header className="border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
          <span className="kicker mb-3">About</span>
          <h1 className="text-3xl sm:text-5xl font-bold text-ink mt-1">
            Who is behind this project?
          </h1>
          <p className="text-base sm:text-lg text-ink-3 mt-4 max-w-3xl leading-relaxed">
            An independent, civic-driven initiative focused on governance analysis,
            policy transparency, and informed public understanding in Gambella.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-8 sm:py-12">

        {/* Profile */}
        <section className="panel-card p-6 sm:p-8 mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-ink flex items-center justify-center shrink-0">
              <span className="text-2xl sm:text-3xl font-bold text-white">AO</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink">Abella Othow</h2>
              <p className="text-sm text-ink-3 mt-2 max-w-xl">
                Founder of Gambella Policy Lab. Background in international relations,
                public service, and data-driven analysis, with a focus on governance,
                development, and civic engagement.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-3">
                <a
                  href="mailto:getabullaothow@gmail.com"
                  className="text-sm text-ink-3 hover:text-ink transition"
                >
                  getabullaothow@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="panel-card p-6 sm:p-8 mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4">
            The Approach
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-ink-2 leading-relaxed">
            <p>
              Governance and public policy in Gambella require structured analysis.
              Different institutions and initiatives often present proposals with
              varying levels of detail, clarity, and feasibility.
            </p>

            <p>
              This platform was created from a simple idea:
              <strong> people deserve clear, structured, and transparent analysis.</strong>
            </p>

            <p>
              Each profile is evaluated using the same framework — focusing on
              coherence, institutional strength, resilience, practicality, and
              level of detail.
            </p>

            <p>
              <strong>This platform does not promote any political agenda.</strong>{' '}
              It provides tools to understand, compare, and critically assess
              governance approaches using publicly available information.
            </p>
          </div>
        </section>

        {/* Why */}
        <section className="panel-card p-6 sm:p-8 mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4">
            Why this project?
          </h2>

          <div className="space-y-3">
            {[
              {
                title: 'Transparency',
                detail:
                  'Public policy should be understandable. This platform makes analysis structured, visible, and verifiable.',
              },
              {
                title: 'Fairness',
                detail:
                  'Every profile is evaluated using the same criteria — no bias, no selective interpretation.',
              },
              {
                title: 'Accessibility',
                detail:
                  'Policy documents are often long and complex. This platform simplifies and highlights key insights.',
              },
              {
                title: 'Independence',
                detail:
                  'This project is not affiliated with any political organization or institution.',
              },
            ].map((item) => (
              <div key={item.title} className="playful-dash p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-semibold text-ink mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-3 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Not */}
        <section className="panel-card p-6 sm:p-8 mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4">
            What this project is NOT
          </h2>

          <div className="space-y-2.5">
            {[
              'A political endorsement platform',
              'A tool supporting any political group or institution',
              'A commercial service',
              'A popularity or opinion poll',
              'A replacement for democratic debate',
            ].map((item, i) => (
              <div key={i} className="playful-dash p-3.5 flex items-start gap-3">
                <span className="text-score-fragile font-bold mt-0.5">×</span>
                <p className="text-xs sm:text-sm text-ink-3">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="panel-card p-6 sm:p-8 mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4">
            Contact
          </h2>

          <p className="text-sm text-ink-3 leading-relaxed mb-5">
            For questions, feedback, or collaboration opportunities, feel free to reach out.
          </p>

          <div className="flex gap-4">
            <a
              href="mailto:getabullaothow@gmail.com"
              className="text-sm text-accent hover:underline"
            >
              getabullaothow@gmail.com
            </a>
          </div>
        </section>

        {/* Closing */}
        <section className="panel-card p-5 sm:p-7">
          <h2 className="text-lg sm:text-xl font-bold text-ink mb-3">
            Final note
          </h2>

          <p className="text-sm text-ink-3 leading-relaxed">
            Better decisions come from better understanding. This platform is built
            to support informed thinking, constructive dialogue, and responsible
            engagement with public policy.
          </p>
        </section>

        <SiteFooter />
      </main>
    </div>
  )
}