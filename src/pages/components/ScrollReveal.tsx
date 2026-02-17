import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
}

export const ScrollReveal = ({ children }: ScrollRevealProps) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 30%"], 
    // animation completes earlier and stays visible
  })

  // Fade in only
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  // Slide up only
  const y = useTransform(scrollYProgress, [0, 1], [60, 0])

  const smoothOpacity = useSpring(opacity, {
    stiffness: 100,
    damping: 20,
  })

  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 20,
  })

  return (
    <motion.div ref={ref} style={{ opacity: smoothOpacity, y: smoothY }}>
      {children}
    </motion.div>
  )
}
