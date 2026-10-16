const testimonials = [
  {
    quote:
      'Aos poucos fui libertando as dores do passado e outras mais recentes, hoje sinto-me mais feliz, mais liberta dos fantasmas, mais segura e a gostar mais de mim.',
    context: 'Testemunho partilhado a 2 de junho de 2025',
  },
  {
    quote:
      'Obrigada por me guiares de uma forma tão acolhedora e tranquila. Depois destas 3 sessões sinto-me muito melhor e um grande alívio.',
    context: 'Testemunho partilhado a 5 de fevereiro',
  },
  {
    quote:
      'Contigo estou a renascer, obrigada por este teu trabalho tão profundo, pela tua entrega, pela tua sensibilidade para acolheres sem me julgares.',
    context: 'Testemunho partilhado a 11 de abril',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testemunhos"
      className="flex scroll-mt-20 items-center border-t border-[#E8C00E]/50 bg-white px-5 py-16 sm:px-6 sm:py-20 lg:min-h-[calc(100svh-5rem)] lg:scroll-mt-24 lg:px-10 lg:py-24"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="eyebrow font-bold text-[#3E2723]">
          Testemunhos
        </p>

        <h2
          id="testimonials-title"
          className="display mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.03em] text-[#3E2723] sm:text-5xl"
        >
          Cada percurso é único. Cada experiência também.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[#3E2723]/80 sm:text-lg sm:leading-8">
          As experiências partilhadas ajudam-te a conhecer diferentes formas
          de viver o acompanhamento com EFT.
        </p>

        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.context}
              className="flex h-full flex-col rounded-3xl border border-[#D4A900] bg-[#E8C00E] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
            >
              <span
                aria-hidden="true"
                className="display text-5xl leading-none text-[#3E2723]/70"
              >
                “
              </span>

              <blockquote className="mt-3 flex-1 text-base font-medium leading-7 text-[#3E2723]">
                {testimonial.quote}
              </blockquote>

              <div className="mt-6 border-t border-[#3E2723]/25 pt-4">
                <p className="text-sm font-semibold leading-6 text-[#3E2723]">
                  {testimonial.context}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
