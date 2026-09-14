export default function TelegramIcon({ size = 19, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.6 3.4 2.9 10.6c-.9.35-.88 1.63.03 1.95l4.3 1.5 1.65 5.1c.26.8 1.3.96 1.8.29l2.3-3.1 4.4 3.25c.7.52 1.7.13 1.87-.72l3.1-14.1c.2-.9-.7-1.67-1.75-1.37Zm-3.1 3.3-8.2 7.3c-.2.18-.32.43-.34.7l-.2 2.5-1.1-3.4 9.84-7.1Z" />
    </svg>
  )
}
