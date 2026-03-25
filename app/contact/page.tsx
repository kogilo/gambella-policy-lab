'use client'

import { useState } from 'react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.error || 'Request failed')
      }

      setStatus('sent')
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <div className="site-shell min-h-screen">
      <SiteNav />

      <main className="max-w-3xl mx-auto px-5 sm:px-8 py-10">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">Contact</h1>
        <p className="text-sm text-slate-600 mb-8">
          Send feedback, corrections, collaboration ideas, or policy questions.
        </p>

        <form onSubmit={handleSubmit} className="panel-card p-6 sm:p-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
            <input
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
            <input
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
            <textarea
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm min-h-[180px]"
              placeholder="Write your message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-lg bg-green-800 px-5 py-3 text-sm font-semibold text-white hover:bg-green-900 disabled:opacity-70"
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>

          {status === 'sent' && (
            <p className="text-sm text-green-700">Your message was sent successfully.</p>
          )}

          {status === 'error' && (
            <p className="text-sm text-red-600">{errorMessage || 'Something went wrong.'}</p>
          )}
        </form>
      </main>

      <SiteFooter />
    </div>
  )
}