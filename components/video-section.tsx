"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Play } from "lucide-react"

export function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="video" className="py-24 md:py-40 bg-[#1a1a1a] relative overflow-hidden" ref={ref}>
      {/* Background image - translucent */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/stu.png"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
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
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c4bdb2]">(Our Work)</span>
            <span className="flex-1 h-px bg-[#333]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c4bdb2]">03</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12 md:mb-16 text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f8f6f1] leading-[1.1] mb-6">
              See our
              <br />
              <span className="italic text-[#a65d3f]">craftsmanship</span>
            </h2>
            <p className="text-[#c4bdb2] text-lg max-w-2xl mx-auto">
              Watch how we transform homes throughout San Diego County with professional stucco, tile, and construction services.
            </p>
          </motion.div>

          {/* Video container */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative aspect-[9/16] w-full max-w-[380px] md:max-w-[450px] max-h-[680px] md:max-h-[800px] mx-auto overflow-hidden rounded-sm"
          >
            <video
              controls
              className="w-full h-full object-cover"
              preload="none"
              loading="lazy"
            >
              <source src="/promo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
