import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="99ac3a409c1444e6" />
        <title>Ла Казино — официальный сайт и рабочее зеркало: играть Ля казино онлайн</title>
        <meta
          name="description"
          content="Ла Казино и Ля казино: официальный сайт, рабочее зеркало, слоты и бонусы. Как играть la casino онлайн безопасно, где искать la casino официальное зеркало и как отличить настоящий сайт от подделки."
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://la26casino.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://la26casino.vercel.app/" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Ла Казино — официальный сайт и рабочее зеркало: играть Ля казино онлайн" />
        <meta
          property="og:description"
          content="Ла Казино и Ля казино: официальный сайт, рабочее зеркало, слоты и бонусы. Как играть la casino онлайн безопасно и как отличить настоящий сайт от подделки."
        />
        <meta property="og:image" content="https://la26casino.vercel.app/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ла Казино — официальный сайт и рабочее зеркало: играть Ля казино онлайн" />
        <meta
          name="twitter:description"
          content="Ла Казино и Ля казино: официальный сайт, рабочее зеркало, слоты и бонусы. Как играть la casino онлайн безопасно."
        />
        <meta name="twitter:image" content="https://la26casino.vercel.app/hero.jpg" />
        <meta name="theme-color" content="#160a12" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
