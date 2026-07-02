const steps = [
  {
    n: '01',
    title: '업무를 카드로 만들기',
    desc: '할 일, 담당자, 마감일을 카드 하나에 담습니다. 새로 배울 것 없이 3분이면 충분합니다.',
  },
  {
    n: '02',
    title: '흐름 위에 올리기',
    desc: '카드는 대기 → 진행 → 완료로 자연스럽게 흘러갑니다. 팀 전체가 같은 흐름을 봅니다.',
  },
  {
    n: '03',
    title: '자동으로 정리되기',
    desc: 'Flowline이 매주 진행 상황을 요약해 전달합니다. 따로 보고서를 쓸 필요가 없습니다.',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">작동 방식</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            시작은 3단계면 충분합니다
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <div key={step.n} className="relative">
              <span className="font-display text-5xl font-semibold text-paper/15">{step.n}</span>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="mt-8 hidden h-px w-full bg-gradient-to-r from-paper/15 to-transparent md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
