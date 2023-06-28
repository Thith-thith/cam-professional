import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import CoreProducts from "./pages/core-product/CoreProducts";

const App: Component = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/core-product-detail/:id" component={ProductDetail} />
        <Route path="/core-products" component={CoreProducts} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
