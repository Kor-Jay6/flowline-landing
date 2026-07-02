export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path className="flow-line" d="M-100 200 C 200 100, 400 300, 700 180 S 1100 280, 1300 150" stroke="#2DD4BF" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path className="flow-line-slow" d="M-100 400 C 250 320, 450 500, 750 380 S 1050 480, 1300 350" stroke="#7C6FF0" strokeWidth="1.5" fill="none" opacity="0.45" />
        <path className="flow-line-slower" d="M-100 600 C 200 520, 500 680, 800 560 S 1100 650, 1300 540" stroke="#E8B34C" strokeWidth="1.5" fill="none" opacity="0.35" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-3 py-1 text-xs font-medium text-paper/70">팀 협업 · 워크플로우</span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl">
            흩어진 업무를
            <br />
            하나의 흐름으로
            <span className="text-teal">.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/70 md:text-lg">메신저, 문서, 일정에 흩어져 있던 팀의 업무를 Flowline 하나로 잇습니다. 누가 무엇을 언제까지 하는지, 굳이 물어보지 않아도 보입니다.</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#cta" className="rounded-full bg-teal px-6 py-3 text-center text-sm font-semibold text-ink transition hover:brightness-95">무료로 시작하기</a>
            <a href="#workflow" className="rounded-full border border-paper/20 px-6 py-3 text-center text-sm font-semibold text-paper transition hover:border-paper/40">작동 방식 보기</a>
          </div>

          <p className="mt-6 text-xs text-paper/45">신용카드 없이 무료로 시작 · 언제든 해지 가능</p>
        </div>
      </div>
    </section>
  )
}
