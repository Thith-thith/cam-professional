import { Component, For, Show, createEffect, createResource } from "solid-js";
import CoreProducts from "../data/Core-Product";
import { useParams } from "@solidjs/router";
import { useCartContext } from "../context/CartContext";
import { NavLink } from "@solidjs/router";
import Cards from "../components/cards/Cards";

type Product = {
  id: string;
  name: string;
  image: string;
  rating: number;
  category: string;
  brand: string;
  price: number;
  quantity: number;
};

const fetchProduct = async (id: string) => {
  const res = await fetch(`http://localhost:3000/CoreProducts/` + id);
  return res.json();
};
const ProductDetail: Component<{}> = (props) => {
  const { addToCart, cartItems } = useCartContext();
  const params = useParams<{ id: string }>();
  const [item] = createResource(params.id, fetchProduct);
  const handleAddTocart = (product: Product) => {
    addToCart(product);
  };
  const isInCart = () => {
    const data = cartItems.some((item) => item?.product?.id === params.id);
    return data;
  };
  createEffect(() => {
    isInCart();
  });

  return (
    <div class="md:mx-44 mx-3 mt-8">
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
      <Show when={item()} fallback={<p>Loading....</p>}>
        {/* //product details */}
        <div class="mt-12">
          <div class="grid md:grid-cols-6 grid-cols-1 gap-4">
            <div class="col-span-2">
              <img class="w-96" src={item()?.image} />
              {/* <div class="mt-12">
                <h1 class="text-gray-600 font-bold">Describtions:</h1>
                <p class="mt-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentiall y unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div> */}
            </div>
            <div class="col-span-4">
              <h1 class="text-gray-600 text-2xl font-bold">{item()?.name}</h1>
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
                <p class="text-pink-500 font-bold text-xl">
                  Price: ${item()?.price}
                </p>
              </div>
              <div class="md:w-[500px] mt-5">
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
                {isInCart() ? (
                  <NavLink href="/cart">
                    <div class="flex justify-center">
                      <button class="btn bg-pink-500 text-white btn-md rounded-xl text-xs w-44 hover:bg-pink-700">
                        View cart
                      </button>
                    </div>
                  </NavLink>
                ) : (
                  <div class="flex justify-center">
                    <button
                      onClick={() => handleAddTocart(item())}
                      class="btn bg-pink-600 text-white btn-md rounded-xl text-xs w-44 hover:bg-pink-700"
                    >
                      Add to cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Show>
      <div class="mt-12">
        <h1 class="text-gray-600 font-bold">Describtions:</h1>
        <p class="mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentiall y unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <h1 class="text-gray-600 font-bold text-xl text-center mt-32">
          Related Products
        </h1>

        <div class="grid md:grid-cols-4 grid-cols-1 gap-4 mt-12">
          <For each={CoreProducts.slice(0, 4)}>
            {(CoreProducts) => {
              return (
                <div>
                  <Cards product={CoreProducts} />
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
