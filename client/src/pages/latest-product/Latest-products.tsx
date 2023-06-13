import { Component, For } from "solid-js";
import LatestCart from "../../components/Latest-cart";
import LatestProduct from "../../data/Lates-product";

const Index: Component = () => {
  return (
    <div>
      <h1 class="text-center text-gray-500 font-extrabold md:text-2xl">
        Latest Products
      </h1>
      <div class="grid grid-cols-2 gap-4 mt-12">
        <For each={LatestProduct}>
          {(LatestProduct) => {
            return (
              <div>
                <LatestCart props={LatestProduct} />
              </div>
            );
          }}
        </For>
      </div>
      <div class="float-right py-3 flex space-x-1 items-center">
        <h1 class="text-gray-500 text-xs font-bold">Show more</h1>
        <img class="w-auto h-3.5" src="/images/right-arrow.png" />
      </div>
    </div>
  );
};

export default Index;
