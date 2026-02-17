"use client"

import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"
import { Separator } from "./Separator"
import { StarFill, StarHalf, ChevronDown, ChevronUp, Quote } from "react-bootstrap-icons"
import { motion, useAnimation, useInView } from "framer-motion"
import type { Variants } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  date: string | Date
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  trustedCompanies?: string[]
  trustedCompaniesTitle?: string
  className?: string
}

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it. See what developers and companies have to say about our starter template.",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by developers from companies worldwide",
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [expanded, setExpanded] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)


  const MAX_LENGTH = 200

  const getDisplayContent = (content: string, index: number) => {
    if (expanded === index) return content
    if (content.length <= MAX_LENGTH) return content
    return content.slice(0, MAX_LENGTH) + "..."
  }

  // Refs for scroll animations
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Auto rotate testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1 || isPaused) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length, isPaused])

  if (testimonials.length === 0) {
    return null
  }


  const renderStars = (rating: number) => {
    const stars: React.ReactNode[] = []
    const full = Math.floor(rating)
    const half = rating % 1 >= 0.5

    for (let i = 0; i < full; i++) {
      stars.push(
        <StarFill key={`full-${i}`} className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF9D00]" />
      )
    }

    if (half) {
      stars.push(
        <StarHalf key="half" className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF9D00]" />
      )
    }

    while (stars.length < 5) {
      stars.push(
        <StarFill
          key={`empty-${stars.length}`}
          className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300"
        />
      )
    }

    return stars
  }

  const getRatingMessage = (rating: number) => {
    if (rating >= 5) return "Outstanding!"
    if (rating >= 4.5) return "Excellent experience!"
    if (rating >= 4) return "Great!"
    if (rating >= 3.5) return "Very good!"
    if (rating >= 3) return "Good!"
    if (rating >= 2) return "Fair!"
    return "Needs improvement!"

  }


  const total = testimonials.length
  const prevIndex = (activeIndex - 1 + total) % total
  const nextIndex = (activeIndex + 1) % total

  const visibleProfiles = [prevIndex, activeIndex, nextIndex]


  // const visibleDots = [
  //   (activeIndex - 1 + total) % total,
  //   activeIndex,
  //   (activeIndex + 1) % total,
  // ]

  // Date formator 
  const formatDate = (date: string | Date) => {
    const d = new Date(date)
    return d.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <section ref={sectionRef} id="testimonials" className={`py-24 overflow-hidden bg-white ${className || ""}`}>
      <div className="px-14 md:px-20 lg:px-32">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-16 w-full lg:grid-cols-2 lg:gap-24"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-6">
              {badgeText && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[linear-gradient(to_bottom_right,#FF3BD499,#FFB5EF99,#FE98E899,#FFEDA499)] text-black">
                  <StarFill className="mr-1 h-3.5 w-3.5 fill-black" />
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="text-3xl text-[#5E4DE1] font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}
                <img src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/Group_6357568_rcketl.svg" alt="logo" className="inline-block w-auto h-[1em] ml-2 sm:ml-3" />
              </h2>

              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">{subtitle}</p>
             
              <div className="relative h-20 w-56 overflow-hidden pt-6">
                {visibleProfiles.map((index) => {
                  const testimonial = testimonials[index]

                  return (
                    <motion.button
                      key={testimonial.id}
                      onClick={() => setActiveIndex(index)}
                      className="absolute top-0"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{
                        opacity:
                          index === activeIndex ? 1 : 0.9,
                        x:
                          index === activeIndex
                            ? 72
                            : index === prevIndex
                              ? 0
                              : 144,
                        scale: index === activeIndex ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Avatar
                        className={`h-14 w-14 border-2 ${index === activeIndex
                            ? "border-2 border-white shadow-lg shadow-[#5E4DE1]/30"
                            : "border-[#5E4DE1]/30"
                          }`}
                      >
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </motion.button>
                  )
                })}
              </div>



            </div>
          </motion.div>

          {/* Right side: Testimonial cards */}
          <motion.div variants={itemVariants} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className="relative w-full min-h-[380px] sm:min-h-[400px] ">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <div className="bg-card border-2 border-[#5E4DE1] shadow-lg rounded-[50px] p-8 h-full flex flex-col overflow-hidden">
                  <div className="mb-6 flex items-center gap-2">
                    {renderStars(testimonial.rating)}&nbsp;
                    <span className="text-sm font-semibold text-[#543ED2]">
                      {getRatingMessage(testimonial.rating)}
                    </span>
                  </div>


                  <div className="relative mb-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    {/* <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20 rotate-180" /> */}
                    <div className="relative z-10 text-sm text-[#818181] leading-relaxed">
                      <p>"{getDisplayContent(testimonial.content, index)}"</p>

                      {testimonial.content.length > MAX_LENGTH && (
                        <motion.button
                          onClick={() =>
                            setExpanded(expanded === index ? null : index)
                          }
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 text-xs font-semibold text-black hover:underline flex items-center gap-1"
                        >
                          {expanded === index ? "Show less" : "Show more"}
                          <motion.span
                            animate={{ rotate: expanded === index ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            {expanded === index ? <ChevronUp /> : <ChevronDown />}
                          </motion.span>
                        </motion.button>
                      )}

                    </div>

                  </div>
                  <div className="text-sm text-[#5E4DE1] font-medium">
                    {formatDate(testimonial.date)}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 sm:h-12 w-10 sm:w-12 border-2 border-white shadow-lg shadow-[#5E4DE1]/30">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-[#5E4DE1]/5"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-xl bg-[#5E4DE1]/5"></div>
          </motion.div>
        </motion.div>

        {/* Logo cloud */}
        {trustedCompanies.length > 0 && (
          <motion.div variants={itemVariants} initial="hidden" animate={controls} className="mt-24 text-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-8">{trustedCompaniesTitle}</h3>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {trustedCompanies.map((company) => (
                <div key={company} className="text-2xl font-semibold text-muted-foreground/50">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
