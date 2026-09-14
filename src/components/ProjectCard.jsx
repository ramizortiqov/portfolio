export default function ProjectCard({ project }) {
  return (
    <div className="flex min-w-0 flex-col gap-4 border border-[#333] bg-[#0a0a0a] p-7 transition-colors hover:border-paper">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="m-0 text-[19px] font-bold tracking-[-0.3px] text-paper">
          {project.title}
        </h3>
        <span className="text-[11px] font-bold tracking-[1.5px] text-[#6b6b6b]">
          {project.period}
        </span>
      </div>

      <p className="m-0 flex-1 text-sm leading-[1.75] text-[#a8a8a8]">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[14px] border border-[#3a3a3a] px-3 py-1.5 text-[10px] font-semibold tracking-[1.2px] text-[#c9c9c9]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-[22px] border-t border-[#262626] pt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-[10px] font-bold tracking-[2px] text-paper no-underline transition-colors hover:text-[#8a8a8a]"
        >
          CODE →
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] font-bold tracking-[2px] text-paper no-underline transition-colors hover:text-[#8a8a8a]"
          >
            LIVE →
          </a>
        )}
      </div>
    </div>
  )
}
