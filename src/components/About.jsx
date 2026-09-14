export default function About() {
  return (
    <section id="about" className="bg-paper px-6 py-20 sm:py-24">
      <div className="mx-auto flex max-w-[820px] flex-col items-center gap-8">
        <h2 className="m-0 border-2 border-ink px-7 py-3.5 text-[13px] font-bold tracking-[4px]">
          ABOUT ME
        </h2>
        <p className="text-wrap-pretty m-0 text-center text-base leading-[1.85] text-[#4a4a4a]">
          I started coding in school and went through Ilmhona's front-end course, where I picked
          up HTML, CSS, JavaScript, React, Bootstrap, WordPress and Git. I'm now a Software
          Engineering student at University, where I've expanded into
          databases, C++, Python, Android development, and full web deployment. Today I build
          landing pages, e-commerce sites, multi-page web apps, Telegram bots &amp; mini apps, and
          mobile apps.
        </p>
        <a
          href="#projects"
          className="border-2 border-ink px-9 py-4 text-[11px] font-bold tracking-[3px] text-ink no-underline transition-colors hover:bg-ink hover:text-paper"
        >
          VIEW PROJECTS
        </a>
      </div>
    </section>
  )
}
