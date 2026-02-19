import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const placeholderImage = "https://via.placeholder.com/400x400/1a1a1a/666666?text=Photo";

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const isWishlisted = wishlist.includes(product.id);

  const imgSrc = product.image.startsWith("/") ? product.image : product.image;
  const priceFormatted = product.price.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const oldPriceFormatted = product.oldPrice
    ? product.oldPrice.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : null;

  return (
    <div className="group relative flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover">
      {/* Badge promo - coin supérieur gauche */}
      {product.badge && (
        <span className="absolute top-0 left-0 z-10 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-br">
          {product.badge}
        </span>
      )}

      {/* Image : clic → fiche produit */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-muted" style={{ height: "240px" }}>
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = placeholderImage;
          }}
        />
      </Link>

      {/* Contenu */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Marque / Catégorie */}
        <p className="text-xs text-foreground-muted uppercase tracking-wide font-medium">
          {product.brand}
        </p>

        {/* Nom produit : clic → fiche produit */}
        <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
          <h3 className="font-semibold text-foreground text-sm leading-snug line-clamp-2 min-h-[40px]">
            {product.name}
          </h3>
        </Link>

        {/* Wishlist - comme sur le screenshot */}
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          className="flex items-center gap-2 text-xs text-foreground-muted hover:text-primary transition-colors w-fit"
        >
          <Heart size={14} fill={isWishlisted ? "currentColor" : "none"} className={isWishlisted ? "text-primary" : ""} />
          Ajouter à la liste de souhaits
        </button>

        {/* Prix - prix actuel en rouge, ancien barré */}
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-lg font-bold text-primary">
            {priceFormatted} DH
          </span>
          {oldPriceFormatted && (
            <span className="text-sm text-foreground-muted line-through">
              {oldPriceFormatted} DH
            </span>
          )}
        </div>

        {/* Bouton AJOUTER AU PANIER - contour noir, texte blanc (style screenshot) */}
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-auto w-full py-2.5 rounded-lg border-2 border-foreground text-foreground font-semibold text-xs uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-foreground hover:text-background transition-all duration-200"
        >
          <ShoppingCart size={14} />
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
