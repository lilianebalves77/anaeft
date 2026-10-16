
'use client'

import {
  ArrowUpRight,
  Instagram,
  MessageCircle,
  Mail,
  Send,
} from 'lucide-react'
import { FormEvent, useState } from 'react'

const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/351920632819'

const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
  'https://www.instagram.com/anamargarida_terapeutaeft/'

const emailAddress = 'anamargarida.terapeuta.eft@gmail.com'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contacto"
      className="border-t-8 border-sun bg-sun/10 px-5 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <span className="eyebrow text-ink/50">
            Primeiro contacto
          </span>

          <h2 className="display mt-5 text-5xl leading-[.95] tracking-[-.03em] sm:text-6xl">
            Podemos começar por falar.
          </h2>

          <p className="mt-6 max-w-md text-lg leading-8 text-ink/80">
            Não precisas de ter tudo pensado. Conta-me só o que te trouxe até aqui.
          </p>

          <p className="mt-3 text-sm font-bold text-ink/80">
            Atendimento online · começa por WhatsApp, Instagram ou e-mail.
          </p>

          <div className="mt-10 space-y-3">
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-sun bg-sun p-5 font-bold text-ink transition hover:-translate-y-0.5 hover:bg-sun/90"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={20} />
                WhatsApp · +351 920 632 819
              </span>
              <ArrowUpRight size={18} />
            </a>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-sun bg-sun p-5 font-bold text-ink transition hover:-translate-y-0.5 hover:bg-sun/90"
            >
              <span className="flex items-center gap-3">
                <Instagram size={20} />
                @anamargarida_terapeutaeft
              </span>
              <ArrowUpRight size={18} />
            </a>

            {/* E-mail */}
            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center justify-between rounded-2xl border border-sun bg-sun p-5 font-bold text-ink transition hover:-translate-y-0.5 hover:bg-sun/90"
            >
              <span className="flex min-w-0 items-center gap-3">
                <Mail size={20} className="shrink-0" />
                <span className="break-all">{emailAddress}</span>
              </span>
              <ArrowUpRight size={18} className="shrink-0" />
            </a>
          </div>
        </div>

        {/* Formulário */}
        <div className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-9">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <h3 className="display text-3xl">
                Se preferires, manda-me uma mensagem.
              </h3>
              <p className="mt-1 text-sm text-ink/80">
                Respondo-te assim que puder.
              </p>
            </div>

            <Send className="shrink-0 text-ink/70" size={22} />
          </div>

          {sent ? (
            <div role="status" className="rounded-2xl bg-honey/15 p-6">
              <h4 className="display text-2xl">
                Obrigada por me escreveres.
              </h4>

              <p className="mt-2 text-sm leading-6">
                Esta demonstração ainda não envia a mensagem. Para entrares em
                contacto, podes usar o WhatsApp, Instagram ou e-mail da Ana.
              </p>

              <a
                href={`mailto:${emailAddress}`}
                className="mt-4 inline-flex items-center gap-2 font-bold underline decoration-sun decoration-2 underline-offset-4"
              >
                Enviar e-mail <ArrowUpRight size={17} />
              </a>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <label className="block text-sm font-bold">
                Como te posso tratar?
                <input
                  required
                  name="nome"
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 font-normal outline-none transition placeholder:text-ink/70 focus:border-ink"
                  placeholder="O teu nome"
                />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-bold">
                  E-mail
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 font-normal outline-none transition placeholder:text-ink/70 focus:border-ink"
                    placeholder="o-teu@email.pt"
                  />
                </label>

                <label className="block text-sm font-bold">
                  WhatsApp
                  <input
                    name="whatsapp"
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 font-normal outline-none transition placeholder:text-ink/70 focus:border-ink"
                    placeholder="Se quiseres deixar"
                  />
                </label>
              </div>

              <label className="block text-sm font-bold">
                O que te fez procurar apoio?
                <textarea
                  required
                  name="motivo"
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-ink/15 bg-cream px-4 py-3 font-normal outline-none transition placeholder:text-ink/70 focus:border-ink"
                  placeholder="Escreve-me como te sair..."
                />
              </label>

              <label className="block text-sm font-bold">
                Como preferes que te contacte?
                <select
                  name="preferencia"
                  defaultValue="E-mail"
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 font-normal"
                >
                  <option value="E-mail">E-mail</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Instagram">Instagram</option>
                </select>
              </label>

              <label className="flex gap-3 text-xs leading-5 text-ink/75">
                <input
                  required
                  type="checkbox"
                  name="consentimento"
                  className="mt-1 accent-ink"
                />
                Dou autorização para ser contactada sobre esta mensagem.
              </label>

              <button
                className="w-full rounded-full bg-sun px-6 py-4 font-bold text-ink shadow-soft transition hover:bg-sun/90"
                type="submit"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

