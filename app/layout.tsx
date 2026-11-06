
import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://anaeft.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ana Margarida | Terapeuta EFT',
  description:
    'Um espaço acolhedor para compreenderes o que sentes e começares a dar um primeiro passo com mais leveza.',
  keywords: [
    'EFT',
    'Tapping',
    'terapia emocional',
    'ansiedade',
    'autoestima',
    'Portugal',
  ],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Ana Margarida | Terapeuta EFT',
    description: 'Não precisas de carregar tudo sozinha.',
    siteName: 'Ana Margarida | Terapeuta EFT',
    images: [
      {
        url: '/ana-margarida-hero.jpg',
        alt: 'Ana Margarida | Terapeuta EFT',
      },
    ],
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ana Margarida | Terapeuta EFT',
    description: 'Não precisas de carregar tudo sozinha.',
    images: ['/ana-margarida-hero.jpg'],
  },
  icons: {
    icon: '/ana-eft-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  )
}
