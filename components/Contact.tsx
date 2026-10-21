
'use client'

import {
  ArrowUpRight,
  Instagram,
  MessageCircle,
  Mail,
  Send,
} from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'

const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/351920632819'

const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
  'https://www.instagram.com/anamargarida_terapeutaeft/'

const emailAddress = 'anamargarida.terapeuta.eft@gmail.com'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (sending) return

    setSending(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setError(
        'O formulário não está configurado. Tenta novamente mais tarde.'
      )
      setSending(false)
      return
    }

    const payload = {
      access_key: accessKey,
      subject: 'Nova mensagem do site — Ana Margarida | Terapeuta EFT',
      from_name: 'Ana Margarida | Terapeuta EFT',
      name: String(formData.get('nome') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      message: String(formData.get('motivo') ?? '').trim(),
      consentimento:
        formData.get('consentimento') === 'on' ? 'Sim' : 'Não',
      botcheck: String(formData.get('botcheck') ?? ''),
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok || !result?.success) {
        throw new Error('O serviço não confirmou o envio.')
      }

      setSent(true)
      form.reset()
    } catch (err) {
      console.error('Erro ao enviar formulário:', err)

      setError(
        'Não foi possível enviar a mensagem. Tenta novamente ou contacta a Ana por WhatsApp ou e-mail.'
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contacto"
      className="border-t-8 border-sun bg-sun/10 px-5 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <span className="eyebrow text-ink/50">Primeiro contacto</span>

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
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-sun bg-sun p-5 font-bold text-ink transition hover:-translate-y-0.5 hover:bg-sun/90"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={20} />
                WhatsApp · +351 920 632 819
              </span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-sun bg-sun p-5 font-bold text-ink transition hover:-translate-y-0.5 hover:bg-sun/90"
            >
              <span className="flex items-center gap-3">
                <Instagram size={20} />
                @anamargarida_terapeutaeft
              </span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center justify-between rounded-2xl border border-ink bg-ink p-5 font-bold text-cream transition hover:-translate-y-0.5 hover:bg-ink/90"
            >
              <span className="flex min-w-0 items-center gap-3">
                <Mail size={20} className="shrink-0" />
                <span className="break-all">{emailAddress}</span>
              </span>
              <ArrowUpRight size={18} className="shrink-0" />
            </a>
          </div>
        </div>

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
                A tua mensagem foi enviada. A Ana entrará em contacto assim que puder.
              </p>

              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-4 font-bold underline decoration-sun decoration-2 underline-offset-4"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              {/* Campo anti-spam oculto. Os visitantes não precisam de o preencher. */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <label className="block text-sm font-bold">
                Como te posso tratar?
                <input
                  required
                  name="nome"
                  maxLength={100}
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 font-normal outline-none transition placeholder:text-ink/70 focus:border-ink"
                  placeholder="O teu nome"
                />
              </label>

              <label className="block text-sm font-bold">
                E-mail
                <input
                  required
                  type="email"
                  name="email"
                  maxLength={254}
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 font-normal outline-none transition placeholder:text-ink/70 focus:border-ink"
                  placeholder="o-teu@email.pt"
                />
              </label>

              <label className="block text-sm font-bold">
                O que te fez procurar apoio?
                <textarea
                  required
                  name="motivo"
                  rows={4}
                  maxLength={3000}
                  className="mt-2 w-full resize-none rounded-xl border border-ink/15 bg-cream px-4 py-3 font-normal outline-none transition placeholder:text-ink/70 focus:border-ink"
                  placeholder="Escreve-me como te sair..."
                />
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

              {error && (
                <p
                  role="alert"
                  className="rounded-xl bg-red-50 p-3 text-sm text-red-800"
                >
                  {error}
                </p>
              )}

              <button
                className="w-full rounded-full bg-ink px-6 py-4 font-bold text-cream shadow-soft transition hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={sending}
              >
                {sending ? 'A enviar...' : 'Enviar mensagem por e-mail'}
              </button>

              <p className="text-xs leading-5 text-ink/60">
                Evita incluir informações clínicas ou dados pessoais sensíveis nesta primeira mensagem.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

