import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedCart = localStorage.getItem("verdant-cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse cart data", error);
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("verdant-cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    openDrawer();
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = Math.max(0, item.quantity + delta);
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const clearCart = () => setCart([]);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
