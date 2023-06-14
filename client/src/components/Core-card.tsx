import { Component, Show } from "solid-js";
import { A } from "@solidjs/router";

export type CoreProducts = {
  id: string;
  name: string;
  image: string;
  rating: number;
  category: string;
  price: number;
};
interface Props {
  props: CoreProducts;
}
const CoreCard: Component<Props> = ({ props }) => {
  return (
    <A href="/about-us">
      <div class="card bg-base-200 h-full rounded-none">
        <Show when={props} fallback={<p>Loading...</p>}>
          <figure class="px-10 pt-10">
            <img src={props.image} alt="Shoes" class="h-36" />
          </figure>
          <div class="card-body text-center">
            <h1 class="font-extrabold text-lg">{props.category}</h1>
            <p class="text-gray-500">{props.name}</p>
            <p class="font-semibold text-pink-500">Price: ${props.price}</p>
            <div class="rating space-x-1 rating-xs flex justify-center">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-yellow-500"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-yellow-500"
              />
            </div>
          </div>
          <div class="flex justify-center">
            <button class="bg-primary py-3 text-base-200 text-center w-full">
              Add to cart
            </button>
          </div>
        </Show>
      </div>
    </A>
  );
};

export default CoreCard;
