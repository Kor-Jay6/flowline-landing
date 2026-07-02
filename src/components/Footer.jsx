export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-paper py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <a href="#top" className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight">
          <svg width="18" height="18" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="#14161F" />
            <path
              d="M6 20 C11 12, 15 12, 16 16 C17 20, 21 20, 26 12"
              stroke="#2DD4BF"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          Flowline
        </a>

        <p className="text-xs text-muted">© 2026 Flowline. All rights reserved.</p>

        <div className="flex gap-6 text-xs text-muted">
          <a href="#privacy" className="hover:text-ink">
            개인정보처리방침
          </a>
          <a href="#terms" className="hover:text-ink">
            이용약관
          </a>
          <a href="#contact" className="hover:text-ink">
            문의하기
          </a>
        </div>
      </div>
    </footer>
  )
}
