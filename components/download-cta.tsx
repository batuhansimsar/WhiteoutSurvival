import Image from 'next/image'
import { StoreButtons } from './store-buttons'

export function DownloadCta() {
  return (
    <section id="indir" className="scroll-mt-16 px-4 pb-20 md:px-8 md:pb-28">
      <div className="relative isolate mx-auto flex max-w-7xl flex-col items-center gap-6 overflow-hidden rounded-2xl border border-border px-6 py-20 text-center md:py-28">
        <Image
          src="/images/hero-city.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[50%_45%]"
        />
        <div className="absolute inset-0 -z-10 bg-background/75" aria-hidden="true" />
        <div className="snow pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
        <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Ücretsiz • iOS & Android</p>
        <h2 className="max-w-3xl font-display text-4xl font-bold uppercase leading-tight text-balance md:text-6xl">
          Fırın seni bekliyor, <span className="text-primary">Şef.</span>
        </h2>
        <p className="max-w-lg leading-relaxed text-muted-foreground">
          Milyonlarca hayatta kalana katıl. Şehrini kur, kahramanlarını topla ve buz çağına meydan oku.
        </p>
        <StoreButtons className="justify-center" />
      </div>
    </section>
  )
}
