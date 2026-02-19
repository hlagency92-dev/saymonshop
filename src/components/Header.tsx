import { useState } from "react";
import { ShoppingCart, Menu, X, ChevronDown, Camera } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { slugify } from "@/lib/slug";

const navItems = [
  { label: "Accueil", href: "/" as const },
  {
    label: "Caméra",
    category: "Caméra",
    dropdown: ["Canon", "Nikon", "Sony"],
  },
  {
    label: "Objectifs",
    category: "Objectifs",
    dropdown: ["Canon", "Nikon", "Sony", "Autre marque"],
  },
  { label: "Trépied & Stand", category: "Trépied" },
  { label: "Sons & Audios", category: "Son & Audio" },
  { label: "Stabilisateur", category: "Stabilisateur" },
];

export default function Header() {
  const { totalItems, totalPrice, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Camera size={18} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-widest text-foreground">
                SAYMON<span className="text-primary"></span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */} 
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href ?? `/catalog/${slugify(item.category ?? "")}`}
                  className="nav-link flex items-center gap-1 px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={14} className="text-foreground-muted group-hover:text-primary transition-colors" />}
                </Link>
                {item.dropdown && activeDropdown === item.label && (
                  <div className="dropdown-menu-dark absolute top-full left-0 min-w-44 py-2 z-50 animate-fade-up">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub}
                        to={`/catalog/${slugify(item.category ?? item.label)}/${slugify(sub)}`}
                        className="block px-4 py-2 text-sm text-foreground-secondary hover:text-primary hover:bg-muted transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            
            <button
              onClick={openCart}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors relative"
            >
              <div className="relative">
                <ShoppingCart size={20} className="text-foreground" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold pulse-red">
                    {totalItems}
                  </span>
                )}
              </div>
              {totalItems > 0 && (
                <span className="hidden md:block text-sm font-semibold text-primary">
                  {totalPrice.toLocaleString("fr-FR")} €
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background-secondary border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col">
                <Link
                  to={item.href ?? `/catalog/${slugify(item.category ?? "")}`}
                  className="block px-4 py-3 text-sm text-foreground-secondary hover:text-primary hover:bg-muted rounded-lg transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown?.map((sub) => (
                  <Link
                    key={`${item.label}-${sub}`}
                    to={`/catalog/${slugify(item.category ?? item.label)}/${slugify(sub)}`}
                    className="block px-8 py-2 text-sm text-foreground-muted hover:text-primary hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
