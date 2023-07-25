import { Component, For, Show, createResource, createSignal } from "solid-js";
// import AllCoreProducts from "../../data/Core-Product";
import CoreCard from "../../components/CoreProductCard";
import { NavLink } from "@solidjs/router";

const fetchData = async () => {
  const res = await fetch("http://localhost:3000/CoreProducts");
  return res.json();
};

const CoreProducts: Component<{}> = (props) => {
  const [AllCoreProducts] = createResource(fetchData);

  return (
    <div>
      <div>
        {/* <div class="bg-primary h-16 w-full"></div> */}
        {/* <div class="flex justify-center">
          <div class="mb-3 w-1/4 absolute top-[103px]">
            <div class="relative justify-center mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                class="px-3 py-3 relative block w-[1px] min-w-0 flex-auto rounded-l-lg focus:outline-non bg-base-300 focus:outline-none"
                // class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
              />

              <button
                class="py-3 bg-pink-400 px-6 font-bold text-white rounded-r-md"
                // class="relative z-10 rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                type="button"
                id="button-addon3"
                data-te-ripple-init
              >
                Search
              </button>
            </div>
          </div>
        </div> */}
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
                      return <CoreCard product={CoreProducts} />;
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

export default CoreProducts;
