"use client"
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

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#1a1a1a] text-[#f8f6f1] relative">
      {/* Main footer content */}
      <div className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          {/* Top section - Large CTA - Updated text */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-16 md:pb-24 border-b border-[#333]">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                Ready to start
                <br />
                <span className="italic text-[#a65d3f]">your project?</span>
              </h2>
              <p className="text-[#6b6560] max-w-md">
                Let's discuss your remodeling project and bring your vision to life with quality craftsmanship.
              </p>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-3 text-[13px] tracking-[0.15em] uppercase text-[#1a1a1a] bg-[#f8f6f1] px-8 py-4 hover:bg-[#a65d3f] hover:text-[#f8f6f1] transition-all duration-500 self-start lg:self-auto"
            >
              Get Free Estimate
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Middle section - Links and info - Updated brand and contact info */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16 md:py-24">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Image
                  src="/assets/logo/logo.png"
                  alt="Padilla's Prestige Remodeling"
                  width={612}
                  height={408}
                  className="w-[450px] md:w-[600px] h-auto"
                />
              </div>
              <p className="text-[#6b6560] max-w-sm leading-relaxed mb-8">
                Professional interior and exterior remodeling services for Dallas-Fort Worth homeowners who demand
                quality craftsmanship and impeccable results.
              </p>
              <div className="flex gap-6 text-[11px] tracking-[0.15em] uppercase text-[#6b6560]">
                <span>10+ Years</span>
                <span>•</span>
                <span>DFW Metroplex</span>
                <span>•</span>
                <span>Free Estimates</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-[11px] tracking-[0.3em] uppercase text-[#6b6560] mb-6">Navigation</h3>
              <ul className="space-y-4">
                {["Projects", "Services", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-[#c4bdb2] hover:text-[#a65d3f] transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact - Updated emails */}
            <div>
              <h3 className="text-[11px] tracking-[0.3em] uppercase text-[#6b6560] mb-6">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+12148105012"
                    className="text-[#c4bdb2] hover:text-[#a65d3f] transition-colors duration-300 text-sm"
                  >
                    +1 (214) 810-5012
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:padillajose662@gmail.com"
                    className="text-[#c4bdb2] hover:text-[#a65d3f] transition-colors duration-300 text-sm"
                  >
                    padillajose662@gmail.com
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href="https://www.facebook.com/profile.php?id=61582726610574"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c4bdb2] hover:text-[#a65d3f] transition-colors duration-300"
                      aria-label="Follow us on Facebook"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://share.google/2z9DaSTKEWF0oiuhK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c4bdb2] hover:text-[#a65d3f] transition-colors duration-300"
                      aria-label="Review us on Google"
                    >
                      <GoogleIcon className="w-6 h-6" />
                    </a>
                  </div>
                </li>
                <li className="pt-2 text-[#6b6560]">
                  Dallas-Fort Worth Metroplex
                  <br />
                  Serving all of DFW
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section - Updated copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-[#333]">
            <div className="text-[#6b6560] text-sm">
              © {new Date().getFullYear()} Padilla's Prestige Remodeling. All rights reserved.
            </div>
            <button
              onClick={scrollToTop}
              className="text-[11px] tracking-[0.15em] uppercase text-[#6b6560] hover:text-[#a65d3f] transition-colors duration-300 flex items-center gap-2"
            >
              Back to top
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
