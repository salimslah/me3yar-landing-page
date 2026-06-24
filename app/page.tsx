import { HeroSection } from '@/components/sections/hero'
import { SectorsSection } from '@/components/sections/sectors'
import { FeaturesSection } from '@/components/sections/features'
import { HowItWorksSection } from '@/components/sections/how-it-works'
// import { ProductShowcaseSection } from '@/components/sections/product-showcase-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { FaqSection } from '@/components/sections/faq'
import { CtaSection } from '@/components/sections/cta'
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
