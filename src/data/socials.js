import MailIcon from '../components/icons/MailIcon'
import GithubIcon from '../components/icons/GithubIcon'
import TelegramIcon from '../components/icons/TelegramIcon'
import WhatsappIcon from '../components/icons/WhatsappIcon'
import InstagramIcon from '../components/icons/InstagramIcon'

export const socials = {
  email: {
    label: 'Email',
    href: 'mailto:ramizortiqov07@gmail.com',
    icon: MailIcon,
    external: false,
  },
  github: {
    label: 'GitHub',
    href: 'https://github.com/ramizortiqov',
    icon: GithubIcon,
    external: true,
  },
  telegram: {
    label: 'Telegram',
    href: 'https://t.me/ramizortiqov',
    icon: TelegramIcon,
    external: true,
  },
  whatsapp: {
    label: 'WhatsApp',
    href: 'https://wa.me/79990009446',
    icon: WhatsappIcon,
    external: true,
  },
  instagram: {
    label: 'Instagram',
    href: 'https://www.instagram.com/ramiz.uo',
    icon: InstagramIcon,
    external: true,
  },
}

export const heroSocialOrder = ['email', 'github', 'telegram', 'whatsapp', 'instagram']
export const contactSocialOrder = ['email', 'telegram', 'whatsapp', 'instagram', 'github']
