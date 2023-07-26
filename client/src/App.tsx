import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/layouts/Footer";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import ProductDetail from "./pages/product-details";
import "flowbite";
import Products from "./pages/products/details";

const App: Component = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/products/:id?" component={ProductDetail} />
        <Route path="/products" component={Products} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
