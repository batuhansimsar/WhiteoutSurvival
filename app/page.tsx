import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { NewsSection } from '@/components/news-section'
import { HeroesSection } from '@/components/heroes-section'
import { FeaturesSection } from '@/components/features-section'
import { DownloadCta } from '@/components/download-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <NewsSection />
        <HeroesSection />
        <FeaturesSection />
        <DownloadCta />
      </main>
      <SiteFooter />
    </>
  )
}
