const steps = [
  {
    title: 'Primeiro contacto',
    desc: 'Falamos um bocadinho sobre o que estás a viver, o que gostarias de mudar e se este espaço pode fazer sentido para ti.',
  },
  {
    title: 'Sessão estratégica',
    desc: 'Nesta sessão estratégica de 20 minutos, por apenas 7 €, mostro-te de forma simples como a EFT pode ajudar no teu caso e respondo às tuas perguntas.',
    badge: true,
  },
  {
    title: 'Perceber se há alinhamento',
    desc: 'Percebemos, as duas, se há empatia e vontade de trabalharmos juntas — sem pressão para decidires logo.',
  },
  {
    title: 'E depois?',
    desc: 'Se sentires que faz sentido avançar, apresento-te a proposta de acompanhamento: sessões individuais ou um pacote de 4, 8 ou 10 sessões, de acordo com as tuas necessidades. Se decidires avançar, marcamos a primeira sessão completa e envio-te os detalhes práticos para começares.',
  },
] as const

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 bg-sun/15 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Cabeçalho */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <span className="eyebrow font-bold text-ink/70">COMO FUNCIONA</span>

            <h2 className="display mt-4 text-4xl leading-[1.05] tracking-[-.03em] text-ink sm:text-5xl lg:text-6xl">
              Um passo de cada vez.
            </h2>
          </div>

          <div className="min-w-0">
            <p className="max-w-md text-base leading-7 text-ink/75">
              Cada processo começa com uma conversa. Vamos perceber, com
              tranquilidade, qual poderá ser o próximo passo para ti.
            </p>

            <div className="mt-5 h-2 w-20 rounded-full bg-sun" />
          </div>
        </div>

        {/* Cards 2x2 */}
        <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex min-w-0 flex-col gap-4 rounded-3xl border border-ink/10 bg-cream/70 p-5 sm:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sun text-base font-bold text-ink">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <h3 className="display min-w-0 text-xl leading-tight text-ink [overflow-wrap:anywhere] sm:text-2xl lg:text-3xl">
                  {step.title}
                </h3>
              </div>

              <p className="text-sm leading-6 text-ink/75 [overflow-wrap:anywhere] sm:text-base sm:leading-7">
                {step.desc}
              </p>

              {'badge' in step && step.badge && (
                <div className="mt-auto inline-flex w-fit max-w-full flex-wrap items-center gap-2 rounded-full bg-sun/20 px-4 py-2 text-sm font-bold text-ink">
                  <span>20 minutos</span>
                  <span className="text-ink/40">·</span>
                  <span>7 €</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}