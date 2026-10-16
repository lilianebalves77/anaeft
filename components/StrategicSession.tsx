import { ArrowUpRight, Check, Clock3 } from 'lucide-react'

export default function StrategicSession() {
  const points = [
    'Falamos um bocadinho sobre o que estás a viver e o que gostarias de mudar.',
    'Mostro-te, de forma prática, como a EFT pode ajudar no teu caso.',
    'Percebemos se há empatia e vontade de trabalharmos juntas.',
    'Podes tirar todas as dúvidas que tiveres sobre as sessões.',
  ]

  return (
    <section className="px-5 pb-24 lg:px-10 lg:pb-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-sun px-7 py-10 sm:px-12 lg:grid lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:px-16 lg:py-14">
        <div>
          <span className="eyebrow text-ink/80">
            O primeiro passo pode ser leve
          </span>

          <h2 className="display mt-5 max-w-3xl text-5xl leading-[.9] tracking-[-.03em] sm:text-7xl">
            Sessão estratégica
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/75">
            Uma conversa online de 20 minutos, por apenas 7 €, sem compromisso,
            para veres se este acompanhamento pode ser bom para ti.
          </p>

          <ul className="mt-7 space-y-3 text-sm leading-6 text-ink/80">
            {points.map((point) => (
              <li key={point} className="flex gap-3">
                <Check size={18} className="mt-1 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 font-bold text-cream ring-4 ring-sun/30 transition hover:-translate-y-1"
          >
            Quero marcar a conversa <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="mt-12 flex gap-4 border-t border-ink/20 pt-5 lg:mt-0 lg:block lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Clock3 size={18} /> 20 minutos
          </div>

          <p className="mt-3 text-sm text-ink/75">
            7 € · Tudo online · Sem pressão
          </p>
        </div>
      </div>
    </section>
  )
}

