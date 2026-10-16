import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
const metadataBase = siteUrl ? new URL(siteUrl) : undefined
const shareImage = metadataBase ? new URL('/ana-margarida-hero.jpg', metadataBase).toString() : undefined

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: 'Ana Margarida | Terapeuta EFT',
  description: 'Um espaço acolhedor para compreenderes o que sentes e começares a dar um primeiro passo com mais leveza.',
  keywords: ['EFT', 'Tapping', 'terapia emocional', 'ansiedade', 'autoestima', 'Portugal'],
  openGraph: {
    type: 'website',
    title: 'Ana Margarida | Terapeuta EFT',
    description: 'Não precisas de carregar tudo sozinha.',
    siteName: 'Ana Margarida | Terapeuta EFT',
    ...(shareImage ? { images: [shareImage] } : {})
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ana Margarida | Terapeuta EFT',
    description: 'Não precisas de carregar tudo sozinha.',
    ...(shareImage ? { images: [shareImage] } : {})
  },
  icons: { icon: '/ana-eft-logo.png' }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-PT"><body>{children}</body></html>
}
