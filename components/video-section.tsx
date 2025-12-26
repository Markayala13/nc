"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play } from "lucide-react"

export function VideoSection() {
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

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
              ref={videoRef}
              controls
              poster="/stu.png"
              className="w-full h-full object-cover"
              preload="metadata"
              loading="lazy"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/promo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play button overlay */}
            {!isPlaying && (
              <button
                onClick={handlePlayClick}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-300 group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#a65d3f] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-[#f8f6f1] fill-[#f8f6f1] ml-1" />
                </div>
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
