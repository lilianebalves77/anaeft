 'use client'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const hero = '/ana-margarida-hero.jpg'

export default function Hero() {
  const [image, setImage] = useState(hero)

  return (
    <section
      id="inicio"
      className="grain relative overflow-hidden bg-sun/10 pt-20 sm:pt-24"
    >
      <div className="absolute -left-36 -top-20 h-96 w-96 rounded-full bg-sun/30 blur-3xl" />
      <div className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-honey/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:gap-14 sm:px-5 sm:pb-20 sm:pt-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-10 lg:px-10 lg:pb-24 lg:pt-16 xl:grid-cols-[1.05fr_.95fr] xl:gap-14 xl:pb-28 xl:pt-20">
        <div className="relative z-10 min-w-0">
          <div className="eyebrow mb-6 flex items-center gap-3 text-ink/80 sm:mb-7">
            <span className="h-px w-9 shrink-0 bg-sun" />
            EFT · Acompanhamento com presença
          </div>

        
          <h1 className="display text-balance max-w-3xl text-[2.8rem] leading-[1.02] tracking-[-.035em] sm:text-6xl lg:text-[5rem] xl:text-[6.5rem]">

            Não precisas de carregar tudo{' '}
            <em className="relative inline-block not-italic text-ink after:absolute after:bottom-1 after:left-0 after:-z-10 after:h-[.18em] after:w-full after:rounded-full after:bg-sun">
              sozinha.
            </em>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-ink/75 sm:mt-8">
            Há coisas que pesam mais do que aquilo que conseguimos explicar.
            Aqui, podes parar um bocadinho, respirar e olhar para tudo isso sem
            julgamento.
          </p>

          <p className="display mt-6 max-w-lg text-2xl leading-tight sm:mt-7">
            E se pudesses aprender uma nova forma de lidar com o que sentes?
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#contacto"
              className="inline-flex w-full items-center justify-center whitespace-nowrap gap-3 rounded-full bg-sun px-6 py-4 font-bold shadow-soft ring-4 ring-sun/20 transition hover:-translate-y-1 hover:shadow-lift sm:w-auto"
            >
              Quero dar o primeiro passo <ArrowUpRight size={18} />
            </a>

            <a
              href="#reconhecimento"
              className="inline-flex w-full items-center justify-center whitespace-nowrap gap-2 px-2 py-3 text-sm font-bold text-ink/80 hover:text-ink sm:w-auto"
            >
              Conhecer o espaço <ArrowDown size={16} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-tr-[5rem] bg-honey shadow-lift sm:rounded-tr-[8rem]">
            <img
              src={image}
              onError={() => setImage('/hero-fallback.svg')}
              alt="Ana Margarida, terapeuta EFT, com expressão acolhedora num espaço luminoso"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          <div className="drift absolute -bottom-5 -right-2 grid h-20 w-20 place-items-center rounded-full bg-sun text-center text-[10px] font-bold leading-tight shadow-soft sm:-bottom-7 sm:-right-8 sm:h-24 sm:w-24 sm:text-xs">
            presença
            <br />
            + clareza
          </div>
        </div>
      </div>
    </section>
  )
}
