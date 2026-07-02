const companies = ['NORTHWIND', 'ATLAS LABS', 'HAVEN', '000 STUDIO', 'PRISM', 'GREENFIELD']

export default function LogoStrip() {
  return (
    <section className="border-b border-ink/5 bg-paper py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
          이런 팀들이 Flowline과 함께 일합니다
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((name) => (
            <span key={name} className="font-display text-sm font-semibold tracking-wide text-ink/30">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
