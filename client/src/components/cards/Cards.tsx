import { Component, Show } from "solid-js";
import { useCartContext } from "../../context/CartContext";
import { A, useNavigate } from "@solidjs/router";

export type Product = {
  id: string;
  name: string;
  image: string;
  rating: number;
  brand: string;
  price: number;
  category: string;
  quantity: number;
};
interface Props {
  props: Product;
}
const Cards: Component<{ product: Product }> = (props) => {
  const { cartItems, addToCart } = useCartContext();
  const navigate = useNavigate();
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
    <div>
      <Show when={props} fallback={<p>Loading...</p>}>
        <div
          onClick={() => {
            navigate(`/products/${props?.product?.id}`);
          }}
        >
          <div class="group relative max-w-sm h-[25.5rem] bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 ">
            <div class="absolute flex flex-col top-0 right-0 p-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                class="z-40 transition ease-in duration-300 bg-gray-50  hover:text-danger shadow hover:shadow-md text-red-300 rounded-full w-8 h-8 text-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </button>
            </div>
            <div class="w-full">
              <img
                class="p-3 rounded-t-lg w-60 max-w-sm mx-auto group-hover:scale-110 duration-150"
                src={props?.product?.image}
                alt="product image"
              />
            </div>
            <div class="px-5 pb-5">
              <span class="text-xs">{props?.product?.brand}</span>
              <div class="flex items-center mb-2">
                <svg
                  class="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {props?.product?.rating}
                </span>
              </div>
              <h5 class="text-md font-medium tracking-tight text-gray-900 dark:text-white ">
                {props?.product?.name}
              </h5>

              <div
                class={`flex items-center justify-between ${
                  props?.product?.name?.length > 35 ? "mt-1" : "mt-7"
                }`}
              >
                <span class="text-3xl font-bold text-danger dark:text-white ">
                  ${props.product?.price}
                </span>
                {!isInCart() ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddTocart(props.product);
                    }}
                    class="text-primary hover:text-white border border-primary hover:border-danger hover:bg-danger focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/cart`);
                    }}
                    class="text-white hover:text-white border bg-danger hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default Cards;
