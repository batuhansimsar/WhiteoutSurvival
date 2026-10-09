'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Snowflake } from 'lucide-react'
import { cn } from '@/lib/utils'
import { STORE_LINKS } from './store-buttons'

const NAV = [
  { href: '#haberler', label: 'Haberler' },
  { href: '#kahramanlar', label: 'Kahramanlar' },
  { href: '#ozellikler', label: 'Oyun Özellikleri' },
  { href: '#indir', label: 'İndir' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open ? 'border-b border-border bg-background/85 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#" className="flex items-center gap-2" aria-label="Whiteout Survival ana sayfa">
          <Snowflake className="size-6 text-accent" aria-hidden="true" />
          <span lang="en" className="font-display text-xl font-bold uppercase tracking-wide">
            Whiteout <span className="text-primary">Survival</span>
          </span>
        </a>

        <nav aria-label="Ana menü" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={STORE_LINKS.google}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-primary px-4 py-2 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Ücretsiz Oyna
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            className="rounded-md p-2 text-foreground md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobil menü" className="border-t border-border md:hidden">
          <ul className="flex flex-col px-4 py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-lg uppercase tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
