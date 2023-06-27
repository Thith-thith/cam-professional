import { Component } from "solid-js";

const ProductDetail: Component<{}> = (props) => {
  return (
    <div class="mx-44 mt-8">
      <div class="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Core Product</a>
          </li>
          <li>Ribbon</li>
          <li>CAM-TONER W1103A</li>
        </ul>
      </div>
      {/* //product details */}
      <div class="mt-12">
        <div class="grid grid-cols-6 gap-4">
          <div class="col-span-2">
            <img class="w-96" src="/products/product1.png" />
          </div>
          <div class="col-span-4">
            <h1 class="text-gray-600 text-2xl font-bold">CAM-TONER W1103A</h1>
            <div>
              <div class="rating rating-md mt-4">
                <input
                  type="radio"
                  name="rating-7"
                  class="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  class="mask mask-star-2 bg-yellow-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-7"
                  class="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  class="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  class="mask mask-star-2 bg-yellow-400"
                />
              </div>
            </div>
            <div class="mt-5">
              <p class="text-pink-500 font-bold text-xl">Price: $350.90</p>
            </div>
            <div class="w-[500px] mt-5">
              <p class="text-lg text-gray-60">
                🔍 BADGY 200 Black Ribbon Monochrome Add your review 91Ribbon
                $19.00 Black monochrome ribbon 500 black mono prints per roll
                Evolis CBGR0500K ribbon is for use with the Evolis Badgy200 &
                Badgy100 card printers
              </p>
            </div>
            <div class="flex space-x-3 mt-6 items-center">
              <button class="btn btn-primary tn-md rounded-xl text-xs w-44 text-white">
                Buy now
              </button>
              <button class="btn bg-pink-600 text-white btn-md rounded-xl text-xs w-44 hover:bg-pink-700">
                Add to cart
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
