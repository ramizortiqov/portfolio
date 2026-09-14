export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
        © {new Date().getFullYear()} Ramiz Ortiqov. Built with React, Vite &amp; Tailwind CSS.
      </p>
    </footer>
  )
}
