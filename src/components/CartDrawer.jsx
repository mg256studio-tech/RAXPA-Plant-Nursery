import { useCart } from "../context/CartContext";
import { X, Plus, Minus, Trash2 } from "lucide-react";

export default function CartDrawer() {
  const {
    cart,
    isDrawerOpen,
    closeDrawer,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  return (
    <>
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={closeDrawer}
        ></div>
      )}

      <div
        className={`fixed right-0 top-0 h-screen w-full sm:max-w-md bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-jet-black/10">
            <h2 className="text-lg sm:text-xl font-display font-medium">
              Shopping Cart
            </h2>
            <button
              onClick={closeDrawer}
              className="p-2 hover:bg-jet-black/5 rounded-full transition-colors tap-highlight-none active:scale-95"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
            {cart.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-center text-gray-500 text-sm sm:text-base">
                  Your cart is empty
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-jet-black/10"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 sm:w-20 sm:h-24 object-cover rounded-sm"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-xs sm:text-sm mb-1">
                      {item.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-600 mb-2 sm:mb-3">
                      {item.price}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-jet-black/5 rounded transition-colors tap-highlight-none active:scale-95"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-6 sm:w-8 text-center text-xs sm:text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-jet-black/5 rounded transition-colors tap-highlight-none active:scale-95"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto p-1 hover:bg-red-50 rounded transition-colors text-red-600 tap-highlight-none active:scale-95"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-jet-black/10 p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-medium">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-jet-black text-white py-3 rounded-lg font-semibold hover:bg-jet-black/90 transition-colors">
                Checkout
              </button>
              <button
                onClick={closeDrawer}
                className="w-full border-2 border-jet-black text-jet-black py-3 rounded-lg font-semibold hover:bg-jet-black/5 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
