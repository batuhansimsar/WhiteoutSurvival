'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Shield, Swords, Crosshair } from 'lucide-react'
import { cn } from '@/lib/utils'

type HeroClass = 'Piyade' | 'Mızrakçı' | 'Nişancı'

const CLASS_ICON = { Piyade: Shield, Mızrakçı: Swords, Nişancı: Crosshair }

const HEROES: {
  name: string
  title: string
  cls: HeroClass
  image: string
  bio: string
  skills: { name: string; desc: string }[]
  stats: { label: string; value: number }[]
}[] = [
  {
    name: 'Jerónimo',
    title: 'Kılıç Ustası',
    cls: 'Piyade',
    image: '/images/hero-jeronimo.png',
    bio: 'Fırtınanın ortasında bile kılıcını indirmeyen eski bir paralı asker. Cephede durur, ordusunu ileri taşır.',
    skills: [
      { name: 'Savaş Ritmi', desc: 'Tüm birliklerin saldırı gücünü artırır.' },
      { name: 'Kılıç Fırtınası', desc: 'Önündeki düşmanlara yüksek alan hasarı verir.' },
    ],
    stats: [
      { label: 'Saldırı', value: 92 },
      { label: 'Savunma', value: 78 },
      { label: 'Destek', value: 64 },
    ],
  },
  {
    name: 'Natalia',
    title: 'Vahşi Kraliçe',
    cls: 'Piyade',
    image: '/images/hero-natalia.png',
    bio: 'Kurtlarla büyüyen, buzun dilini bilen bir savaşçı. Sadık kurdu ile düşman saflarını darmadağın eder.',
    skills: [
      { name: 'Sürü Çağrısı', desc: 'Kurdunu savaşa çağırarak düşmanları sersemletir.' },
      { name: 'Vahşi Pençe', desc: 'Birliklerin aldığı hasarı azaltır.' },
    ],
    stats: [
      { label: 'Saldırı', value: 84 },
      { label: 'Savunma', value: 90 },
      { label: 'Destek', value: 70 },
    ],
  },
  {
    name: 'Molly',
    title: 'Kar Topu Ustası',
    cls: 'Mızrakçı',
    image: '/images/hero-molly.png',
    bio: 'Küçük ama korkusuz. Buz kürelerini ustalıkla fırlatır ve düşmanlarını yerinde dondurur.',
    skills: [
      { name: 'Buz Küresi', desc: 'Hedefi kısa süreliğine dondurur.' },
      { name: 'Kar Yağmuru', desc: 'Düşman hızını geniş alanda düşürür.' },
    ],
    stats: [
      { label: 'Saldırı', value: 80 },
      { label: 'Savunma', value: 62 },
      { label: 'Destek', value: 88 },
    ],
  },
  {
    name: 'Zinman',
    title: 'Baş Mühendis',
    cls: 'Nişancı',
    image: '/images/hero-zinman.png',
    bio: 'Fırının kalbini o tamir eder. İnşaatları hızlandırır, savaşta ise ağır topçuyla uzaktan vurur.',
    skills: [
      { name: 'Usta Eller', desc: 'İnşaat süresini ve kaynak maliyetini düşürür.' },
      { name: 'Topçu Ateşi', desc: 'Uzak menzilli birliklerin hasarını artırır.' },
    ],
    stats: [
      { label: 'Saldırı', value: 76 },
      { label: 'Savunma', value: 68 },
      { label: 'Destek', value: 95 },
    ],
  },
]

export function HeroesSection() {
  const [active, setActive] = useState(0)
  const hero = HEROES[active]
  const ClassIcon = CLASS_ICON[hero.cls]

  return (
    <section id="kahramanlar" className="scroll-mt-16 border-y border-border bg-card/40 py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-8">
        <div className="flex flex-col gap-3">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Kahraman Önizlemesi</p>
          <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">Ekibini topla</h2>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-xl border border-border justify-self-center lg:max-w-none">
            {HEROES.map((h, i) => (
              <Image
                key={h.name}
                src={h.image}
                alt={`${h.name}, ${h.title}`}
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                className={cn(
                  'object-cover transition-all duration-700',
                  i === active ? 'scale-100 opacity-100' : 'scale-105 opacity-0',
                )}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-6 pt-24">
              <p className="font-display text-6xl font-bold uppercase leading-none md:text-7xl">{hero.name}</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div role="tablist" aria-label="Kahraman seç" className="grid grid-cols-4 gap-3">
              {HEROES.map((h, i) => (
                <button
                  key={h.name}
                  role="tab"
                  type="button"
                  aria-selected={i === active}
                  aria-label={h.name}
                  onClick={() => setActive(i)}
                  className={cn(
                    'relative aspect-square overflow-hidden rounded-lg border-2 transition-all',
                    i === active ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100',
                  )}
                >
                  <Image src={h.image} alt="" fill sizes="120px" className="object-cover object-top" />
                </button>
              ))}
            </div>

            <div key={hero.name} role="tabpanel" className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 rounded-sm border border-primary/50 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  <ClassIcon className="size-3.5" aria-hidden="true" />
                  {hero.cls}
                </span>
                <span className="text-sm text-muted-foreground">{hero.title}</span>
              </div>
              <p className="text-lg leading-relaxed text-pretty">{hero.bio}</p>

              <dl className="flex flex-col gap-3">
                {hero.stats.map((s) => (
                  <div key={s.label} className="grid grid-cols-[5rem_1fr_2.5rem] items-center gap-3 text-sm">
                    <dt className="text-muted-foreground">{s.label}</dt>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary" aria-hidden="true">
                      <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${s.value}%` }} />
                    </div>
                    <dd className="text-right font-display font-semibold">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className="grid gap-3 sm:grid-cols-2">
                {hero.skills.map((sk) => (
                  <li key={sk.name} className="flex flex-col gap-1 rounded-lg border border-border bg-background/60 p-4">
                    <span className="font-display text-lg uppercase tracking-wide">{sk.name}</span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{sk.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
