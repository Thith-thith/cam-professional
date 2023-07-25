import { Component, Show, createEffect, createSignal } from "solid-js";
import { A, NavLink } from "@solidjs/router";
import { useCartContext } from "../context/CartContext";
import { createStore } from "solid-js/store";

type Product = {
  id: string;
  name: string;
  image: string;
  rating: number;
  brand: string;
  price: number;
  category: string;
  quantity: number;
};
type Cart = {
  cartLocal: Product;
  quantity: number;
};

const CoreCard: Component<{ product: Product }> = (props) => {
  const { cartItems, addToCart } = useCartContext();

  const handleAddTocart = (product: Product) => {
    addToCart(product);
  };
  const isInCart = () => {
    const data = cartItems.some(
      (item) => item?.product?.id === props?.product?.id
    );
    return data;
  };

  return (
    <div class="card bg-base-200 h-full rounded-none">
      <Show when={props} fallback={<p>Loading...</p>}>
        <A href={`/core-product-detail/${props.product.id}`}>
          <figure class="px-10 pt-10">
            <img src={props.product?.image} alt="Shoes" class="h-36" />
          </figure>
          <div class="card-body text-center">
            <h1 class="font-extrabold text-lg">{props.product?.category}</h1>
            <p class="text-gray-500">{props.product?.name}</p>
            <p class="font-semibold text-pink-500">
              Price: ${props.product?.price}
            </p>
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
        </A>
        {isInCart() ? (
          <NavLink href="/cart">
            <div class="flex justify-center">
              <button class="bg-pink-500 py-3 text-base-200 text-center w-full">
                View cart
              </button>
            </div>
          </NavLink>
        ) : (
          <div class="flex justify-center">
            <button
              onClick={() => handleAddTocart(props.product)}
              class="bg-primary py-3 text-base-200 text-center w-full"
            >
              Add to cart
            </button>
          </div>
        )}
      </Show>
      {/* </A> */}
    </div>
  );
};

export default CoreCard;
