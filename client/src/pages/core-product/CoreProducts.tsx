import { Component, For } from "solid-js";
import AllCoreProducts from "../../data/Core-Product";
import CoreCard from "../../components/CoreProductCard";
import { NavLink } from "@solidjs/router";

const CoreProducts: Component<{}> = (props) => {
  return (
    <div class="mx-44">
      <div class="mt-12">
        <div class="text-sm breadcrumbs">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Core Products</a>
            </li>
          </ul>
        </div>
        {/* <div class="text-center mb-16">
          <h1 class="text-6xl text-[#98A2AE] font-bold"> CORE PRODUCTS</h1>
          <p> LOOKING FOR OUR CORE PRODUCT</p>
        </div> */}
        <div class="grid grid-cols-5 gap-4">
          <div class="mt-12 col-span-1">
            <ul class="menu bg-base-200 rounded">
              <li>
                <h2 class="menu-title">Categories</h2>
                <ul>
                  <li>
                    <a>Bill Counter (5)</a>
                  </li>
                  <li>
                    <a>IT Services (1)</a>
                  </li>
                  <li>
                    <a>CAM-TONER CARTRIDGE (147)</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-span-4 mt-12">
            <div class="flex space-x-4">
              <NavLink
                class="bg-base-200 text-md rounded-full px-7 py-0.5 text-primary"
                href="/all"
              >
                All
              </NavLink>
              <NavLink
                class="bg-base-200 text-md rounded-full px-7 py-0.5 text-primary"
                href="/all"
              >
                Popular
              </NavLink>
              <NavLink
                class="bg-base-200 text-md rounded-full px-7 py-0.5 text-primary"
                href="/all"
              >
                Latest
              </NavLink>
            </div>
            <div class="grid grid-cols-3 gap-4 mt-4">
              <For each={AllCoreProducts}>
                {(CoreProducts) => {
                  return <CoreCard product={CoreProducts} />;
                }}
              </For>
            </div>
            <div class="join mt-12 flex justify-center">
              <button class="join-item btn btn-sm">1</button>
              <button class="join-item btn btn-sm btn-active">2</button>
              <button class="join-item btn btn-sm">3</button>
              <button class="join-item btn btn-sm">4</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreProducts;
