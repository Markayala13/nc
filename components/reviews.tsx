"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, ArrowLeft, ArrowRight, Quote, User } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Maria Rodriguez",
    title: "Homeowner, Plano",
    quote:
      "Jose and his team did an exceptional job on our premium siding installation. The finish is flawless and they completed the work on time. Highly recommend for any remodeling project in DFW.",
    rating: 5,
    project: "Siding Installation",
    image: "/assets/testimonial/maria.png",
  },
  {
    id: 2,
    name: "David Thompson",
    title: "Homeowner, Frisco",
    quote:
      "Professional, punctual, and meticulous. The bathroom remodeling exceeded our expectations. They handled everything from tile work to fixtures with precision.",
    rating: 5,
    project: "Bathroom Remodeling",
    image: "/assets/testimonial/david.png",
  },
  {
    id: 3,
    name: "Jennifer Martinez",
    title: "Homeowner, Arlington",
    quote:
      "From quote to completion, the experience was seamless. Our new kitchen looks amazing. The team was professional and left the site clean every day.",
    rating: 5,
    project: "Kitchen Remodeling",
    image: "/assets/testimonial/jennifer.png",
  },
]

export function Reviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 3000)

    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <section id="reviews" className="py-24 md:py-40 bg-[#a65d3f] relative overflow-hidden" ref={ref}>
      {/* Large quote mark background */}
      <div className="absolute top-12 right-12 pointer-events-none opacity-10">
        <Quote className="w-48 h-48 md:w-72 md:h-72 text-[#f8f6f1]" />
      </div>

      <div className="relative z-10 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-16 md:mb-24"
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#f8f6f1]/70">(Testimonials)</span>
            <span className="flex-1 h-px bg-[#f8f6f1]/20" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#f8f6f1]/70">04</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left side - Title and navigation - Updated text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f8f6f1] leading-[1.1] mb-8">
                What our clients
                <br />
                <span className="italic">say about us</span>
              </h2>

              {/* Rating summary */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f8f6f1] text-[#f8f6f1]" />
                  ))}
                </div>
                <span className="text-[#f8f6f1] font-serif text-2xl">5.0</span>
                <span className="text-[#f8f6f1]/70 text-sm">/ 5.0 average</span>
              </div>

              <p className="text-[#f8f6f1]/80 mb-12 max-w-md">
                Trusted by homeowners throughout the Dallas-Fort Worth metroplex. Our reputation is built on delivering quality
                craftsmanship, one project at a time.
              </p>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 border border-[#f8f6f1]/30 flex items-center justify-center text-[#f8f6f1] hover:bg-[#f8f6f1] hover:text-[#a65d3f] transition-all duration-300"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 border border-[#f8f6f1]/30 flex items-center justify-center text-[#f8f6f1] hover:bg-[#f8f6f1] hover:text-[#a65d3f] transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
                <span className="text-[#f8f6f1]/50 text-sm ml-4">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>

            {/* Right side - Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#f8f6f1]/20">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                </div>
                <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#f8f6f1] leading-[1.4] mb-10">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                <div className="flex items-center justify-between pt-8 border-t border-[#f8f6f1]/20">
                  <div>
                    <div className="text-[#f8f6f1] font-medium mb-1">{testimonials[activeIndex].name}</div>
                    <div className="text-[11px] tracking-[0.15em] uppercase text-[#f8f6f1]/60">
                      {testimonials[activeIndex].title}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] tracking-[0.15em] uppercase text-[#f8f6f1]/60 mb-1">Project</div>
                    <div className="text-[#f8f6f1]">{testimonials[activeIndex].project}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
