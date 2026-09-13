import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
}

export function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }
      case 'down':
        return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }
      case 'left':
        return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }
      case 'right':
        return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }
      case 'none':
      default:
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    }
  }

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
