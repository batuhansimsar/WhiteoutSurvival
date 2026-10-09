import Image from 'next/image'

const FEATURES = [
  {
    title: 'Şehrini inşa et',
    body: 'Odun kes, kömür çıkar, avlan. Hayatta kalanlara iş ver, fırını büyüt ve küçük kampını buzun ortasında parlayan bir şehre dönüştür.',
    image: '/images/feature-build.png',
    alt: 'Karlı bir kasabada kaynak toplayan işçiler ve ortada parlayan fırın',
  },
  {
    title: 'İttifakınla fethet',
    body: 'Dünyanın dört bir yanından oyuncularla ittifak kur. Birlikte savaş, bölgeleri ele geçir ve Devlet Savaşında tahtın sahibi ol.',
    image: '/images/feature-alliance.png',
    alt: 'Kuzey ışıkları altında buzdan kaleye yürüyen sancaklı bir ordu',
  },
  {
    title: 'Bilinmeyeni keşfet',
    body: 'Buz kanyonlarının derinliklerinde kayıp medeniyetlerin izlerini sür. Her keşif seni yeni kaynaklara ve sırlara götürür.',
    image: '/images/feature-explore.png',
    alt: 'Kızakla buz kanyonunda ilerleyen küçük bir keşif ekibi',
  },
]

export function FeaturesSection() {
  return (
    <section id="ozellikler" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 md:px-8">
        <div className="flex flex-col gap-3">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Oyun Özellikleri</p>
          <h2 className="max-w-2xl font-display text-4xl font-bold uppercase text-balance md:text-5xl">
            Soğuk acımasız. Sen daha da güçlüsün.
          </h2>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {FEATURES.map((f, i) => (
            <article key={f.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className={i % 2 === 1 ? 'md:order-2' : undefined}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
                  <Image
                    src={f.image}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-3xl font-bold uppercase md:text-4xl">{f.title}</h3>
                <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
