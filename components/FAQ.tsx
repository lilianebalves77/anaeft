
'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const questions = [
  [
    'Nunca experimentei EFT. Será que é para mim?',
    'Não precisas de perceber nada à partida. Explico-te tudo de forma simples e começamos devagar, ao teu ritmo.',
  ],
  [
    'Como é a conversa dos 20 minutos?',
    'É uma conversa online e sem pressão. Falamos um bocadinho sobre o que se passa, o que gostarias de mudar e podes fazer-me todas as perguntas que quiseres.',
  ],
  [
    'Tenho de saber explicar exactamente o que sinto?',
    'Não. Podes começar pelas palavras que tens — ou simplesmente dizer que não sabes por onde começar.',
  ],
  [
    'Tenho de contar tudo logo de início?',
    'Não. Não tens de falar sobre nada antes de te sentires preparada. Vamos ao teu ritmo.',
  ],
  [
    'E depois da conversa, o que acontece?',
    'Se sentires que faz sentido avançar, vemos juntas a melhor forma: sessões individuais ou um pack de acompanhamento. Só avançamos se fizer sentido para ti.',
  ],
  [
    'Como é que sei se este acompanhamento é para mim?',
    'Essa é precisamente uma das coisas que podemos perceber na conversa inicial: se te sentes segura, ouvida e se há vontade de trabalharmos juntas.',
  ],
] as const

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-5 sm:py-20 lg:px-10 lg:py-32"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="min-w-0">
          <span className="eyebrow text-ink/50">
            Perguntas frequentes
          </span>

          <h2
            id="faq-title"
            className="display mt-4 break-words text-5xl leading-[0.95] tracking-[-0.03em] sm:mt-5 sm:text-6xl"
          >
            Tens alguma destas perguntas?
          </h2>
        </div>

        <div className="min-w-0">
          {questions.map(([question, answer], index) => {
            const isOpen = open === index

            return (
              <div
                key={question}
                className="border-t border-ink/15"
              >
                <button
                  id={`question-${index}`}
                  type="button"
                  className="flex min-h-16 w-full items-start justify-between gap-4 py-5 text-left font-bold leading-6 sm:items-center sm:gap-6 sm:py-6"
                  aria-expanded={isOpen}
                  aria-controls={`answer-${index}`}
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                >
                  <span className="min-w-0 break-words pr-2">
                    {question}
                  </span>

                  <ChevronDown
                    size={19}
                    aria-hidden="true"
                    className={`mt-0.5 shrink-0 transition-transform duration-200 sm:mt-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  id={`answer-${index}`}
                  role="region"
                  aria-labelledby={`question-${index}`}
                  hidden={!isOpen}
                  className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-ink/75 sm:pb-6 sm:pr-12"
                >
                  {answer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

