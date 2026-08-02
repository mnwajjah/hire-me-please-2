'use client'

import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-dark-bg/95 backdrop-blur-sm border-b-2 border-neon-cyan z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold neon-glow-cyan cursor-pointer">
          &gt; WAJJAH.DEV
        </div>

        <nav className="hidden md:flex gap-8">
          {['work', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm uppercase tracking-wider hover:text-neon-pink hover:neon-glow-pink transition-all"
            >
              /{item}
            </button>
          ))}
          <a
            href="CV_Muhammad_Nur_Wajjah.pdf"
            download="CV_Muhammad_Nur_Wajjah.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-wider px-4 py-2 border-2 border-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all"
          >
            CV
          </a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <div className="w-6 h-1 bg-neon-cyan"></div>
          <div className="w-6 h-1 bg-neon-cyan"></div>
          <div className="w-6 h-1 bg-neon-cyan"></div>
        </button>

        {mobileMenuOpen && (
          <div className="absolute top-16 right-0 bg-dark-card border-2 border-neon-cyan p-4 w-full md:hidden">
            <nav className="flex flex-col gap-4">
              {['work', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm uppercase tracking-wider hover:text-neon-pink"
                >
                  /{item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
