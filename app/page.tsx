import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { TileProjects } from "@/components/tile-projects"
import { ConcreteProjects } from "@/components/concrete-projects"
import { LandscapingProjects } from "@/components/landscaping-projects"
import { RoofingProjects } from "@/components/roofing-projects"
import { FencesProjects } from "@/components/fences-projects"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/mobile-cta-bar"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <TileProjects />
      <ConcreteProjects />
      <LandscapingProjects />
      <RoofingProjects />
      <FencesProjects />
      <Reviews />
      <Contact />
      <Footer />
      <MobileCTABar />
    </main>
  )
}
