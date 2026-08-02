'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-dark-card border-t-2 border-neon-cyan py-8 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="grid md:grid-cols-3 gap-8 mb-8" variants={containerVariants}>
          {/* About */}
          <motion.div variants={itemVariants}>
            <motion.h4 className="text-neon-cyan font-bold mb-3" variants={itemVariants}>About</motion.h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Senior Application Developer & System Architect specializing in rigorous SOP-driven logic, payment integration, and algorithmic platforms.
              Also enjoy music, books, and exploring new technologies. Based in Batam, Indonesia.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 className="text-neon-cyan font-bold mb-3" variants={itemVariants}>Navigate</motion.h4>
            <ul className="space-y-2 text-sm">
              {['Work', 'About', 'Contact'].map((link) => (
                <motion.li key={link} variants={itemVariants}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-pink transition-colors"
                  >
                    /{link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Status */}
          <motion.div variants={itemVariants}>
            <motion.h4 className="text-neon-cyan font-bold mb-3" variants={itemVariants}>Status</motion.h4>
            <div className="space-y-2">
              <motion.div className="flex items-center gap-2" variants={itemVariants}>
                <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
                <span className="text-sm text-gray-400">Available for projects</span>
              </motion.div>
              <div className="text-sm text-gray-500">
                Location: Batam, Indonesia (UTC+7)
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div className="border-t border-gray-700 my-8" variants={itemVariants}></motion.div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
          variants={containerVariants}
        >
          <motion.p variants={itemVariants}>&copy; {currentYear} Muhammad Nur Wajjah. All rights reserved.</motion.p>
          <motion.p className="font-mono" variants={itemVariants}>
            Built with <span className="text-neon-cyan">React</span> + <span className="text-neon-pink">Next.js</span>
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  )
}