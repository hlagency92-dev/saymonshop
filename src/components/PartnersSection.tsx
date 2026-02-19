type GlobModule = { default: string };

function getPartners(): string[] {
  const modules = import.meta.glob<GlobModule>("@/assets/Partners/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,svg,SVG}", {
    eager: true,
  });

  return Object.entries(modules)
    // Exclure le logo principal de Saymon du carrousel partenaires
    .filter(([path]) => !path.toLowerCase().includes("logosaymon"))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);
}

export default function PartnersSection() {
  const partners = getPartners();

  return (
    <section className="py-16 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Confiance</p>
          <h2 className="section-title">Nos partenaires</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {partners.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="h-12 sm:h-14 md:h-16 w-[120px] sm:w-[140px] md:w-[160px] flex items-center justify-center"
            >
              <img
                src={src}
                alt="Partenaire"
                loading="lazy"
                className="max-h-full max-w-full object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

