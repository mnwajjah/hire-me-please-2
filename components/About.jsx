'use client'

import { motion } from 'framer-motion'

export default function About() {
  const timeline = [
    {
      year: '2026',
      title: 'IT Specialist & Fullstack Developer',
      company: 'Freelance & Corporate Contracts',
      description: 'Developing decision support systems (PROMETHEE, VIKOR) and automated marketing workflows for banking and state-owned enterprises.',
    },
    {
      year: '2025',
      title: 'Web Developer & Digital Marketer',
      company: 'Luna Park Media & Clients',
      description: 'Collaborating on technical architecture, SEO optimization, Stripe billing integrations, and automated email campaigns.',
    },
    {
      year: '2024',
      title: 'Full Stack & PHP Developer',
      company: 'Custom CRM & Web Applications',
      description: 'Building custom inventory systems, recruitment portals, and high-performance database-driven applications.',
    },
    {
      year: '2020',
      title: 'Graduated S1 Management',
      company: 'STIE',
      description: 'Focused on management information systems, business strategy, and digital operations.',
    },
  ]

  const skills = {
    'Backend': ['PHP', 'MySQL', 'RESTful APIs', 'Custom CRM', 'Marketing Automation'],
    'Database': ['MySQL', 'Database Optimization', 'Complex Queries'],
    'Payment & API': ['Stripe Integration', 'Webhook Management', 'Subscription Billing', 'API Security'],
    'Frontend': ['React', 'Next.js', 'HTML/CSS'],
    'SEO & Marketing': ['Technical SEO', 'Schema JSON-LD', 'Email Campaigns', 'Analytics'],
    'Tools': ['Git', 'Vercel', 'Linux', 'Postman'],
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
    <section id="about" className="py-20 px-4 bg-dark-card/50">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-5xl font-bold mb-16 neon-glow-pink"
          variants={itemVariants}
        >
          &gt; About Me
        </motion.h2>

        <motion.div className="grid md:grid-cols-2 gap-12" variants={containerVariants}>
          {/* Timeline */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.h3 className="text-2xl font-bold mb-8 text-neon-cyan" variants={itemVariants}>Career Timeline</motion.h3>
            {timeline.map((item, index) => (
              <motion.div key={index} className="border-l-2 border-neon-cyan pl-6 py-4 relative" variants={itemVariants}>
                <div className="absolute w-4 h-4 bg-neon-cyan rounded-full -left-2.5 mt-2"></div>
                <div className="text-neon-pink font-bold text-lg">{item.year}</div>
                <div className="font-bold text-xl mt-1">{item.title}</div>
                <div className="text-gray-400 text-sm">{item.company}</div>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.h3 className="text-2xl font-bold mb-8 text-neon-cyan" variants={itemVariants}>Tech Expertise</motion.h3>
            <motion.div className="space-y-6" variants={containerVariants}>
              {Object.entries(skills).map(([category, items]) => (
                <motion.div key={category} variants={itemVariants}>
                  <motion.h4 className="text-neon-pink font-bold mb-3" variants={itemVariants}>{category}</motion.h4>
                  <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
                    {items.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 bg-dark-bg border border-neon-cyan text-sm hover:bg-neon-cyan hover:text-dark-bg transition-all cursor-default"
                        variants={itemVariants}
                        whileHover={{ y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div className="mt-20 pt-12 border-t border-gray-700" variants={itemVariants}>
          <motion.h3 className="text-2xl font-bold mb-8 text-neon-cyan" variants={itemVariants}>By The Numbers</motion.h3>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={containerVariants}>
            <motion.div className="text-center" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold text-neon-pink mb-2">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold text-neon-cyan mb-2">10+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold text-neon-pink mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold text-neon-cyan mb-2">24/7</div>
              <div className="text-gray-400">System Uptime</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}