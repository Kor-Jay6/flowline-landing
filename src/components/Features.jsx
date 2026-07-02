const features = [
  {
    title: '한 눈에 보이는 업무 흐름',
    desc: '카드마다 담당자, 마감일, 상태가 붙어 있어 굳이 회의를 열지 않아도 진행 상황이 보입니다.',
    accent: 'bg-teal',
  },
  {
    title: '끊기지 않는 대화',
    desc: '업무 카드 안에서 바로 나눈 대화가 그대로 기록으로 남아, 나중에 찾아 헤맬 일이 없습니다.',
    accent: 'bg-violet',
  },
  {
    title: '자동으로 정리되는 리포트',
    desc: '이번 주 무엇이 끝났고 무엇이 밀렸는지, Flowline이 매주 월요일 아침에 정리해 드립니다.',
    accent: 'bg-gold',
  },
  {
    title: '가벼운 연동',
    desc: '이미 쓰고 있는 캘린더와 메신저에 자연스럽게 이어 붙습니다. 도구를 바꾸는 게 아니라 이어주는 겁니다.',
    accent: 'bg-teal',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">기능</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            팀이 흩어지지 않도록
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            도구가 많아질수록 팀은 흩어집니다. Flowline은 꼭 필요한 것만 남기고 나머지는 잇습니다.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="bg-paper p-8 transition hover:bg-white">
              <span className={`inline-block h-2 w-2 rounded-full ${f.accent}`} aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
