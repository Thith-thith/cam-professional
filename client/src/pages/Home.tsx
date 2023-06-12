import { Component } from "solid-js";
import LatesProduct from "../pages/latest-products/Index";

const Home: Component = () => {
  return (
    <div>
      <div class="bg-primary h-[473px]"></div>
      <div class="px-20">
        <div class="mt-12">
          <LatesProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
