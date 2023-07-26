import { Component, For, Show, createResource } from "solid-js";
// import CoreCard from "../../components/CoreProductCard";
import { NavLink } from "@solidjs/router";
import Cards from "../../components/cards/Cards";

const fetchData = async () => {
  const res = await fetch("http://localhost:3000/CoreProducts");
  return res.json();
};

const Products: Component<{}> = (props) => {
  const [AllCoreProducts] = createResource(fetchData);

  return (
    <div>
      <div>
        <div class="bg-white py-12 w-full">
          <h1 class="text-center text-[#98A2AE] font-bold text-5xl mt-6">
            All Products
          </h1>
          <div class="flex space-x-4 justify-center mt-6">
            <NavLink
              class="bg-base-200 border border-solid text-md rounded-full px-7 py-0.5 text-primary"
              href="/all"
            >
              All
            </NavLink>
            <NavLink
              class="bg-base-200 border border-solid text-md rounded-full px-7 py-0.5 text-primary"
              href="/all"
            >
              Popular
            </NavLink>
            <NavLink
              class="bg-base-200 border border-solid text-md rounded-full px-7 py-0.5 text-primary"
              href="/all"
            >
              Latest
            </NavLink>
          </div>
        </div>
      </div>
      <div class="md:mx-44 mx-3">
        <div class="">
          {/* <div class="text-sm breadcrumbs">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Core Products</a>
              </li>
            </ul>
          </div> */}

          <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div class="mt-12 md:col-span-1">
              <div class="sticky top-4">
                <ul class="menu bg-base-200 rounded ">
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
            </div>

            <div class="md:col-span-4 mt-8">
              {/* <div class="flex space-x-4">
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
              </div> */}
              <div class="grid md:grid-cols-3 gap-4 mt-4">
                <Show when={AllCoreProducts()} fallback={<p>Loading...</p>}>
                  <For each={AllCoreProducts()}>
                    {(CoreProducts) => {
                      return <Cards product={CoreProducts} />;
                    }}
                  </For>
                </Show>
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
    </div>
  );
};

export default Products;
