import { Component } from "solid-js";

export type LatesProducts = {
  id: string;
  name: string;
  image: string;
  rating: number;
  category: string;
  price: number;
};
interface Props {
  props: LatesProducts;
}
const LatestCart: Component<Props> = ({ props }) => {
  return (
    <div>
      <div class="bg-base-200 rounded">
        <div class="py-8 px-10">
          <div class="flex items-center gap-9">
            <div>
              <img class="w-44" src={props.image} />
            </div>
            <div class="leading-10">
              <h1 class="font-extrabold text-2xl">{props.category}</h1>
              <p class="text-gray-500">{props.name}</p>
              <p class="font-semibold text-pink-500">Price: ${props.price}</p>
              <div class="rating rating-sm space-x-1">
                <input
                  type="radio"
                  name="rating-4"
                  class="mask mask-star-2 bg-yellow-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCart;
