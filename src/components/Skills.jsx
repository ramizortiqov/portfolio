import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="bg-panel px-6 py-20 sm:py-24">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-12">
        <h2 className="m-0 self-center border-2 border-ink px-7 py-3.5 text-[13px] font-bold tracking-[4px]">
          SKILLS
        </h2>

        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-5">
            <p className="m-0 text-xs font-bold tracking-[3px] text-ink">{group.label}</p>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(168px,1fr))] gap-3.5">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex h-[92px] flex-col items-center justify-center gap-2 border border-[#c2c2c2] bg-paper transition-colors hover:border-ink"
                >
                  <span className="text-[22px] font-extrabold tracking-[-1px] text-ink">
                    {item.mark}
                  </span>
                  <span className="px-2 text-center text-[10px] font-bold tracking-[1.8px] text-[#6b6b6b]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
