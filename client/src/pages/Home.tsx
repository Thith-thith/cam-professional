import { Component } from "solid-js";
import LatesProduct from "./latest-product/LatestProducts";
import CoreProduct from "./core-product/CoreProduct";
import News from "./news/news";
import { NavLink } from "@solidjs/router";
import { Splide } from "@splidejs/splide";

const Home: Component = () => {
  return (
    <div>
      <div class="bg-home-main">
        {/* <img src="/images/angkor.png" class="angkor-banner" /> */}
        <div class="absolute w-[100%] top-30">
          <h1 class="text-center font-3xl text-white text-5xl mt-24">
            CAM PROFESSIONAL TECHNOLOGY
          </h1>
          <h2 class="text-center font-3xl text-white text-3xl mt-3">
            The Best Toner Cartridge Supplier In Cambodia
          </h2>
          <p class="mx-96 text-center mt-20 text-white text-xl">
            One of the leading companies in the consumer printer field
            established in 2010 Its main product is compatible toner cartridges
            for HP, Canon, Epson, Lexmark, Samsung, Dell, Brother, etc.
          </p>
          <div class="flex justify-center mt-16 cursor-pointer z-50">
            <NavLink
              href="/about-us"
              class="border px-8 py-1 rounded text-white group"
              // class="btn border-none text-white hover:bg-pink-500 bg-pink-600 group mt-2 w-64 cursor-pointer "
            >
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
      <div class="md:mx-44 mx-3">
        <div class="mt-20">
          <LatesProduct />
        </div>
        <div class="mt-32">
          <CoreProduct />
        </div>
        {/* <div class="mt-32 px-60">
          <h1 class="text-center text-gray-500 font-extrabold md:text-4xl">
            Our Clients Believe In Us
          </h1>
          <p class="text-center text-sm font-bold">Service with a smile</p>
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
        </div> */}
        <div class="mt-32 md:p-12 rounded-md">
          <div class="grid md:grid-cols-2 md:gap-4">
            <div>
              <div>
                <h1 class=" text-gray-500 font-extrabold md:text-2xl">
                  ABOUT US
                </h1>
                <h1 class="text-primary font-bold text-4xl mt-2">
                  CAM Professional Technology Co., LTD
                </h1>
                <div class="text-lg">
                  <p class="mt-4 text-gray-500">
                    We Choose the best parts of consumable to make the whole
                    toner cartridge.
                  </p>
                  <p class="text-gray-500">
                    We test each other cartridge before delivery to make sure
                    quality.
                  </p>
                  <NavLink
                    href="/about-us"
                    class="btn btn-xs btn-primary group mt-2"
                  >
                    See More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1 class="font-bold text-xl text-primary-focus md:mt-0 mt-9">
                  Which Payment systems
                </h1>
                <p class="text-lg text-gray-600">
                  You can use payments systems, as well as bank payment, card
                  payment.
                </p>
                <br />
                <h1 class="font-bold text-xl text-primary-focus">
                  Shipping methods
                </h1>
                <p class="text-lg text-gray-600">
                  We delivery for you at anytime and anywhere
                </p>
                <br />
                <h1 class="font-bold text-xl text-primary-focus">Policy</h1>
                <p class="text-lg text-gray-600">
                  We will renew for the error product in warranty
                </p>
              </div>
            </div>
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
