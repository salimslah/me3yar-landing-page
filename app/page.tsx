import { HeroSection } from '@/components/sections/hero-section'
import { SectorsSection } from '@/components/sections/sectors-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
// import { ProductShowcaseSection } from '@/components/sections/product-showcase-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { FaqSection } from '@/components/sections/faq-section'
import { CtaSection } from '@/components/sections/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <SectorsSection />
      <FeaturesSection />
      <HowItWorksSection />
      {/* <ProductShowcaseSection /> */}
      {/* <PricingSection /> */}
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
