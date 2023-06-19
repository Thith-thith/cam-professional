import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

const App: Component = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/cart" component={Cart} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
