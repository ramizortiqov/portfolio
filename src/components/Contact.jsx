import { useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import GithubIcon from './icons/GithubIcon'

const EMAIL = 'ramizortiqov07@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — ignore, the mailto link still works
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-3xl border border-zinc-200 bg-white px-8 py-14 text-center dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
          Contact
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Let's build something together
        </p>
        <p className="mx-auto mt-3 max-w-md text-zinc-600 dark:text-zinc-400">
          Have a project in mind — a website, a Telegram bot, or a mobile app? I'd love to hear
          about it.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
          >
            <Mail size={16} />
            {EMAIL}
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-violet-500 hover:text-violet-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-violet-400 dark:hover:text-violet-400"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <a
            href="https://github.com/ramizortiqov"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-violet-500 hover:text-violet-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-violet-400 dark:hover:text-violet-400"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
