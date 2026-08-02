import './globals.css'

export const metadata = {
  title: 'Muhammad Nur Wajjah - Backend Engineer',
  description: 'Portfolio showcasing payment systems, microservices, and scalable backend architecture',
  keywords: 'backend engineer, nodejs, php, stripe, payment systems, microservices',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%2300ffff'>[</text></svg>" />
      </head>
      <body className="bg-dark-bg text-white antialiased">
        <div className="grid-bg fixed inset-0 pointer-events-none opacity-20"></div>
        {children}
      </body>
    </html>
  )
}
