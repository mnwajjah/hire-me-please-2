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

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
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
            href="/CV_Muhammad_Nur_Wajjah.pdf"
            download="CV_Muhammad_Nur_Wajjah.pdf"
            className="text-sm uppercase tracking-wider px-4 py-2 border-2 border-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all"
          >
            CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-neon-cyan"></span>
          <span className="w-6 h-0.5 bg-neon-cyan"></span>
          <span className="w-6 h-0.5 bg-neon-cyan"></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-dark-bg border-b-2 border-neon-cyan px-4 py-6 gap-4">
          {['work', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-left text-sm uppercase tracking-wider hover:text-neon-pink transition-all"
            >
              /{item}
            </button>
          ))}
          <a
            href="/CV_Muhammad_Nur_Wajjah.pdf"
            download="CV_Muhammad_Nur_Wajjah.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="text-left text-sm uppercase tracking-wider text-neon-cyan hover:text-neon-pink transition-all pt-2 border-t border-gray-800"
          >
            / Download CV
          </a>
        </div>
      )}
    </header>
  )
}

//