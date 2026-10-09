import { Play, Apple } from 'lucide-react'
import { cn } from '@/lib/utils'

export const STORE_LINKS = {
  google: 'https://play.google.com/store/apps/details?id=com.gof.global',
  apple: 'https://apps.apple.com/app/id6443575749',
}

export function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      <a
        href={STORE_LINKS.google}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-md border border-border bg-background/70 px-4 py-2.5 backdrop-blur transition-colors hover:border-primary hover:bg-background"
      >
        <Play className="size-5 fill-foreground text-foreground transition-colors group-hover:fill-primary group-hover:text-primary" aria-hidden="true" />
        <span className="flex flex-col leading-tight">
          <span className="text-xs text-muted-foreground">{"Google Play'den"}</span>
          <span className="text-sm font-bold">Hemen İndir</span>
        </span>
      </a>
      <a
        href={STORE_LINKS.apple}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-md border border-border bg-background/70 px-4 py-2.5 backdrop-blur transition-colors hover:border-primary hover:bg-background"
      >
        <Apple className="size-5 text-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
        <span className="flex flex-col leading-tight">
          <span className="text-xs text-muted-foreground">{"App Store'dan"}</span>
          <span className="text-sm font-bold">Hemen İndir</span>
        </span>
      </a>
    </div>
  )
}
