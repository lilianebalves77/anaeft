
import { Instagram, MessageCircle } from 'lucide-react'

const whatsappUrl = 'https://wa.me/351920632819'
const instagramUrl = 'https://www.instagram.com/anamargarida_terapeutaeft/'

export default function Footer() {
  return (
    <footer className="border-t-8 border-sun bg-cream px-4 py-8 text-ink sm:px-5 sm:py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:gap-8 md:flex-row md:items-start md:justify-between lg:items-end">
        <div className="min-w-0">
          <a href="#inicio" className="display inline-block text-3xl">
            Ana Margarida 
          </a>

          <p className="mt-2 max-w-xs text-sm leading-6 text-ink/65">
            Terapeuta EFT · Atendimento online.
          </p>
        </div>

        <div className="grid w-full max-w-sm grid-cols-2 gap-x-4 gap-y-3 text-sm text-ink/75 sm:flex sm:max-w-none sm:flex-wrap sm:gap-x-6 sm:gap-y-3 md:justify-end">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 py-2 transition-colors hover:text-ink"
          >
            <MessageCircle size={16} className="shrink-0" />
            WhatsApp
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 py-2 transition-colors hover:text-ink"
          >
            <Instagram size={16} className="shrink-0" />
            Instagram
          </a>

          <a
            href="/privacidade"
            className="inline-flex min-h-11 items-center py-2 transition-colors hover:text-ink"
          >
            Política de Privacidade
          </a>

          <a
            href="/informacao-legal"
            className="inline-flex min-h-11 items-center py-2 transition-colors hover:text-ink"
          >
            Informação Legal
          </a>
        </div>
      </div>

      <div className="mx-auto mt-7 max-w-7xl border-t border-ink/15 pt-5 text-xs leading-5 text-ink/50 sm:mt-8">
        © {new Date().getFullYear()} Ana Margarida. Todos os direitos reservados.
      </div>
    </footer>
  )
}

