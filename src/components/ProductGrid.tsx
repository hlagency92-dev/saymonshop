import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";
import { products, brands } from "@/data/products";

export default function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered = activeFilter === "Tous"
    ? products
    : products.filter((p) => p.brand === activeFilter || p.category === activeFilter);

  return (
    <section className="py-16 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Catalogue</p>
            <h2 className="section-title">Nos Produits</h2>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <SlidersHorizontal size={16} className="text-foreground-muted" />
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveFilter(brand)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-200 border ${
                  activeFilter === brand
                    ? "bg-primary text-primary-foreground border-primary shadow-glow-red-sm"
                    : "bg-transparent text-foreground-secondary border-border hover:border-primary hover:text-primary"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product, idx) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${idx * 0.07}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="btn-outline px-10">
            Voir Plus de Produits
          </button>
        </div>
      </div>
    </section>
  );
}
