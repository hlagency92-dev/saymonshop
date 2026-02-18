import { Heart, ShoppingCart, Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="card-product group relative flex flex-col bg-background-card border border-border hover:border-primary/40 transition-all duration-300">
      {/* Badge */}
      {product.badge && (
        <span className="badge-promo">{product.badge}</span>
      )}

      {/* Wishlist button */}
      <button
        onClick={() => toggleWishlist(product.id)}
        className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
          isWishlisted
            ? "bg-primary text-primary-foreground"
            : "bg-background/80 text-foreground-muted hover:text-primary hover:bg-background"
        } backdrop-blur-sm border border-border`}
      >
        <Heart size={14} fill={isWishlisted ? "currentColor" : "none"} />
      </button>

      {/* Image */}
      <div className="relative overflow-hidden bg-background rounded-t-xl" style={{ height: "220px" }}>
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-full object-cover"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Category */}
        <p className="text-xs text-foreground-muted uppercase tracking-widest font-medium">
          {product.brand} · {product.category}
        </p>

        {/* Name */}
        <h3 className="font-semibold text-foreground text-sm leading-snug line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? "text-primary fill-primary" : "text-border"}
              />
            ))}
          </div>
          <span className="text-xs text-foreground-muted">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-price">
            {product.price.toLocaleString("fr-FR")} €
          </span>
          {product.oldPrice && (
            <span className="text-sm text-price-old line-through">
              {product.oldPrice.toLocaleString("fr-FR")} €
            </span>
          )}
        </div>

        {/* Add to cart button */}
        <button
          onClick={() => addToCart(product)}
          className="mt-auto btn-primary w-full flex items-center justify-center gap-2 group-hover:shadow-glow-red-sm"
        >
          <ShoppingCart size={15} />
          Ajouter au Panier
        </button>
      </div>
    </div>
  );
}
