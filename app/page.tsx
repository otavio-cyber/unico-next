import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { MissionSection } from "@/components/sections/mission-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { PurposeSection } from "@/components/sections/purpose-section"
import { StructureSection } from "@/components/sections/structure-section"
import { OperationSection } from "@/components/sections/operation-section"
import { QualitySection } from "@/components/sections/quality-section"
import { ESGSection } from "@/components/sections/esg-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <GallerySection />
      <PurposeSection />
      <StructureSection />
      <OperationSection />
      <QualitySection />
      <ESGSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
