"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Front Yard Mulch & Plant Installation",
    category: "Landscaping",
    year: "2024",
    image: "/landscape1.png",
  },
  {
    id: 2,
    title: "Backyard Paver Patio Landscape",
    category: "Landscaping",
    year: "2024",
    image: "/landscape2.png",
  },
  {
    id: 3,
    title: "Garden Bed Mulch Installation",
    category: "Landscaping",
    year: "2024",
    image: "/landscape3.png",
  },
  {
    id: 4,
    title: "Residential Mulch Border Design",
    category: "Landscaping",
    year: "2024",
    image: "/landscape4.png",
  },
  {
    id: 5,
    title: "Backyard Lawn & Border Installation",
    category: "Landscaping",
    year: "2024",
    image: "/landscape5.png",
  },
  {
    id: 6,
    title: "Front Yard Shrub & Pathway Design",
    category: "Landscaping",
    year: "2024",
    image: "/landscape6.png",
  },
  {
    id: 7,
    title: "Professional Bush Pruning & Hedge Trimming",
    category: "Landscaping",
    year: "2024",
    image: "/landscape7.jpg",
  },
  {
    id: 8,
    title: "Asian Garden Pathway Design",
    category: "Landscaping",
    year: "2024",
    image: "/landscape8.jpg",
  },
  {
    id: 9,
    title: "Colorful Flower Garden Installation",
    category: "Landscaping",
    year: "2024",
    image: "/landscape9.jpg",
  },
  {
    id: 10,
    title: "Contemporary Artificial Grass Front Yard",
    category: "Landscaping",
    year: "2024",
    image: "/landscape10.jpg",
  },
  {
    id: 11,
    title: "Lush Green Lawn Care & Maintenance",
    category: "Landscaping",
    year: "2024",
    image: "/landscape11.jpg",
  },
  {
    id: 12,
    title: "Garden Planting & Flower Installation",
    category: "Landscaping",
    year: "2024",
    image: "/landscape12.jpg",
  },
]

export function LandscapingProjects() {
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
    <section id="landscaping-projects" className="py-24 md:py-40 bg-[#f8f6f1] relative overflow-hidden" ref={ref}>
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
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6b6560]">06</span>
          </motion.div>

          {/* Title row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#1a1a1a] leading-[1.1]"
            >
              Landscaping
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
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
            className="group relative w-screen sm:w-[60vw] md:w-[45vw] lg:w-[calc((100vw-6rem-4rem)/3)] flex-shrink-0 px-6 sm:px-0 sm:mr-6 md:mr-8"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-6">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
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

            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-1 group-hover:text-[#a65d3f] transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="text-[11px] tracking-[0.15em] uppercase text-[#6b6560]">{project.category}</span>
              </div>
              <span className="text-[11px] tracking-[0.15em] uppercase text-[#6b6560]">{project.year}</span>
            </div>
          </motion.div>
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
