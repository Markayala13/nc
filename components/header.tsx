"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Facebook } from "lucide-react"
import Image from "next/image"

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Google</title>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
)

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMenuOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = ["Projects", "Services", "About", "Contact"]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "bg-[#FFF8F0]/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-32 md:h-40">
          {/* Logo - Updated to Adrian Bravo brand */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center md:ml-0"
          >
            <Image
              src="/assets/logo/logo.png"
              alt="Padilla's Prestige Remodeling"
              width={500}
              height={500}
              className="w-32 md:w-40 h-auto"
              priority
            />
          </motion.div>

          {/* Desktop Nav */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="hidden lg:flex items-center gap-12"
          >
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="group relative text-[13px] tracking-[0.15em] uppercase text-[#4A5568] hover:text-[#D67D3E] transition-colors duration-500"
              >
                <span className="relative">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D67D3E] group-hover:w-full transition-all duration-500" />
                </span>
              </button>
            ))}
          </motion.nav>

          {/* CTA + Menu - Updated CTA text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex items-center gap-6"
          >
            <div className="hidden md:flex items-center gap-6 mr-2">
              <a
                href="https://www.facebook.com/profile.php?id=61582726610574"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A5568] hover:text-[#D67D3E] transition-colors duration-300 text-sm"
              >
                Follow us on Facebook
              </a>
              <a
                href="https://share.google/2z9DaSTKEWF0oiuhK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A5568] hover:text-[#D67D3E] transition-colors duration-300 text-sm"
              >
                Review us on Google
              </a>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex items-center gap-2 text-[13px] tracking-[0.15em] uppercase text-white bg-[#D67D3E] px-6 py-3 hover:bg-[#4A5568] transition-colors duration-500"
            >
              Free Estimate
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-px bg-[#4A5568] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span className={`w-6 h-px bg-[#4A5568] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span
                className={`w-6 h-px bg-[#4A5568] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </motion.div>
        </div>
      </header>

      {/* Full Screen Mobile Menu - Updated CTA text */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-[#D67D3E] flex items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="font-serif text-4xl text-white hover:text-[#4A5568] transition-colors duration-300"
                >
                  {item}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-col items-center gap-4 mt-4"
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61582726610574"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#4A5568] transition-colors text-lg"
                >
                  Follow us on Facebook
                </a>
                <a
                  href="https://share.google/2z9DaSTKEWF0oiuhK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#4A5568] transition-colors text-lg"
                >
                  Review us on Google
                </a>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={() => scrollToSection("contact")}
                className="mt-4 text-[13px] tracking-[0.15em] uppercase text-[#4A5568] bg-white px-8 py-4"
              >
                Free Estimate
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
