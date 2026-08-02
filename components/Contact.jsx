'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      const result = await res.json()

      if (res.ok) {
        setSubmitted(true)
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => {
          setSubmitted(false)
        }, 4000)
      } else {
        setErrorMsg(result.error || 'Failed to send message.')
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="contact" className="py-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-5xl font-bold mb-16 neon-glow-cyan"
          variants={itemVariants}
        >
          &gt; Get In Touch
        </motion.h2>

        <motion.div className="grid md:grid-cols-2 gap-12" variants={containerVariants}>
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <motion.h3 className="text-neon-pink font-bold mb-4" variants={itemVariants}>Let's Connect</motion.h3>
              <p className="text-gray-300 leading-relaxed">
                Interested in project collaborations, contract work, or discussing backend system architecture? Hit me up.
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.h4 className="text-neon-cyan font-bold" variants={itemVariants}>Direct Contact:</motion.h4>
              <motion.div className="space-y-3" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:mwajjah@gmail.com"
                    className="text-neon-cyan font-mono hover:text-neon-pink transition-all"
                  >
                    mwajjah@gmail.com
                  </a>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-mono">Batam, Indonesia (UTC+7)</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.h4 className="text-neon-cyan font-bold" variants={itemVariants}>Social Links:</motion.h4>
              <motion.div className="flex gap-4" variants={containerVariants}>
                {[
                  { name: 'GitHub', url: 'https://github.com/mnwajjah', icon: 'GH' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-nur-wajjah-918a4b20a/', icon: 'IN' },
                  { name: 'Instagram', url: 'https://www.instagram.com/mnwajjah/', icon: 'IG' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-neon-cyan px-4 py-2 hover:bg-neon-cyan hover:text-dark-bg transition-all font-mono text-sm"
                    title={social.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -4 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={containerVariants}>
            <motion.form onSubmit={handleSubmit} className="space-y-4" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <label className="block text-sm text-gray-400 mb-2 font-mono">
                  &gt; name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-bg border-2 border-neon-cyan px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-pink transition-colors"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm text-gray-400 mb-2 font-mono">
                  &gt; email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-bg border-2 border-neon-cyan px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-pink transition-colors"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm text-gray-400 mb-2 font-mono">
                  &gt; message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-dark-bg border-2 border-neon-cyan px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-pink transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full pixel-border px-8 py-4 font-bold text-lg hover:bg-neon-cyan hover:text-dark-bg transition-all uppercase disabled:opacity-50 cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? 'SENDING...' : submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>

              {errorMsg && (
                <motion.p className="text-xs text-neon-pink text-center font-mono" variants={itemVariants}>
                  {errorMsg}
                </motion.p>
              )}

              <motion.p className="text-xs text-gray-500 text-center" variants={itemVariants}>
                I'll get back to you within 24 hours
              </motion.p>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}