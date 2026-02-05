import { Rajdhani, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-jetbrains',
})

export const metadata = {
  title: 'Priyanka.Dev | Full Stack Architect & Digital Creator',
  description: 'Cyberpunk-themed portfolio of Priyanka - Senior Full Stack Developer, Technomancer, and Digital Creator. Explore my missions, weaponry, and character stats.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
