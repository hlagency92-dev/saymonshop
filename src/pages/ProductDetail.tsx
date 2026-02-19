import { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, ShoppingCart, Minus, Plus, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import NotFound from "./NotFound";

const placeholderImage = "https://via.placeholder.com/600x600/1a1a1a/666666?text=Photo";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart, wishlist, toggleWishlist, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"details" | "reviews">("details");

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <NotFound />;

  const isWishlisted = wishlist.includes(product.id);
  const imgSrc = product.image.startsWith("/") ? product.image : product.image;
  const priceFormatted = product.price.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const oldPriceFormatted = product.oldPrice
    ? product.oldPrice.toLocaleString("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : null;
  const discountText = product.discount ? `(-${product.discount}%)` : null;

  const descriptionLines = product.description
    ? product.description
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    openCart();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Partie haute : image à gauche, infos à droite */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Colonne gauche : logo marque, titre, image avec badge séparé */}
          <div className="relative">
            <p className="text-primary font-bold text-2xl mb-2">{product.brand}</p>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight mb-4">
              {product.name}
            </h1>
            <div className="relative overflow-hidden rounded-xl bg-muted aspect-square max-h-[480px]">
              {product.badge && (
                <span className="absolute top-0 left-0 z-10 bg-primary text-primary-foreground text-sm font-bold px-3 py-1.5 rounded-br">
                  {product.badge}
                </span>
              )}
              <img
                src={imgSrc}
                alt={product.name}
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.currentTarget.src = placeholderImage;
                }}
              />
            </div>
          </div>

          {/* Colonne droite : infos, prix, quantité, boutons */}
          <div className="flex flex-col">
            <p className="text-sm text-foreground-muted uppercase tracking-wide mb-1">{product.brand}</p>
            <h2 className="text-xl font-bold text-foreground mb-3">{product.name}</h2>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold w-fit mb-4">
              En stock
            </span>

            <div className="flex flex-wrap items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-primary">{priceFormatted} DH</span>
              {oldPriceFormatted && (
                <>
                  <span className="text-lg text-foreground-muted line-through">{oldPriceFormatted} DH</span>
                  {discountText && (
                    <span className="text-sm text-foreground-muted"> {discountText}</span>
                  )}
                </>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center border border-border rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-semibold text-foreground">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 min-w-[200px] py-3 px-6 rounded-lg bg-foreground text-background font-semibold text-sm uppercase tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <ShoppingCart size={18} />
                Ajouter au panier
              </button>
            </div>

            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              className="flex items-center gap-2 text-sm text-foreground-muted hover:text-primary transition-colors mb-4"
            >
              <Heart
                size={16}
                fill={isWishlisted ? "currentColor" : "none"}
                className={isWishlisted ? "text-primary" : ""}
              />
              Ajouter à la liste de souhaits
            </button>

            <button
              type="button"
              className="py-2.5 px-6 rounded-lg border-2 border-foreground text-foreground font-semibold text-xs uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              Comparer
            </button>

            <div className="mt-6 flex items-center gap-2">
              <span className="text-sm text-foreground-muted">Partager :</span>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Share2 size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary transition-colors"
                  aria-label="Partager"
                >
                  <Share2 size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Onglets : Détails produit | Avis — description visible par défaut */}
        <div className="border-t border-border pt-8">
          <div className="flex gap-0 border-b border-border mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("details")}
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                activeTab === "details"
                  ? "bg-foreground text-background border-b-2 border-foreground -mb-px"
                  : "text-foreground-muted hover:text-foreground border-b-2 border-transparent"
              }`}
            >
              Détails produit
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("reviews")}
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                activeTab === "reviews"
                  ? "bg-foreground text-background border-b-2 border-foreground -mb-px"
                  : "text-foreground-muted hover:text-foreground border-b-2 border-transparent"
              }`}
            >
              Avis ({product.reviews ?? 0})
            </button>
          </div>

          {activeTab === "details" && (
            <div className="bg-card border border-border rounded-xl p-6">
              <ul className="list-disc list-inside space-y-2 text-foreground">
                {descriptionLines.length > 0 ? (
                  descriptionLines.map((line, i) => (
                    <li key={i} className="leading-relaxed">
                      {line}
                    </li>
                  ))
                ) : (
                  <li>Aucune fiche technique disponible pour ce produit.</li>
                )}
              </ul>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-foreground-muted">
                Aucun avis pour le moment. Soyez le premier à laisser un avis.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

