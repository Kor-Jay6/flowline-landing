import { useState } from 'react'

const links = [
  { label: '기능', href: '#features' },
  { label: '작동 방식', href: '#workflow' },
  { label: '요금제', href: '#pricing' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <svg width="22" height="22" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="#14161F" />
            <path d="M6 20 C11 12, 15 12, 16 16 C17 20, 21 20, 26 12" stroke="#2DD4BF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
          Flowline
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-ink/70 transition hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#login" className="text-sm font-medium text-ink/70 hover:text-ink">로그인</a>
          <a href="#cta" className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:bg-ink/85">무료로 시작하기</a>
        </div>

        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="메뉴 열기" aria-expanded={open}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2 5H16M2 9H16M2 13H16" stroke="#14161F" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-paper px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-ink/70" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#login" className="text-sm font-medium text-ink/70">로그인</a>
            <a href="#cta" className="rounded-full bg-ink px-4 py-2 text-center text-sm font-semibold text-paper" onClick={() => setOpen(false)}>무료로 시작하기</a>
          </nav>
        </div>
      )}
    </header>
  )
}
