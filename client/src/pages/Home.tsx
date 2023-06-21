import { Component } from "solid-js";
import LatesProduct from "./latest-product/LatestProducts";
import CoreProduct from "./core-product/CoreProduct";
import News from "./news/news";

const Home: Component = () => {
  return (
    <div>
      <div class="bg-primary h-[473px]"></div>
      <div class="px-44">
        <div class="mt-12">
          <LatesProduct />
        </div>
        <div class="mt-32">
          <CoreProduct />
        </div>
        <div class="mt-32 px-60">
          <h1 class="text-center text-gray-500 font-extrabold md:text-2xl">
            Our Clients Believe In Us
          </h1>
          <p class="text-center text-xs font-bold">Service with a smile</p>
          <div class="carousel space-x-3 mt-12">
            <div id="item1" class="carousel-item ">
              <img src="/images/HGB.jpg" class="w-[218px] h-[218px]" />
            </div>

            <div id="item3" class="carousel-item ">
              <img src="/images/wing.png" class="w-[218px] h-[218px]" />
            </div>
            <div id="item4" class="carousel-item ">
              <img src="/images/amret.png" class="w-[218px] h-[218px]" />
            </div>
            <div id="item2" class="carousel-item ">
              <img src="/images/maybank.jpg" class="w-[218px] h-[218px]" />
            </div>
          </div>
          <div class="flex justify-center  py-2 gap-2">
            <a href="#item1" class="bg-primary h-2 w-2 rounded-full"></a>
            <a href="#item2" class="bg-primary h-2 w-2 rounded-full"></a>
            <a href="#item3" class="bg-primary h-2 w-2 rounded-full"></a>
            <a href="#item4" class="bg-primary h-2 w-2 rounded-full"></a>
          </div>
        </div>
        <div class="mt-32">
          <News />
        </div>
      </div>
    </div>
  );
};

export default Home;
