 
import { ArrowUpRight } from 'lucide-react'

export function AboutAna() {
  return (
    <section
      id="sobre"
      className="px-5 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="absolute -left-3 -top-3 h-20 w-20 rounded-full bg-sun/70 sm:-left-6 sm:-top-6" />

          <div className="relative overflow-hidden rounded-[2rem] rounded-tr-[5rem] bg-honey shadow-lift">
            <img
  src="/ana-margarida-nova.png"
  alt="Ana Margarida, terapeuta EFT, num momento de proximidade e escuta"
  className="aspect-[3/4] h-full w-full object-cover object-center"
/>
            
          </div>
        </div>

        <div>
          <span className="eyebrow text-ink/50">
            Quem é a Ana Margarida
          </span>

          <h2 className="display mt-5 max-w-3xl text-5xl leading-[.95] tracking-[-.03em] sm:text-7xl">
            Olá, eu sou a Ana Margarida
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-ink/75">
            Trabalho sobretudo com pessoas — muitas são mulheres, embora não
            exclusivamente — que sentem que andam a carregar um peso emocional
            demasiado grande, seja por ansiedade, stress acumulado, bloqueios ou
            padrões que se repetem.
          </p>

          <div className="mt-10 grid gap-5 border-t border-ink/15 pt-6 sm:grid-cols-2">
            <p className="text-base leading-7 text-ink/75">
              O meu trabalho junta acolhimento profundo e técnicas práticas.
              Não fico só a ouvir-te nem te encho de teorias: uso a EFT como uma
              ferramenta ativa para trabalhares a carga emocional que sentes no
              corpo. Algumas pessoas descrevem uma sensação de mais tranquilidade
              ou alívio durante a sessão, mas cada pessoa reage de forma diferente.
            </p>

            <p className="text-sm leading-7 text-ink/75">
              E, aos poucos, ensino-te a explorar a técnica também no teu dia a
              dia. Assim, podes levar contigo uma ferramenta prática para
              continuares a lidar com o que sentes fora das sessões, com mais
              autonomia.
            </p>
          </div>

          <p className="mt-6 text-sm leading-7 text-ink/75">
            O acompanhamento é feito online, num espaço tranquilo e só teu.
          </p>

          <a
            href="#contacto"
            className="mt-9 inline-flex items-center gap-2 font-bold underline decoration-sun decoration-2 underline-offset-4"
          >
            Vamos falar? <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}

