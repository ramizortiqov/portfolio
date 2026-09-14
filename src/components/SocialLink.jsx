import { socials } from '../data/socials'

export default function SocialLink({ id, size = 42, ring = false }) {
  const social = socials[id]
  const Icon = social.icon
  const dim = `${size}px`

  return (
    <a
      href={social.href}
      target={social.external ? '_blank' : undefined}
      rel={social.external ? 'noreferrer' : undefined}
      aria-label={social.label}
      style={{ width: dim, height: dim }}
      className={`grid place-items-center rounded-full bg-ink text-paper no-underline transition-colors hover:bg-paper hover:text-ink ${
        ring ? 'hover:shadow-[inset_0_0_0_2px_#111111]' : ''
      }`}
    >
      <Icon size={Math.round(size * 0.42)} />
    </a>
  )
}
