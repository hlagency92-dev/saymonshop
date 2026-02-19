import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { slugify } from "@/lib/slug";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

export default function Catalog() {
  const { categorySlug, brandSlug } = useParams();

  const filtered = useMemo(() => {
    const c = categorySlug?.toLowerCase();
    const b = brandSlug?.toLowerCase();

    return products.filter((p) => {
      const categoryOk = c ? slugify(p.category) === c : true;
      const brandOk = b ? slugify(p.brand) === b : true;
      return categoryOk && brandOk;
    });
  }, [categorySlug, brandSlug]);

  const title = useMemo(() => {
    const parts: string[] = [];
    if (categorySlug) parts.push(categorySlug.replace(/-/g, " "));
    if (brandSlug) parts.push(brandSlug.replace(/-/g, " "));
    return parts.length ? parts.join(" · ") : "Catalogue";
  }, [categorySlug, brandSlug]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 bg-background-secondary">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Catalogue</p>
            <h1 className="section-title capitalize">{title}</h1>
            <p className="text-sm text-foreground-muted mt-2">{filtered.length} produit(s)</p>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-xl border border-border bg-background p-10 text-center">
              <p className="text-foreground-secondary">Aucun produit trouvé pour ce filtre.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((product, idx) => (
                <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${idx * 0.07}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

