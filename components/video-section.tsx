"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
const videos = [
  { id: 1, src: "/assets/video/WhatsApp Video 2026-01-07 at 1.54.47 PM.mp4" },
  { id: 2, src: "/assets/video/WhatsApp Video 2026-01-07 at 1.55.04 PM.mp4" },
  { id: 3, src: "/assets/video/WhatsApp Video 2026-01-07 at 1.55.21 PM.mp4" },
  { id: 4, src: "/assets/video/WhatsApp Video 2026-01-10 at 7.54.58 PM.mp4" },
  { id: 5, src: "/assets/video/WhatsApp Video 2026-01-10 at 8.04.59 PM.mp4" },
]

export function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="video" className="py-24 md:py-40 bg-[#1a1a1a] relative overflow-hidden" ref={ref}>
      {/* Background image - translucent */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/stu.png"
          alt=""
          fill
          className="object-cover"
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
              Watch how we transform homes throughout the DFW metroplex with professional remodeling services.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Video Grid */}
      <div className="px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className="group relative w-full"
              >
                <div className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-black/20">
                  <video
                    controls
                    className="h-full w-full object-contain bg-black"
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
