import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { StoreButtons } from './store-buttons'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden pb-16 pt-28 md:items-center md:pb-24">
      <Image
        src="/images/hero-city.png"
        alt="Kar fırtınası altında, ortasında parlayan dev bir fırın kulesi olan hayatta kalanların yerleşimi"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[60%_55%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/40 to-background/30" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/30 to-transparent" aria-hidden="true" />
      <div className="snow pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="flex max-w-2xl flex-col gap-6">
          <p className="flex items-center gap-3 font-display text-sm uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            Dış sıcaklık: {'-72°C'}
          </p>
          <h1 className="font-display text-5xl font-bold uppercase leading-none tracking-tight text-balance sm:text-7xl lg:text-8xl">
            Dünya dondu.
            <br />
            <span className="text-primary">Ateşi sen yak.</span>
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            Buz ve karda destansı bir yolculuk başlıyor. Son fırını ayakta tut, hayatta kalanlara yuva kur ve
            ittifakınla birlikte donmuş toprakların hâkimi ol.
          </p>
          <StoreButtons />
        </div>
      </div>

      <a
        href="#haberler"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        Keşfet
        <ChevronDown className="size-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
