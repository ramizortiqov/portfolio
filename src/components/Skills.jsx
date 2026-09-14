import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="bg-zinc-50 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
          Skills
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          What I work with
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-5 font-semibold text-zinc-900 dark:text-white">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-zinc-700 dark:text-zinc-300">
                        {skill.name}
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-800">
                      <div
                        className="h-1.5 rounded-full bg-violet-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
