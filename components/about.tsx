"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

function AnimatedNumber({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 30,
    mass: 1
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest))
    })
    return () => unsubscribe()
  }, [springValue])

  return <span>{displayValue}{suffix}</span>
}

const stats = [
  { value: 10, suffix: "+", label: "Years of Excellence" },
  { value: 30, suffix: "+", label: "Years Team Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: "-200px" })

  return (
    <section id="about" className="py-24 md:py-40 bg-[#f8f6f1] relative overflow-hidden" ref={ref}>
      {/* Large background text - Updated brand name */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none">
        <span className="font-serif text-[20vw] font-light text-[#e8e4dc]/50 leading-none select-none">PRESTIGE</span>
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
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6b6560]">(About Us)</span>
            <span className="flex-1 h-px bg-[#e8e4dc]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6b6560]">01</span>
          </motion.div>

          {/* Main content grid - Updated all text content */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Large statement */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#1a1a1a] mb-8">
                Dallas's trusted
                <span className="italic text-[#a65d3f]"> remodeling experts</span>
              </h2>
              <p className="text-[#6b6560] text-lg leading-relaxed max-w-lg">
                With 10 years of company experience and team members bringing up to 30 years of construction expertise,
                Padilla's Prestige Remodeling delivers professional results you can trust.
              </p>
            </motion.div>

            {/* Right - Details */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col justify-between"
            >
              <div className="space-y-8 mb-12">
                <p className="text-[#6b6560] leading-relaxed">
                  Proudly serving the entire Dallas-Fort Worth metroplex. We specialize in complete interior remodeling—kitchens,
                  bathrooms, flooring, and painting—as well as exterior transformations with our expert siding installations
                  using premium materials.
                </p>
                <p className="text-[#6b6560] leading-relaxed">
                  We don't cut corners. Every project receives our complete attention and professional craftsmanship,
                  delivering real, clean results that make your home look better, function better, and last longer—ultimately
                  increasing your property value.
                </p>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-8 border-t border-[#e8e4dc]">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
                  >
                    <div className="font-serif text-3xl md:text-4xl text-[#a65d3f] mb-2">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={statsInView} />
                    </div>
                    <div className="text-[11px] tracking-[0.15em] uppercase text-[#6b6560]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Full width image - Updated text */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-24 md:mt-32 relative h-[30vh] md:h-[40vh] overflow-hidden rounded-sm"
          >
            <img
              src="/assets/hero/beautiful_kitchen (1).jpeg"
              alt="Professional remodeling craftsmanship"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-[#1a1a1a] to-transparent">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[11px] tracking-[0.3em] uppercase text-[#c4bdb2]">Our Promise</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#f8f6f1] mt-2">
                    Impeccable results, no shortcuts
                  </h3>
                </div>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hidden md:flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-[#f8f6f1] hover:text-[#a65d3f] transition-colors duration-300"
                >
                  Get Free Estimate
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
