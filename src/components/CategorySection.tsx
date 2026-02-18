import { categories } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function CategorySection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Collections</p>
            <h2 className="section-title">Nos Catégories</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary transition-colors">
            Voir tout <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, idx) => (
            <a
              key={cat.id}
              href="#"
              className="relative rounded-xl overflow-hidden group cursor-pointer block"
              style={{ height: idx === 0 ? "380px" : "260px" }}
            >
              {/* Background image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-500" />

              {/* Red border on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary transition-colors duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">
                  {cat.count} produits
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {cat.name}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground-secondary group-hover:text-primary transition-colors">
                  Explorer <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
