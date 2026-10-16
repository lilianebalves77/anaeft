import { Heart, Cloud, Waves, Sparkles } from 'lucide-react'

const items = [
  [
    'Ansiedade e stress',
    'Aquela sensação de aperto no peito, a cabeça sempre a mil ou um cansaço que não passa.',
    Cloud,
  ],
  [
    'Medos e fobias',
    'Medos concretos ou inseguranças que te travam, mesmo quando querias avançar.',
    Waves,
  ],
  [
    'Luto e dor emocional',
    'Uma perda, uma rejeição ou uma mudança que ainda custa a digerir.',
    Heart,
  ],
  [
    'Autoestima e merecimento',
    'Dúvidas constantes, dificuldade em pôr limites ou a sensação de nunca seres suficiente.',
    Sparkles,
  ],
] as const

export function Recognition() {
  return (
    <section
      id="reconhecimento"
      className="border-t-8 border-sun bg-sun/10 px-4 py-16 sm:px-5 sm:py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow text-ink/80">
            Talvez te reconheças nisto
          </span>

          <h2 className="display mt-4 text-5xl leading-[.95] tracking-[-.03em] sm:mt-5 sm:text-6xl">
            Andas cansada de carregar tudo sozinha?
          </h2>

          <p className="mt-5 text-lg leading-8 text-ink/80 sm:mt-6">
            Pode ser difícil explicar o que se passa. Às vezes, começa só com
            a sensação de que já não queres continuar a sentir tudo da mesma
            maneira — seja por ansiedade, stress acumulado, bloqueios ou
            padrões que se repetem e não te deixam avançar.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {items.map(([title, desc, Icon]) => (
            <article
              key={title}
              className="flex min-h-[220px] flex-col rounded-3xl border border-ink/15 bg-sun p-5 text-ink shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-sun/90 hover:shadow-soft sm:min-h-[240px] sm:p-6"
            >
              <Icon
                size={24}
                strokeWidth={1.7}
                className="shrink-0 text-ink"
              />

              <h3 className="display mt-10 text-2xl leading-tight sm:mt-12">
                {title}
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-ink/80">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Transformation() {
  return (
    <section className="overflow-hidden px-4 py-16 sm:px-5 sm:py-20 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-end gap-10 sm:gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <span className="eyebrow text-ink/50">Um novo espaço interior</span>
          <div className="mt-7 h-40 w-40 rounded-full bg-sun sm:mt-8 sm:h-56 sm:w-56" />
        </div>

        <div>
          <h2 className="display text-5xl leading-[.95] tracking-[-.03em] sm:text-7xl">
            E se o que sentes não tivesse de pesar assim para sempre?
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/80 sm:mt-8">
            Talvez exista outra maneira de olhar para o que estás a sentir,
            perceber o que está por trás disso e começares a estar contigo de
            outra forma.
          </p>

          <p className="display mt-6 text-3xl text-ink sm:mt-7">
            Podes aprender a lidar com o que sentes de uma maneira diferente.
          </p>
        </div>
      </div>
    </section>
  )
}