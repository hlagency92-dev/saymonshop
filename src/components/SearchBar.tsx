import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const categories = [
  "Toutes Catégories",
  "Caméra",
  "Objectifs",
  "Son & Audio",
  "Trépied & Stand",
  "Stabilisateur",
  "Accessoires",
];

export default function SearchBar() {
  const [selectedCat, setSelectedCat] = useState("Toutes Catégories");
  const [catOpen, setCatOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="bg-background-secondary border-b border-border py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-stretch gap-0 rounded-lg overflow-hidden border border-border focus-within:border-primary transition-colors">
          {/* Category selector */}
          <div className="relative">
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="flex items-center gap-2 px-4 h-full bg-muted text-foreground-secondary hover:text-foreground text-sm font-medium whitespace-nowrap border-r border-border transition-colors min-h-[44px]"
            >
              {selectedCat}
              <ChevronDown size={14} className={`transition-transform ${catOpen ? "rotate-180" : ""}`} />
            </button>
            {catOpen && (
              <div className="dropdown-menu-dark absolute top-full left-0 min-w-52 py-2 z-50">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-muted ${
                      selectedCat === cat ? "text-primary" : "text-foreground-secondary hover:text-foreground"
                    }`}
                    onClick={() => { setSelectedCat(cat); setCatOpen(false); }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit, une marque..."
            className="flex-1 bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted focus:outline-none min-w-0"
          />

          {/* Search button */}
          <button className="bg-primary hover:bg-primary-dark px-6 py-3 text-primary-foreground font-semibold text-sm uppercase tracking-wide transition-colors flex items-center gap-2 whitespace-nowrap">
            <Search size={16} />
            <span className="hidden sm:inline">Rechercher</span>
          </button>
        </div>
      </div>
    </div>
  );
}
