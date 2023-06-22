import { createEffect, createSignal, For, Show, onCleanup } from "solid-js";
import { useCartContext } from "../context/CartContext";

type FormData = {
  fullname: string;
  email: string;
  note: string;
  address: string;
  phone: string;
  city: string;
};

const Cart = () => {
  const { cartItems, addToCart, minusCart, removeFromCart } = useCartContext();
  const [formData, setFormData] = createSignal<FormData>({
    fullname: "",
    email: "",
    note: "",
    address: "",
    phone: "",
    city: "",
  });
  const [price, setPrice] = createSignal(0);
  //=========>calculate subtotal===============
  createEffect(() => {
    const subtotal: number[] = [];
    cartItems.map((res) => subtotal.push(res.quantity * res.product.price));
    const Subtotal: any = subtotal.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    setPrice(Subtotal);
  });
  //============>onchange input form data============
  const handleInputChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  //=========>submit form confirm order<============
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    //====>API<====
    // data handling here
    console.log(formData());
  };

  // Cleanup signal when component unmounts
  // onCleanup(() => {
  //   setFormData(undefined);
  // });

  return (
    <div>
      <div class="mx-44 mt-12">
        <h2 class="text-4xl text-[#98A2AE] font-bold text-center">
          Shopping Cart
        </h2>
        <br />

        <div>
          <div>
            {cartItems.length === 0 ? (
              <div>
                <div class="flex justify-center mt-16">
                  <img class="w-64" src="/images/undraw_empty_cart_co35.svg" />
                </div>
                <p class="mt-12 text-center font-bold text-red-500">
                  Your cart is Empty !
                </p>
              </div>
            ) : (
              <div>
                <div class="grid grid-cols-5 gap-20 mt-12 ">
                  <div class="col-span-3">
                    <h1 class="font-bold text-primary-focus">
                      Input your information
                    </h1>
                    <br />
                    <div class="backdrop-blur-sm bg-white bg-opacity-80 p-8">
                      <form onSubmit={handleSubmit}>
                        <div class="grid grid-cols-2 gap-4">
                          <div class="mb-6">
                            <label class="block text-md text-primary-focus">
                              Fullname
                            </label>
                            <input
                              type="text"
                              name="fullname"
                              value={formData().fullname}
                              onInput={handleInputChange}
                              placeholder="example"
                              class="w-full bg-gray-50 border border-gray-300 rounded text-gray-900 text-sm  p-2 focus:outline-none"
                            />
                          </div>
                          <div class="mb-6">
                            <label class="block text-md  text-primary-focus">
                              Phone
                            </label>
                            <input
                              type="number"
                              name="phone"
                              value={formData().phone}
                              onInput={handleInputChange}
                              placeholder="0** *** ***"
                              class="w-full bg-gray-50 border border-gray-300 rounded text-gray-900 text-sm  p-2 focus:outline-none"
                            />
                          </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                          <div class="mb-6">
                            <label class="block text-md  text-primary-focus">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData().email}
                              onInput={handleInputChange}
                              placeholder="example@gmail.com"
                              class="w-full bg-gray-50 border border-gray-300 rounded text-gray-900 text-sm  p-2 focus:outline-none"
                            />
                          </div>
                          <div class="mb-6">
                            <label class="block text-md  text-primary-focus">
                              City
                            </label>
                            <input
                              type="text"
                              name="city"
                              value={formData().city}
                              onInput={handleInputChange}
                              placeholder="example"
                              class="w-full bg-gray-50 border border-gray-300 rounded text-gray-900 text-sm  p-2 focus:outline-none"
                            />
                          </div>
                        </div>
                        <div class="mb-6">
                          <label class="block text-md  text-primary-focus">
                            Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={formData().address}
                            onInput={handleInputChange}
                            placeholder="#F112,Rouesy Keo"
                            class="w-full bg-gray-50 border border-gray-300 rounded text-gray-900 text-sm  p-2 focus:outline-none"
                          />
                        </div>
                        <div class="mb-6">
                          <label class="block text-md  text-primary-focus">
                            Note
                          </label>
                          <textarea
                            name="note"
                            value={formData().note}
                            onInput={handleInputChange}
                            placeholder="I love this product"
                            class="w-full bg-gray-50 border border-gray-300 rounded text-gray-900 text-sm  p-2 focus:outline-none"
                          />
                        </div>
                        <div class="mt-8">
                          {!formData().address ||
                          !formData().fullname ||
                          !formData().email ||
                          !formData().city ||
                          !formData().note ||
                          !formData().phone ? (
                            <button
                              disabled={true}
                              class="py-2 w-full px-16 text-center text-base-100 bg-primary rounded btn btn-disabled"
                            >
                              Confirm Order
                            </button>
                          ) : (
                            <button
                              type="submit"
                              class="btn btn-primary w-full text-white"
                              // class="w-full py-2 px-16 text-center text-base-200 bg-primary rounded"
                            >
                              Confirm Order
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-span-2">
                    <h1 class="font-bold text-primary-focus">Order Summary</h1>
                    <br />
                    <div class="backdrop-blur-sm bg-white bg-opacity-80 p-8">
                      <For each={cartItems}>
                        {(cartItem) => {
                          return (
                            <Show when={cartItem} fallback={<p>Loading...</p>}>
                              <div class="flex justify-between items-center">
                                <div class="flex items-center space-x-3">
                                  <div>
                                    <div class="avatar">
                                      <div class="w-24 rounded">
                                        <img src={cartItem.product.image} />
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <h1>{cartItem.product.name}</h1>
                                    <div class="flex">
                                      <p>
                                        {cartItem.product.price} x
                                        {cartItem.quantity}
                                      </p>
                                      =
                                      <p class="font-bold ">
                                        $
                                        {cartItem.product.price *
                                          cartItem.quantity}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="flex space-x-7 items-center">
                                  <div class="flex space-x-3 items-center">
                                    {cartItem.quantity === 1 ? (
                                      <div class="bg-gray-100 p-1 rounded-full cursor-pointer">
                                        <div>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-5 h-5 text-gray-600"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    ) : (
                                      <div class="bg-orange-100 p-1 rounded-full cursor-pointer">
                                        <div
                                          onclick={() =>
                                            minusCart(cartItem.product)
                                          }
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-5 h-5 text-orange-600"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    )}

                                    <div class="bg-green-100 p-1 rounded-full cursor-pointer">
                                      <div
                                        onclick={() =>
                                          addToCart(cartItem.product)
                                        }
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="w-5 h-5 text-green-600"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    onClick={() =>
                                      removeFromCart(cartItem.product.id)
                                    }
                                    class="bg-red-100 p-1 rounded-full cursor-pointer"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-4 h-4 text-red-500"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <hr />
                            </Show>
                          );
                        }}
                      </For>
                      <div class="flex justify-end">
                        <div class="flex justify-between items-center mt-12 w-1/2">
                          <div>
                            <h1>Subtotal:</h1>
                          </div>
                          <div>
                            <p class="font-bold text-pink-400">$ {price()}</p>
                          </div>
                        </div>
                      </div>
                      <div class="flex justify-end">
                        <div class="flex justify-between items-center mt-2 w-1/2">
                          <div>
                            <h1>Shipping:</h1>
                          </div>
                          <div>
                            <p class="font-bold text-pink-400">$ ___</p>
                          </div>
                        </div>
                      </div>
                      <br />
                      <hr />
                      <br />
                      <div class="flex justify-end">
                        <div class="flex justify-between items-center w-1/2">
                          <div>
                            <h1>Total(USD):</h1>
                          </div>
                          <div>
                            <p class="font-bold text-pink-400">$ {price()}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
