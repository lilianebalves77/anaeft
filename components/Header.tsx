 'use client'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  ['Sobre mim', '#sobre'],
  ['EFT', '#eft'],
  ['Como funciona', '#como-funciona'],
  ['Testemunhos', '#testemunhos'],
  ['Perguntas frequentes', '#faq'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-4 lg:px-10">
        <a
          href="#inicio"
          className="group flex min-w-0 shrink items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/ana-eft-logo.png"
            alt=""
            className="h-9 w-9 shrink-0 rounded-full object-cover shadow-sm sm:h-10 sm:w-10"
          />
          <span className="min-w-0 leading-none">
            <strong className="display block truncate text-lg font-semibold sm:text-xl">
              Ana Margarida 
            </strong>
            <small className="mt-1 block truncate text-[9px] font-bold uppercase tracking-[.16em] text-ink/80 sm:text-[10px]">
              Terapeuta EFT
            </small>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-sun px-5 py-3 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Quero dar o primeiro passo
          </a>
        </nav>

        <button
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/15 lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4.75rem)] overflow-y-auto border-t border-ink/10 bg-cream px-4 pb-6 pt-3 sm:px-5 lg:hidden"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink/10 py-4 text-lg"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-sun px-5 py-4 text-center font-bold"
          >
            Quero dar o primeiro passo
          </a>
        </div>
      )}
    </header>
  )
}