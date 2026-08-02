'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Payment & Billing System',
    subtitle: 'Stripe SCA Compliance & Subscription Management',
    description: 'Built scalable Stripe billing infrastructure for 360ifit & 101-fit platforms. Implemented SCA-compliant payment flows, webhook management, subscription corrections, and automated Payment Intent retrieval.',
    tech: ['PHP', 'Laravel', 'Stripe API', 'MySQL', 'Node.js'],
    metrics: '1K+ Active Users | €2K+ Monthly Recurring Revenue (MRR)',
    status: 'Live',
    color: 'cyan',
    isExternal: false,
  },
  {
    id: 2,
    title: 'My IQ Test & My IQ Score',
    subtitle: 'Interactive Frontend Architecture & Quiz Engine',
    description: 'Designed and built the UI/UX and interactive quiz logic for two high-traffic IQ testing platforms — covering question flow, timing, answer validation, and dynamic results/report displays.',
    tech: ['JavaScript', 'PHP Native',  'UI/UX Design'],
    metrics: 'High Traffic | Dynamic Quiz Engine',
    status: 'Live',
    color: 'pink',
    isExternal: true,
    externalUrl: 'https://my-iqscore.com',
  },
  {
    id: 3,
    title: 'Islam Prayer Times',
    subtitle: 'Accurate Calculation & Schedule Platform',
    description: 'Developed a reliable PHP Native web application for calculating precise Islamic prayer times, daily schedules, and location-based adjustments with a clean, fast interface.',
    tech: ['PHP Native', 'JavaScript', 'MySQL'],
    metrics: 'Accurate Calculation | Fast Performance',
    status: 'Live',
    color: 'cyan',
    isExternal: true,
    externalUrl: 'https://islamprayertimes.com',
  },
  {
    id: 4,
    title: 'Algorithmic Decision Support Systems (DSS)',
    subtitle: 'Multicriteria Optimization & Risk Assessment',
    description: 'Engineered multicriteria Decision Support Systems for PLN Kepri and Bank Bestari utilizing PROMETHEE and VIKOR methods to automate team leader selection and loan applicant risk assessment.',
    tech: ['PHP', 'MySQL', 'PROMETHEE Algorithm', 'VIKOR Method'],
    metrics: 'Enterprise Automation | Algorithmic Scoring',
    status: 'Live',
    color: 'pink',
    isExternal: false,
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="work" className="py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-5xl font-bold mb-16 neon-glow-cyan"
          variants={itemVariants}
        >
          &gt; Featured Work
        </motion.h2>

        <motion.div className="space-y-12" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              variants={itemVariants}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <span className={`text-xs font-bold px-3 py-1 border-2 ${
                      project.color === 'cyan'
                        ? 'border-neon-cyan text-neon-cyan'
                        : 'border-neon-pink text-neon-pink'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-lg text-neon-cyan font-semibold">
                    {project.subtitle}
                  </p>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="pt-4">
                    <p className="text-sm text-gray-400 mb-3">TECH STACK:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-3 py-1 text-sm border ${
                            project.color === 'cyan'
                              ? 'border-neon-cyan text-neon-cyan'
                              : 'border-neon-pink text-neon-pink'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`text-2xl font-bold pt-4 ${
                    project.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-pink'
                  }`}>
                    {project.metrics}
                  </div>
                </div>
              </div>

              {/* Visual Card / Action Preview */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div
                  className={`${
                    project.color === 'cyan' ? 'pixel-border' : 'pixel-border-pink'
                  } p-8 bg-dark-card h-80 flex flex-col justify-between relative overflow-hidden`}
                >
                  {project.isExternal ? (
                    <div className="relative z-10 flex flex-col justify-between h-full text-center">
                      <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-b border-dark-border pb-2">
                        <span>system://secure-preview</span>
                        <span className={project.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-pink'}>status: online</span>
                      </div>
                      
                      <div className="my-auto space-y-2">
                        <div className={`text-2xl font-bold ${project.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-pink'}`}>
                          {project.title}
                        </div>
                        <p className="text-xs text-gray-400">
                          Direct live portal access available via secure external link.
                        </p>
                      </div>

                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 font-bold text-sm tracking-wide transition-all block text-center ${
                          project.color === 'cyan' 
                            ? 'bg-neon-cyan text-dark-bg hover:bg-neon-pink' 
                            : 'bg-neon-pink text-dark-bg hover:bg-neon-cyan'
                        }`}
                      >
                        LAUNCH LIVE PREVIEW ↗
                      </a>
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)',
                      }}></div>

                      <div className="relative z-10">
                        <div className={`text-6xl font-black mb-4 ${
                          project.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-pink'
                        }`}>
                          0{project.id}
                        </div>
                        <p className="text-gray-400 text-sm font-mono">
                          project_{project.id.toString().padStart(2, '0')}
                        </p>
                      </div>

                      <div className="relative z-10">
                        <div className={`text-sm font-mono ${
                          project.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-pink'
                        }`}>
                          $ status: live
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}