"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Plus, Star } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: "01",
    title: "Bathroom Remodeling",
    subtitle: "Luxury & Functionality",
    description:
      "Create your dream bathroom with our comprehensive remodeling services. We specialize in modern, functional designs that enhance comfort and add value to your home. From elegant tile work to premium fixtures, every element is installed with precision and care.",
    image: "/decorative-concrete-driveway-paving-residential-ho.jpg",
    video: "/assets/1/batroom_remodeling (1).mp4",
    featured: true,
    details: [
      "Complete Bathroom Renovations",
      "Shower & Tub Installation",
      "Tile & Stone Work",
      "Vanity & Countertop Installation",
      "Fixture & Plumbing Updates",
      "Custom Design Solutions",
    ],
  },
  {
    id: "02",
    title: "Kitchen Remodeling",
    subtitle: "Heart of Your Home",
    description:
      "Complete kitchen transformations that combine functionality with stunning design. From custom cabinetry and countertops to flooring and lighting, we handle every detail. Our personalized approach ensures your new kitchen reflects your style while maximizing space and increasing your home's value.",
    image: "/professional-tile-installation-ceramic-porcelain-b.jpg",
    video: "/assets/1/cocina_hermosa_de_una_casa_de_dallas.mp4",
    details: [
      "Custom Cabinet Installation",
      "Countertop Replacement (Granite, Quartz, Marble)",
      "Kitchen Flooring Installation",
      "Backsplash & Tile Work",
      "Lighting & Fixture Updates",
      "Complete Kitchen Renovations",
    ],
  },
  {
    id: "03",
    title: "Premium Siding Installation",
    subtitle: "Exterior Excellence",
    description:
      "Transform your home's exterior with our expert siding installation services. We specialize in high-quality siding materials that not only enhance curb appeal but also provide lasting protection and energy efficiency. Our meticulous installation process ensures durability and impeccable finishes that stand the test of time.",
    image: "/professional-stucco-application-smooth-finish-exte.jpg",
    video: "/assets/1/media.mp4",
    details: [
      "Vinyl Siding Installation",
      "Fiber Cement Siding",
      "Wood & Engineered Wood Siding",
      "Siding Repair & Replacement",
      "Weather-Resistant Materials",
      "Energy-Efficient Solutions",
      "FREE Estimates on All Siding Projects",
    ],
  },
  {
    id: "04",
    title: "Flooring & Painting",
    subtitle: "Foundation & Finish",
    description: "Professional flooring installation and painting services that bring your vision to life. We work with premium materials and proven techniques to deliver flawless results that enhance every room in your home.",
    image: "/professional-landscaping-residential-property-san-.jpg",
    video: "/assets/1/2.2.mp4",
    details: [
      "Hardwood Flooring Installation",
      "Tile & Laminate Flooring",
      "Interior Painting",
      "Exterior Painting",
      "Surface Preparation & Finishing",
      "Color Consultation Available",
    ],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeService, setActiveService] = useState<string | null>("01") // Siding open by default

  return (
    <section id="services" className="py-24 md:py-40 bg-[#1a1a1a] relative" ref={ref}>
      <div className="px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-16 md:mb-24"
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c4bdb2]">(Our Services)</span>
            <span className="flex-1 h-px bg-[#333]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c4bdb2]">02</span>
          </motion.div>

          {/* Title - Updated */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#f8f6f1] leading-[1.1]">
              Professional <span className="italic text-[#a65d3f]">remodeling</span>
              <br className="hidden md:block" /> that transforms homes
            </h2>
          </motion.div>

          {/* Services List - Accordion style */}
          <div className="border-t border-[#333]">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                className="border-b border-[#333]"
              >
                <button
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  className="w-full py-8 md:py-10 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="text-[#6b6560] text-sm">{service.id}</span>
                    <div className="text-left">
                      <div className="flex items-center gap-3">
                        <h3 className="font-serif text-2xl md:text-4xl text-[#f8f6f1] group-hover:text-[#a65d3f] transition-colors duration-500">
                          {service.title}
                        </h3>
                        {service.featured && (
                          <span className="flex items-center gap-1 text-[10px] tracking-[0.15em] uppercase text-[#a65d3f] border border-[#a65d3f] px-2 py-1">
                            <Star className="w-3 h-3 fill-current" />
                            Specialty
                          </span>
                        )}
                      </div>
                      <span className="text-[12px] tracking-[0.15em] uppercase text-[#6b6560] mt-1 block">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block text-[12px] tracking-[0.15em] uppercase text-[#6b6560] group-hover:text-[#a65d3f] transition-colors duration-300">
                      {activeService === service.id ? "Close" : "Learn More"}
                    </span>
                    <div
                      className={`w-10 h-10 border border-[#333] flex items-center justify-center transition-all duration-500 group-hover:border-[#a65d3f] ${activeService === service.id ? "bg-[#a65d3f] border-[#a65d3f]" : ""}`}
                    >
                      <Plus
                        className={`w-5 h-5 transition-all duration-500 ${activeService === service.id ? "rotate-45 text-[#f8f6f1]" : "text-[#f8f6f1]"}`}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeService === service.id ? "auto" : 0,
                    opacity: activeService === service.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-10 grid md:grid-cols-2 gap-8 md:gap-12 pl-12 md:pl-24">
                    <div>
                      <p className="text-[#c4bdb2] leading-relaxed mb-6">{service.description}</p>
                      {service.details && (
                        <ul className="space-y-2">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-[#6b6560] text-sm">
                              <span className="w-1.5 h-1.5 bg-[#a65d3f] rounded-full" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="aspect-[3/2] overflow-hidden">
                      {service.video ? (
                        <video
                          src={service.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 600px"
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA - Updated text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 md:mt-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          >
            <p className="text-[#6b6560] max-w-md">
              Ready to transform your home? Contact us today for a free estimate and discover how we can bring your vision to life.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-3 text-[13px] tracking-[0.15em] uppercase text-[#1a1a1a] bg-[#f8f6f1] px-8 py-4 hover:bg-[#a65d3f] hover:text-[#f8f6f1] transition-all duration-500"
            >
              Get Free Estimate
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
