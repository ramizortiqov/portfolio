import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="bg-void px-6 py-20 sm:py-24">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-5">
        <h2 className="m-0 self-center border-2 border-paper px-7 py-3.5 text-[13px] font-bold tracking-[4px] text-paper">
          PORTFOLIO
        </h2>
        <p className="mx-auto mb-4 max-w-[560px] text-center text-[15px] leading-[1.8] text-[#9a9a9a]">
          A selection of web apps, Telegram bots, and mobile projects — pulled straight from my
          GitHub.
        </p>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
