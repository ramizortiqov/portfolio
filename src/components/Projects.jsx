import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
        Projects
      </h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Things I've built
      </p>
      <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
        A selection of web apps, Telegram bots, and mobile projects — pulled straight from my
        GitHub.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
