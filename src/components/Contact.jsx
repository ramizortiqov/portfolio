import SocialLink from './SocialLink'
import { contactSocialOrder } from '../data/socials'

export default function Contact() {
  return (
    <section id="contact" className="bg-paper px-6 py-24 sm:py-28">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-7">
        <h2 className="m-0 border-2 border-ink px-7 py-3.5 text-[13px] font-bold tracking-[4px]">
          CONTACT
        </h2>
        <p className="m-0 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-1px]">
          Let's build something together
        </p>
        <p className="m-0 max-w-[460px] text-center text-base leading-[1.8] text-[#4a4a4a]">
          Have a project in mind — a website, a Telegram bot, or a mobile app? I'd love to hear
          about it.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          {contactSocialOrder.map((id) => (
            <SocialLink key={id} id={id} size={52} ring />
          ))}
        </div>
      </div>
    </section>
  )
}
