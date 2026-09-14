import { useState } from 'react'
import SocialLink from './SocialLink'
import { heroSocialOrder } from '../data/socials'
import portraitImg from '../assets/portrait.png'

const navLinks = [
  { href: '#about', label: 'About me' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Portfolio' },
]

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <section className="grid min-h-[640px] grid-cols-1 bg-panel sm:grid-cols-2">
      <div className="flex min-w-0 flex-col justify-between px-6 pb-14 pt-8 sm:px-10 sm:pb-14 sm:pr-16 sm:pt-8">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 -skew-x-[8deg] place-items-center border-[2.5px] border-ink text-[15px] font-extrabold tracking-[-0.5px]">
            RO
          </div>
        </div>

        <div className="pt-12">
          <p className="m-0 mb-2.5 text-[22px] font-bold text-ink">Hi, I am</p>
          <h1 className="text-wrap-balance m-0 text-[clamp(2.5rem,6vw,4.25rem)] font-extrabold leading-[1.02] tracking-[-1.5px]">
            Ramiz Ortiqov
          </h1>
          <p className="mt-2.5 text-[15px] font-semibold tracking-[0.2px] text-[#6b6b6b]">
            Software Engineer — Web, Mobile &amp; Telegram Bot Developer
          </p>
          <div className="mt-11 flex flex-wrap gap-3">
            {heroSocialOrder.map((id) => (
              <SocialLink key={id} id={id} size={42} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex min-w-0 flex-col bg-void [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] sm:-ml-[84px] sm:[clip-path:polygon(84px_0,100%_0,100%_100%,0_100%)]">
        <nav className="relative z-[2] flex flex-wrap items-center justify-end gap-[18px] px-5 pt-8 sm:pl-24">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold text-paper no-underline transition-colors hover:text-[#9a9a9a]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="whitespace-nowrap rounded-[22px] bg-paper px-5 py-[11px] text-[10px] font-bold tracking-[1.4px] text-ink no-underline transition-colors hover:bg-[#c9c9c9]"
          >
            CONTACT ME
          </a>
        </nav>

        <div className="flex flex-1 items-end justify-center pt-6 sm:pl-24">
          <div className="relative h-[400px] w-full max-w-[540px] overflow-hidden sm:h-[620px]">
            {!imgFailed && (
              <img
                src={portraitImg}
                alt="Ramiz Ortiqov"
                onError={() => setImgFailed(true)}
                className="absolute inset-0 h-full w-full object-contain object-bottom"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
