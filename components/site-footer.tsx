import { Snowflake } from 'lucide-react'

const SOCIALS = [
  { label: 'Discord', href: 'https://discord.com/invite/whiteoutsurvival' },
  { label: 'Facebook', href: 'https://www.facebook.com/WhiteoutSurvival' },
  { label: 'Instagram', href: 'https://www.instagram.com/whiteoutsurvival/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@whiteoutsurvival' },
  { label: 'X', href: 'https://x.com/WhiteoutSurviv' },
  { label: 'YouTube', href: 'https://www.youtube.com/@WhiteoutSurvival' },
]

const LEGAL = ['Hizmet Şartları', 'Gizlilik Politikası', 'Hükümler ve Koşullar']

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <Snowflake className="size-6 text-accent" aria-hidden="true" />
            <span lang="en" className="font-display text-xl font-bold uppercase tracking-wide">
              Whiteout <span className="text-primary">Survival</span>
            </span>
          </div>
          <nav aria-label="Sosyal medya">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l}>
                <a href="#" className="transition-colors hover:text-foreground">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <p>{'Copyright © 2022–2026 CENTURY GAMES. Tüm hakları saklıdır.'}</p>
        </div>
      </div>
    </footer>
  )
}
