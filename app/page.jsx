'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
