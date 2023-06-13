import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

const App: Component = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about-us" component={About} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
