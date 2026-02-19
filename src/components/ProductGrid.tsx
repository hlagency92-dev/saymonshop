import { useState } from "react";
import { SlidersHorizontal, LayoutGrid, List } from "lucide-react";
import ProductCard from "./ProductCard";
import { products, brands } from "@/data/products";

const SORT_OPTIONS = [
  { value: "default", label: "Par défaut" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "discount", label: "Promos" },
];
const SHOW_OPTIONS = [8, 12, 24, 40];

export default function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [onlyOnSale, setOnlyOnSale] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [showCount, setShowCount] = useState(40);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  let filtered = activeFilter === "Tous"
    ? products
    : activeFilter === "Caméra"
      ? products.filter((p) => p.category === "Caméra")
      : products.filter((p) => p.brand === activeFilter || p.category === activeFilter);

  if (onlyOnSale) {
    filtered = filtered.filter((p) => p.discount != null && p.discount > 0);
  }

  if (sortBy === "price-asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === "discount") {
    filtered = [...filtered].sort((a, b) => (b.discount ?? 0) - (a.discount ?? 0));
  }

  const displayed = filtered.slice(0, showCount);

  const filterOptions = ["Tous", "Caméra", ...brands.filter((b) => b !== "Tous")];

  return (
    <section className="py-16 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Catalogue</p>
            <h2 className="section-title">Nos Produits</h2>
          </div>

          {/* Filtres par marque / catégorie */}
          <div className="flex items-center gap-2 flex-wrap">
            <SlidersHorizontal size={16} className="text-foreground-muted" />
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-200 border ${
                  activeFilter === opt
                    ? "bg-primary text-primary-foreground border-primary shadow-glow-red-sm"
                    : "bg-transparent text-foreground-secondary border-border hover:border-primary hover:text-primary"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Barre d'outils (style screenshot) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 py-3 border-y border-border">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-primary/20 text-primary" : "text-foreground-muted hover:text-foreground"}`}
              aria-label="Vue grille"
            >
              <LayoutGrid size={18} />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-primary/20 text-primary" : "text-foreground-muted hover:text-foreground"}`}
              aria-label="Vue liste"
            >
              <List size={18} />
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-foreground-secondary">
              <input
                type="checkbox"
                checked={onlyOnSale}
                onChange={(e) => setOnlyOnSale(e.target.checked)}
                className="rounded border-border accent-primary"
              />
              Afficher uniquement les produits en promo
            </label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-foreground-muted">Trier par :</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-background-secondary border border-border rounded-lg px-3 py-1.5 text-sm text-foreground focus:outline-none focus:border-primary"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-foreground-muted">Afficher :</span>
              <select
                value={showCount}
                onChange={(e) => setShowCount(Number(e.target.value))}
                className="bg-background-secondary border border-border rounded-lg px-3 py-1.5 text-sm text-foreground focus:outline-none focus:border-primary"
              >
                {SHOW_OPTIONS.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grille ou liste */}
        <div
          className={
            viewMode === "list"
              ? "flex flex-col gap-4"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          }
        >
          {displayed.map((product, idx) => (
            <div
              key={product.id}
              className={`animate-fade-up ${viewMode === "list" ? "flex" : ""}`}
              style={{ animationDelay: `${Math.min(idx * 0.05, 0.5)}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {displayed.length === 0 && (
          <p className="text-center text-foreground-muted py-12">Aucun produit ne correspond à vos critères.</p>
        )}

        {/* Voir plus */}
        {filtered.length > showCount && (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setShowCount((n) => Math.min(n + 20, filtered.length))}
              className="btn-outline px-10"
            >
              Voir plus de produits
            </button>
          </div>
        )}

        {displayed.length > 0 && filtered.length <= showCount && (
          <div className="text-center mt-12">
            <button type="button" className="btn-outline px-10">
              Voir plus de produits
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
