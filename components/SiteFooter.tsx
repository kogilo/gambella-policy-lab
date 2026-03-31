import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <div className="text-lg font-bold text-green-800">
              Gambella Policy Lab
            </div>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              A civic platform for governance analysis, public policy, and regional development insight
              focused on Gambella, Ethiopia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-sm font-semibold text-slate-800 mb-3">
              Explore
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/#profiles" className="text-slate-600 hover:text-slate-900 transition">
                Profiles
              </Link>
              <Link href="/#scorecard" className="text-slate-600 hover:text-slate-900 transition">
                Scorecard
              </Link>
              <Link href="/comparateur" className="text-slate-600 hover:text-slate-900 transition">
                Comparator
              </Link>
              <Link href="/analysis" className="text-slate-600 hover:text-slate-900 transition">
                Analysis
              </Link>
              <Link href="/methodologie" className="text-slate-600 hover:text-slate-900 transition">
                Methodology
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition">
                Contact
              </Link>
              <Link href="/faq" className="text-slate-600 hover:text-slate-900 transition">
                FAQ
              </Link>
              <Link href="/a-propos" className="text-slate-600 hover:text-slate-900 transition">
                About
              </Link>
            </div>
          </div>

          {/* About / Contact */}
          <div>
            <div className="text-sm font-semibold text-slate-800 mb-3">
              About
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              This is an independent civic initiative providing structured analysis of governance,
              policy priorities, and public-service delivery using publicly available information.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Created by <span className="font-medium text-slate-700">Abella Othow</span>
            </p>

            {/* Contact Email */}
            <a
              href="mailto:getabullaothow@gmail.com"
              className="mt-3 block text-sm text-green-800 hover:underline"
            >
              getabullaothow@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-slate-500">
          <div>
            © 2026 Gambella Policy Lab
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/abulla-othuw/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/AbelOthow"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}