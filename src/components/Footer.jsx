export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3.5 bg-void px-6 py-8 sm:px-10">
      <span className="text-[11px] font-bold tracking-[2px] text-[#6b6b6b]">
        © {new Date().getFullYear()} RAMIZ ORTIQOV
      </span>
      <a
        href="#top"
        className="text-[11px] font-bold tracking-[2px] text-paper no-underline transition-colors hover:text-[#8a8a8a]"
      >
        BACK TO TOP ↑
      </a>
    </footer>
  )
}
