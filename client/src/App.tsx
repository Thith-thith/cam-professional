import "flowbite";
import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/layouts/Footer";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import ProductDetail from "./pages/products/details";
import Products from "./pages/products";
import News from "./pages/news";
import SinglePageNews from "./pages/news/singlePage";

const App: Component = () => {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/products" component={Products} />
        <Route path="/products/:id?" component={ProductDetail} />
        <Route path="/news" component={News} />
        <Route path="/news/:id?" component={SinglePageNews} />
      </Routes>
      <Footer />
    </section>
  );
};

export default App;
