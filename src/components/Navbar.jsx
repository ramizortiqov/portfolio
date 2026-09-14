import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? 'bg-white/80 backdrop-blur border-b border-zinc-200 dark:bg-zinc-950/80 dark:border-zinc-800'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight text-zinc-900 dark:text-white">
          Ramiz Ortiqov
        </a>

        <ul className="hidden gap-8 text-sm font-medium sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-zinc-700 dark:text-zinc-300 sm:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-zinc-200 px-6 pb-4 text-sm font-medium sm:hidden dark:border-zinc-800">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-zinc-600 hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
