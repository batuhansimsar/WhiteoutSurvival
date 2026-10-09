'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Category = 'Duyuru' | 'Etkinlik' | 'Güncelleme'

const NEWS: { title: string; category: Category; date: string; excerpt: string }[] = [
  {
    title: 'Güncelleme: Yeni Kahraman ve Kış Festivali',
    category: 'Güncelleme',
    date: '3 Ekim 2026',
    excerpt: 'Yeni nesil kahramanlar, fırın seviyesi iyileştirmeleri ve ittifak savaşlarında denge düzenlemeleri.',
  },
  {
    title: 'Geliştirici Geri Bildirimi: Ekim',
    category: 'Duyuru',
    date: '28 Eylül 2026',
    excerpt: 'Topluluktan gelen önerileri inceledik. Önümüzdeki aylarda gelecek değişikliklere göz atın.',
  },
  {
    title: 'Kar Fırtınası Etkinliği Başlıyor',
    category: 'Etkinlik',
    date: '22 Eylül 2026',
    excerpt: 'Fırtına boyunca kaynak topla, ittifakınla birlikte ödülleri paylaş ve sıralamada yüksel.',
  },
  {
    title: 'Satın alım geçmişime nasıl bakabilirim?',
    category: 'Duyuru',
    date: '15 Eylül 2026',
    excerpt: 'Oyun içi ayarlar menüsünden geçmiş işlemlerinizi adım adım nasıl görüntüleyeceğinizi anlattık.',
  },
  {
    title: 'Devlet Savaşı: Yeni Sezon Kuralları',
    category: 'Etkinlik',
    date: '9 Eylül 2026',
    excerpt: 'Sezon ödülleri, eşleştirme sistemi ve bölge kontrolüne dair tüm yenilikler.',
  },
]

const TABS = ['Tümü', 'Duyuru', 'Etkinlik', 'Güncelleme'] as const

export function NewsSection() {
  const [tab, setTab] = useState<(typeof TABS)[number]>('Tümü')
  const items = tab === 'Tümü' ? NEWS : NEWS.filter((n) => n.category === tab)
  const [featured, ...rest] = items

  return (
    <section id="haberler" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-3">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Kamp Panosu</p>
            <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">Haberler</h2>
          </div>
          <div role="tablist" aria-label="Haber kategorileri" className="flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t}
                role="tab"
                type="button"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors',
                  tab === t
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border text-muted-foreground hover:text-foreground',
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div role="tabpanel" className="grid gap-4 lg:grid-cols-5">
          {featured && (
            <article className="group relative flex flex-col justify-end gap-4 overflow-hidden rounded-xl border border-border bg-card p-6 lg:col-span-2 lg:min-h-96 md:p-8">
              <div className="snow pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-sm bg-primary px-2 py-0.5 font-bold uppercase text-primary-foreground">
                    {featured.category}
                  </span>
                  <time className="text-muted-foreground">{featured.date}</time>
                </div>
                <h3 className="font-display text-3xl font-bold uppercase leading-tight text-balance">
                  <a href="#" className="after:absolute after:inset-0">
                    {featured.title}
                  </a>
                </h3>
                <p className="leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                <span className="flex items-center gap-1 text-sm font-semibold text-primary">
                  Devamını oku
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </article>
          )}

          <ul className="flex flex-col divide-y divide-border rounded-xl border border-border lg:col-span-3">
            {rest.length === 0 && (
              <li className="p-6 text-sm text-muted-foreground">Bu kategoride başka haber yok.</li>
            )}
            {rest.map((n) => (
              <li key={n.title}>
                <a
                  href="#"
                  className="group flex items-start justify-between gap-4 p-5 transition-colors hover:bg-card md:p-6"
                >
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="font-bold uppercase tracking-wider text-accent">{n.category}</span>
                      <time className="text-muted-foreground">{n.date}</time>
                    </div>
                    <h3 className="font-semibold leading-snug md:text-lg">{n.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{n.excerpt}</p>
                  </div>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
