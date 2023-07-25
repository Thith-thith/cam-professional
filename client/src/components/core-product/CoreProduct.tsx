import { Component, For, Show, createResource } from "solid-js";
// import CoreProducts from "../../data/Core-Product";
import CoreCard from "../../components/CoreProductCard";
import { useCartContext } from "../../context/CartContext";
import { NavLink } from "@solidjs/router";

const fetchData = async () => {
  const res = await fetch("http://localhost:3000/CoreProducts");
  return res.json();
};
const CoreProduct: Component<{}> = (props) => {
  const [CoreProducts] = createResource(fetchData);

  return (
    <div>
      <h1 class="text-center text-gray-500 font-extrabold md:text-4xl">
        CHECK THE CORE PRODUCT
      </h1>
      <p class="text-center text-sm font-bold">LOOKING FOR OUR CORE PRODUCT</p>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
        <Show when={CoreProducts()} fallback={<p>Loading...</p>}>
          <For each={CoreProducts().slice(0, 8)}>
            {(CoreProducts) => {
              return (
                <div>
                  <CoreCard product={CoreProducts} />
                </div>
              );
            }}
          </For>
        </Show>
      </div>
      <NavLink href="/core-products">
        <div class="float-right py-3 flex space-x-1 items-center">
          <h1 class="text-gray-500 text-xs font-bold">Show more</h1>
          <img class="w-auto h-3.5" src="/images/right-arrow.png" />
        </div>
      </NavLink>
    </div>
  );
};

export default CoreProduct;
