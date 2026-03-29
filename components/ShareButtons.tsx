'use client'

interface ShareButtonsProps {
  candidateName: string
  score: number
  slug: string
}

export default function ShareButtons({ candidateName, score, slug }: ShareButtonsProps) {
  const baseUrl =
    typeof window !== 'undefined' ? window.location.origin : 'https://gambella-policy-lab.vercel.app'

  const url = `${baseUrl}/candidats/${slug}`
  const text = `${candidateName}: ${score}/10 based on the platform's policy analysis`

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      // fail silently
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 hidden text-[11px] text-slate-400 sm:inline">Share</span>

      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-900"
        title="Share on X"
        aria-label="Share on X"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-900"
        title="Share on LinkedIn"
        aria-label="Share on LinkedIn"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>

      <button
        onClick={copyLink}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-900"
        title="Copy link"
        aria-label="Copy link"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      </button>
    </div>
  )
}