"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Aerial View of Red Tile Rooftops",
    category: "Roofing",
    year: "2024",
    image: "/assets/roofing/aerial-shot-rooftops-city-buildings-with-red-shingles.jpg",
  },
  {
    id: 2,
    title: "Brown Shingled Roof Detail",
    category: "Roofing",
    year: "2024",
    image: "/assets/roofing/brown-shingled-roof-with-brown-shingle-roof.jpg",
  },
  {
    id: 3,
    title: "Modern Home Exterior",
    category: "Roofing",
    year: "2024",
    image: "/assets/roofing/exterior-home.jpg",
  },
  {
    id: 4,
    title: "Professional Roof Tile Installation",
    category: "Roofing",
    year: "2024",
    image: "/assets/roofing/freepik__8k-photorealistic-cinematic-photography-intimate-c__6846.png",
  },
  {
    id: 5,
    title: "Residential Roof Detail",
    category: "Roofing",
    year: "2024",
    image: "/assets/roofing/freepik__candid-i-with-natural-textures-and-highly-realisti__6843.png",
  },
  {
    id: 6,
    title: "Closeup Roof Tile Photography",
    category: "Roofing",
    year: "2024",
    image: "/assets/roofing/freepik__cinematic-closeup-photography-8k-detailed-shot-of-__6847.png",
  },
  {
    id: 7,
    title: "Aerial Roof Installation View",
    category: "Roofing",
    year: "2024",
    image: "/assets/roofing/freepik__cinematic-drone-photography-8k-photorealistic-aeri__6842.png",
  },
  {
    id: 8,
    title: "Macro Roof Detail Shot",
    category: "Roofing",
    year: "2024",
    image: "/assets/roofing/freepik__cinematic-macro-photography-8k-closeup-detail-shot__6845.png",
  },
  {
    id: 9,
    title: "Detailed Roof Closeup",
    category: "Roofing",
    year: "2024",
    image: "/assets/roofing/freepik__cinematic-macro-photography-8k-detailed-closeup-sh__6848.png",
  },
  {
    id: 10,
    title: "Eye-Level Roof Photography",
    category: "Roofing",
    year: "2024",
    image: "/assets/roofing/freepik__photorealistic-8k-cinematic-photography-eyelevel-f__6844.png",
  },
  {
    id: 11,
    title: "Contemporary Black Roof Installation",
    category: "Roofing",
    year: "2024",
    image: "/assets/roofing/house-with-black-roof-brown-door-with-window-that-says-welcome-right.jpg",
  },
  {
    id: 12,
    title: "Low Angle Modern House Roof",
    category: "Roofing",
    year: "2024",
    image: "/assets/roofing/low-angle-modern-house-roof.jpg",
  },
  {
    id: 13,
    title: "Tile Roof Texture and Pattern",
    category: "Roofing",
    year: "2024",
    image: "/assets/roofing/tile-roof-house-home-textures.jpg",
  },
]

export function RoofingProjects() {
  const ref = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth
      const scrollAmount = containerWidth
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="roofing-projects" className="py-24 md:py-40 bg-[#f8f6f1] relative overflow-hidden" ref={ref}>
      <div className="px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-16 md:mb-24"
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6b6560]">(Selected Work)</span>
            <span className="flex-1 h-px bg-[#e8e4dc]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6b6560]">07</span>
          </motion.div>

          {/* Title row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#1a1a1a] leading-[1.1]"
            >
              Roofing
              <br />
              <span className="italic text-[#a65d3f]">projects</span>
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Horizontal scrolling projects */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        ref={scrollRef}
        className="horizontal-scroll pb-4 pl-6 md:pl-12"
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="group relative w-screen sm:w-[60vw] md:w-[45vw] lg:w-[calc((100vw-6rem-4rem)/3)] flex-shrink-0 px-6 sm:px-0 sm:mr-6 md:mr-8"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/20 transition-colors duration-500" />

              {/* Hover overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <button className="flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-[#f8f6f1] bg-[#a65d3f] px-6 py-3">
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* End spacer */}
        <div className="w-6 md:w-12 flex-shrink-0" />
      </motion.div>

      {/* Navigation arrows - centered below carousel */}
      <div className="px-6 md:px-12 mt-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-[#1a1a1a] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-[#f8f6f1] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-[#1a1a1a] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-[#f8f6f1] transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
