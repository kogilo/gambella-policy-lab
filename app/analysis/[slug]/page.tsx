import { notFound } from 'next/navigation'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { analysisPosts } from '@/lib/analysisPosts'

export function generateStaticParams() {
  return analysisPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function AnalysisArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = analysisPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="site-shell min-h-screen">
      <SiteNav />

      <main className="max-w-3xl mx-auto px-5 sm:px-8 py-10">
        <div className="text-xs text-slate-500">
          {post.category} · {post.date}
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold mt-2">
          {post.title}
        </h1>

        <p className="text-base text-slate-600 mt-6 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
      </main>

      <SiteFooter />
    </div>
  )
}