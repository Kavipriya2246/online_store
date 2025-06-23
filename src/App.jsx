import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import LoginForm from "./components/LoginForm";
import OrderConfirmation from "./components/OrderConfirmation";
import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/confirmation" element={<OrderConfirmation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
