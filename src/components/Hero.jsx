import { ArrowRight, Mail } from 'lucide-react'
import GithubIcon from './icons/GithubIcon'

export default function Hero() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-600 dark:text-violet-400">
        Hello, I'm
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">
        Ramiz Ortiqov
      </h1>
      <p className="mt-4 text-xl font-medium text-zinc-600 sm:text-2xl dark:text-zinc-400">
        Software Engineer — Web, Mobile &amp; Telegram Bot Developer
      </p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        I started coding in school and went through Ilmhona's front-end course, where I picked up
        HTML, CSS, JavaScript, React, Bootstrap, WordPress and Git. I'm now a Software Engineering
        student at Moscow Polytechnic University, where I've expanded into databases, C++, Python,
        Android development, and full web deployment. Today I build landing pages, e-commerce
        sites, multi-page web apps, Telegram bots &amp; mini apps, and mobile apps.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
        >
          View Projects
          <ArrowRight size={16} />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:border-violet-500 hover:text-violet-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-violet-400 dark:hover:text-violet-400"
        >
          <Mail size={16} />
          Contact Me
        </a>
        <a
          href="https://github.com/ramizortiqov"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-semibold text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
        >
          <GithubIcon size={18} />
          GitHub
        </a>
      </div>
    </section>
  )
}
