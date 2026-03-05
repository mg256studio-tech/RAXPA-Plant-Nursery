import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import { CartProvider } from "./context/CartContext";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CollectionsPage from "./pages/CollectionsPage";
import CollectionDetailPage from "./pages/CollectionDetailPage";
import ProductDetailPage from "./pages/ProductDetailPage";

export default function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collection/:id" element={<CollectionDetailPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
        <CartDrawer />
      </CartProvider>
    </Router>
  );
}
