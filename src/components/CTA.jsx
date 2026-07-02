export default function CTA() {
  return (
    <section id="cta" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">오늘부터, 팀의 흐름을 이어보세요</h2>
        <p className="mx-auto mt-4 max-w-md text-base text-muted">설정은 5분, 습관이 되는 데는 하루면 충분합니다.</p>

        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email" className="sr-only">업무용 이메일</label>
          <input id="email" type="email" required placeholder="업무용 이메일 주소" className="w-full rounded-full border border-ink/15 bg-white px-5 py-3 text-sm outline-none placeholder:text-muted focus:border-teal" />
          <button type="submit" className="whitespace-nowrap rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink/85">무료로 시작하기</button>
        </form>
        <p className="mt-4 text-xs text-muted">신용카드 없이 무료로 시작 · 언제든 해지 가능</p>
      </div>
    </section>
  )
}
