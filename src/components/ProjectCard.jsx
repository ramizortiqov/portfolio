import { ExternalLink } from 'lucide-react'
import GithubIcon from './icons/GithubIcon'

export default function ProjectCard({ project }) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-xl hover:shadow-violet-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-500/60">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{project.title}</h3>
        <span className="shrink-0 text-xs font-medium text-zinc-400 dark:text-zinc-500">
          {project.period}
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-4 border-t border-zinc-100 pt-4 text-sm font-medium dark:border-zinc-800">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
        >
          <GithubIcon size={16} />
          Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
          >
            <ExternalLink size={16} />
            Live
          </a>
        )}
      </div>
    </div>
  )
}
