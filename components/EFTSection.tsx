import { Sparkles, CircleDot, HandHeart } from 'lucide-react'

const pillars = [
  [
    'Ouvir-te com calma',
    'Começamos por perceber o que se passa contigo, sem pressas.',
    HandHeart,
  ],
  [
    'Trabalhar a carga emocional',
    'A EFT pode ajudar-te a explorar o que sentes no corpo, ao teu ritmo.',
    CircleDot,
  ],
  [
    'Levar contigo',
    'Aprendes a usar a técnica também no teu dia a dia.',
    Sparkles,
  ],
] as const

export default function EFTSection() {
  return (
    <section
      id="eft"
      className="flex scroll-mt-20 items-center border-t-4 border-sun/80 bg-honey/10 px-4 py-16 sm:px-5 sm:py-20 lg:min-h-[calc(100svh-5rem)] lg:scroll-mt-24 lg:px-10 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="eyebrow text-ink/80">
              EFT · Emotional Freedom Techniques
            </span>

            <h2 className="display mt-4 text-5xl leading-[.95] tracking-[-.03em] sm:mt-5 sm:text-6xl">
              Uma forma gentil de te aproximares do que sentes.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-ink/75">
              Se tivesse de te explicar a EFT de forma simples, diria que é
              uma espécie de “acupuntura sem agulhas”. Focamo-nos no problema
              emocional ou na memória que te está a perturbar e, ao mesmo
              tempo, fazemos leves batimentos com a ponta dos dedos em pontos
              específicos do corpo. É o chamado tapping.
            </p>

            <p className="mt-5 text-base leading-7 text-ink/75 sm:mt-6">
              Esta combinação pode ajudar a diminuir, em algumas pessoas, a
              carga emocional associada a um pensamento ou memória, permitindo
              olhar para a situação com mais clareza e leveza. Cada pessoa
              reage de forma diferente. A EFT pode ser uma ferramenta
              complementar e não substitui cuidados médicos ou psicológicos
              quando são necessários.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-14 sm:gap-4 md:grid-cols-3">
          {pillars.map(([title, desc, Icon]) => (
            <div
              key={title}
              className="flex min-h-[190px] flex-col rounded-3xl bg-cream p-5 sm:min-h-[220px] sm:p-6"
            >
              <Icon size={23} className="shrink-0 text-sun" />

              <h3 className="display mt-6 text-2xl sm:mt-8">{title}</h3>

              <p className="mt-2 text-base leading-7 text-ink/75">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
