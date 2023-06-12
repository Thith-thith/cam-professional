import { Component, For } from "solid-js";
import LatestCart from "../../components/Latest-cart";
import LatestProduct from "../../data/Lates-product";

const Index: Component = () => {
  console.log(LatestProduct);
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
    </div>
  );
};

export default Index;
