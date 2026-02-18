import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const navigate = useNavigate();
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? "open" : ""} z-50`}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-primary" />
            <h2 className="text-lg font-bold text-foreground">
              Mon Panier
              {totalItems > 0 && (
                <span className="ml-2 text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                  {totalItems}
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center text-foreground-muted hover:text-foreground transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingBag size={48} className="text-border mb-4" />
              <p className="text-foreground-muted text-sm">Votre panier est vide</p>
              <button
                onClick={closeCart}
                className="mt-4 btn-primary"
              >
                Continuer mes achats
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 p-3 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
              >
                {/* Image */}
                <div className="w-18 h-18 rounded-lg overflow-hidden bg-muted flex-shrink-0" style={{ width: "72px", height: "72px" }}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-foreground-muted mb-0.5">{item.brand}</p>
                  <h4 className="text-sm font-semibold text-foreground line-clamp-2 leading-snug mb-2">
                    {item.name}
                  </h4>
                  <span className="text-base font-bold text-price">
                    {(item.price * item.quantity).toLocaleString("fr-FR")} €
                  </span>
                </div>

                {/* Quantity + Remove */}
                <div className="flex flex-col items-end justify-between gap-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-foreground-muted hover:text-destructive transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                  <div className="flex items-center gap-1 border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center hover:bg-muted transition-colors text-foreground-muted hover:text-foreground"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-6 text-center text-sm font-semibold text-foreground">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center hover:bg-muted transition-colors text-foreground-muted hover:text-foreground"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-foreground-secondary font-medium">Sous-total</span>
              <span className="text-2xl font-bold text-price">
                {totalPrice.toLocaleString("fr-FR")} €
              </span>
            </div>
            <p className="text-xs text-foreground-muted">Livraison calculée à l'étape suivante</p>
            <button
              onClick={() => { closeCart(); navigate("/checkout"); }}
              className="btn-primary w-full py-3 text-base shadow-glow-red"
            >
              Passer au Paiement →
            </button>
            <button
              onClick={closeCart}
              className="btn-outline w-full py-2.5"
            >
              Continuer mes achats
            </button>
          </div>
        )}
      </div>
    </>
  );
}
