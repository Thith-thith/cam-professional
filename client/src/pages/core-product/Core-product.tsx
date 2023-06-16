import { Component, For } from "solid-js";
import CoreProducts from "../../data/Core-Product";
import CoreCard from "../../components/Core-card";

const CoreProduct: Component<{}> = (props) => {
  return (
    <div>
      <h1 class="text-center text-gray-500 font-extrabold md:text-2xl">
        CHECK THE CORE PRODUCT
      </h1>
      <p class="text-center text-xs font-bold">LOOKING FOR OUR CORE PRODUCT</p>
      <div class="grid grid-cols-4 gap-4 mt-12">
        <For each={CoreProducts}>
          {(CoreProducts) => {
            return (
              <div>
                {/* <CoreCard props={CoreProducts} /> */}
                <CoreCard product={CoreProducts} />
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

export default CoreProduct;
