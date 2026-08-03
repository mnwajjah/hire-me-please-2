'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [counts, setCounts] = useState({ exp: 0, users: 0, projects: 0, methods: 0 })

  useEffect(() => {
    const timers = [
      setTimeout(() => setCounts(c => ({ ...c, exp: 3 })), 500),
      setTimeout(() => setCounts(c => ({ ...c, users: 1 })), 700),
      setTimeout(() => setCounts(c => ({ ...c, projects: 10 })), 900),
      setTimeout(() => setCounts(c => ({ ...c, methods: 100 })), 1100),
    ]
    return () => timers.forEach(t => clearTimeout(t))
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div
        className="max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8 text-center md:text-left">
          {/* Title with glitch effect */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="neon-glow-cyan">&gt;</span> Muhammad
              <br />
              Nur Wajjah
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-400"
              variants={itemVariants}
            >
              Senior Application Developer & System Architect
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t-2 border-b-2 border-neon-cyan"
            variants={containerVariants}
          >
            <motion.div variants={statsVariants}>
              <div className="text-3xl font-bold text-neon-cyan">{counts.exp}+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </motion.div>
            <motion.div variants={statsVariants}>
              <div className="text-3xl font-bold text-neon-pink">24/7</div>
              <div className="text-sm text-gray-400">System Uptime</div>
            </motion.div>
            <motion.div variants={statsVariants}>
              <div className="text-3xl font-bold text-neon-cyan">100%</div>
              <div className="text-sm text-gray-400">SOP-Driven Code</div>
            </motion.div>
            <motion.div variants={statsVariants}>
              <div className="text-3xl font-bold text-neon-pink">{counts.projects}+</div>
              <div className="text-sm text-gray-400">Enterprise Projects</div>
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div className="space-y-4 max-w-2xl" variants={itemVariants}>
            <p className="text-lg text-gray-300 leading-relaxed">
              Results-driven System Architect and Fullstack Engineer building secure, high-scale backend frameworks. Expert in PHP/Node.js logic, payment gateway integrations, and data-driven enterprise solutions governed by strict engineering SOPs.
            </p>
            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              variants={containerVariants}
            >
              <motion.a
                href="#work"
                className="pixel-border px-8 py-4 font-bold hover:bg-neon-cyan hover:text-dark-bg transition-all cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EXPLORE WORK
              </motion.a>
              <motion.a
                href="#contact"
                className="border-2 border-neon-pink px-8 py-4 font-bold hover:bg-neon-pink hover:text-dark-bg transition-all cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GET IN TOUCH
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div className="pt-8 border-t border-gray-700" variants={itemVariants}>
            <p className="text-sm text-gray-500 mb-4">TECH STACK:</p>
            <motion.div
              className="flex flex-wrap gap-3 justify-center md:justify-start"
              variants={containerVariants}
            >
              {['PHP', 'JavaScript', 'Node.js', 'React.js', 'CodeIgniter', 'MySQL', 'PostgreSQL', 'Stripe API', 'Mapbox API'].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 border border-neon-cyan text-sm hover:bg-neon-cyan hover:text-dark-bg transition-all cursor-default"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}