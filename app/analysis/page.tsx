'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import RefugeeTrendChart from '@/components/RefugeeTrendChart'
import RefugeeMindMap from '@/components/RefugeeMindMap'
import ZoneBreakdownChart from '@/components/ZoneBreakdownChart'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { analysisPosts } from '@/lib/analysisPosts'
import { refugeeData as fallbackRefugeeData } from '@/lib/refugeeData'
import GambellaTimeline from '@/components/GambellaTimeline'

export default function AnalysisPage() {
  const trendData = fallbackRefugeeData
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(analysisPosts.map((post) => post.category)))
    return ['All', ...uniqueCategories]
  }, [])

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return analysisPosts
    return analysisPosts.filter((post) => post.category === activeCategory)
  }, [activeCategory])

  const featuredPost =
    activeCategory === 'All'
      ? filteredPosts.find((post) => post.featured)
      : undefined

  const regularPosts = featuredPost
    ? filteredPosts.filter((post) => post.slug !== featuredPost.slug)
    : filteredPosts

  return (
    <div className="site-shell min-h-screen">
      <SiteNav />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6">
          Gambella Refugee & Population Dynamics
        </h1>

        <p className="text-sm text-slate-600 mb-10">
          This section provides a data-driven overview of refugee inflow and local population
          trends over time, along with key structural impacts on governance and society.
        </p>

        <section className="space-y-10 mb-12">
          <RefugeeTrendChart data={trendData} />
          <RefugeeMindMap />
          <p className="text-xs text-slate-500">
            Note: Data may include modeled values when live source data is incomplete or unavailable.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Zone-level breakdown
          </h2>

          <p className="text-sm text-slate-600 mb-6">
            Zone-based view of refugee concentration and resident population over time across
            Anywaa, Nuer, and Mejang zones.
          </p>

          <ZoneBreakdownChart />
          <GambellaTimeline />

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm text-slate-500">Anywaa Zone</div>
              <div className="mt-2 text-sm text-slate-700">
                Primary refugee concentration zone
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm text-slate-500">Nuer Zone</div>
              <div className="mt-2 text-sm text-slate-700">
                Resident population with minimal refugee presence
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm text-slate-500">Mejang Zone</div>
              <div className="mt-2 text-sm text-slate-700">
                Smaller population zone with limited refugee impact
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
            <h2 className="text-xl sm:text-2xl font-bold">Analysis Articles</h2>
            <span className="text-xs text-slate-500">
              Governance · Security · Public Services
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                  activeCategory === category
                    ? 'bg-green-800 text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {featuredPost && (
            <Link
              href={`/analysis/${featuredPost.slug}`}
              className="block rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm hover:shadow-md transition mb-6"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="rounded-full bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-800">
                  Featured
                </span>
                <span className="text-xs text-slate-500">
                  {featuredPost.category} · {featuredPost.date}
                </span>
                {featuredPost.readingTime && (
                  <span className="text-xs text-slate-500">
                    · {featuredPost.readingTime}
                  </span>
                )}
              </div>

              {featuredPost.framework && (
                <span className="text-xs text-green-700 font-semibold">
                  {featuredPost.framework}
                </span>
              )}

              <h3 className="text-2xl font-bold mt-2">{featuredPost.title}</h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {featuredPost.excerpt}
              </p>
            </Link>
          )}

          <div className="grid gap-4">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/analysis/${post.slug}`}
                className="panel-card block p-5 transition hover:shadow-md"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span>{post.category}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  {post.readingTime && (
                    <>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </>
                  )}
                </div>

                {post.framework && (
                  <div className="mt-2">
                    <span className="text-xs text-green-700 font-semibold">
                      {post.framework}
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-bold mt-2">{post.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}