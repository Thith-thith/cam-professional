import { Component, createEffect, createSignal, For, Show } from "solid-js";
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

  return (
    <>
      <Checkout />
      <div>
        <div class="mx-auto mt-12 sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <h2 class="text-4xl text-[#98A2AE] font-bold text-center">
            Shopping Cart
          </h2>
          <br />

          <div>
            <div>
              {cartItems.length === 0 ? (
                <a href="/products" class=" text-center font-bold text-red-500">
                  <div class="flex justify-center mt-16">
                    <img
                      class="w-64"
                      src="/images/undraw_empty_cart_co35.svg"
                    />
                  </div>
                  <p class="pt-12">Your cart is Empty !</p>
                </a>
              ) : (
                <div>
                  <div class="grid md:grid-cols-5 md:gap-20 mt-12 ">
                    <div class="md:col-span-3">
                      <div class="backdrop-blur-sm bg-white bg-opacity-80">
                        <For each={cartItems}>
                          {(cartItem) => {
                            return (
                              <Show
                                when={cartItem}
                                fallback={<p>Loading...</p>}
                              >
                                <div class="md:flex md:justify-between md:items-center">
                                  <div class="flex items-center space-x-3">
                                    <div>
                                      <div class="avatar">
                                        <div class="w-24 rounded">
                                          <img src={cartItem.product.image} />
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <h1>{cartItem.product?.name}</h1>
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
                                  <div class="flex space-x-7 items-center md:mt-0 mt-2">
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
                                <br />
                                <hr />
                              </Show>
                            );
                          }}
                        </For>
                        <a href="/products">
                          <button
                            type="button"
                            class="w-full rounded-full flex items-center text-center justify-center py-3 px-5 mt-9 text-sm font-medium text-gray-600 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          >
                            <svg
                              class="w-5 h-5 mr-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 21"
                            >
                              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                            </svg>
                            More Products
                          </button>
                        </a>
                      </div>
                    </div>

                    <div class="md:col-span-2">
                      <div class="lg:px-2">
                        <div class="p-4 bg-gray-100 rounded-full">
                          <h1 class="ml-2 font-bold uppercase">Coupon Code</h1>
                        </div>
                        <div class="p-4">
                          <p class="mb-4 italic">
                            If you have a coupon code, please enter it in the
                            box below
                          </p>
                          <div class="justify-center md:flex">
                            <form action="">
                              <div class="flex items-center w-full h-13 pl-3 bg-white border rounded-full">
                                <input
                                  type="coupon"
                                  name="code"
                                  id="coupon"
                                  placeholder="Apply coupon"
                                  value="Camtecpro@2023"
                                  class="w-full text-gray-300 outline-none appearance-none focus:outline-none active:outline-none"
                                />
                                <button
                                  type="submit"
                                  class="text-sm flex items-center px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none"
                                >
                                  <svg
                                    aria-hidden="true"
                                    data-prefix="fas"
                                    data-icon="gift"
                                    class="w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                                    />
                                  </svg>
                                  <span class="font-medium">Apply coupon</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div class="p-4 mt-6 bg-gray-100 rounded-full">
                          <h1 class="ml-2 font-bold uppercase">
                            Instruction for seller
                          </h1>
                        </div>
                        <div class="p-4">
                          <p class="mb-4 italic">
                            If you have some information for the seller you can
                            leave them in the box below
                          </p>
                          <textarea class="w-full h-24 p-2 bg-gray-100 rounded-xl"></textarea>
                        </div>
                      </div>
                      <div class="lg:px-2 ">
                        <div class="p-4 bg-gray-100 rounded-full">
                          <h1 class="ml-2 font-bold uppercase">
                            Order Details
                          </h1>
                        </div>
                        <div class="p-4">
                          <p class="mb-6 italic">
                            Shipping and additionnal costs are calculated based
                            on values you have entered
                          </p>
                          <div class="flex justify-between border-b">
                            <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-semibold text-center text-gray-800">
                              Subtotal
                            </div>
                            <div class="lg:px-4 lg:py-2 m-2 lg:text-xl font-bold text-center text-gray-800">
                              $ {price()}
                            </div>
                          </div>
                          <div class="flex justify-between pt-4 border-b">
                            <div class="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-semibold text-gray-800">
                              Coupon
                            </div>
                            <div class="lg:px-4 lg:py-2 m-2 lg:text-xl font-bold text-center text-primary">
                              $ 100
                            </div>
                          </div>
                          <div class="flex justify-between pt-4 border-b">
                            <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-semibold text-center text-gray-800">
                              New Subtotal
                            </div>
                            <div class="lg:px-4 lg:py-2 m-2 lg:text-xl font-bold text-center text-gray-800">
                              $ {price() - 100}
                            </div>
                          </div>
                          <div class="flex justify-between pt-4 border-b">
                            <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-semibold text-center text-gray-800">
                              Tax
                            </div>
                            <div class="lg:px-4 lg:py-2 m-2 lg:text-xl font-bold text-center text-gray-900">
                              $ 0
                            </div>
                          </div>
                          <div class="flex justify-between pt-4 border-b">
                            <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-semibold text-center text-gray-800">
                              Total
                            </div>
                            <div class="lg:px-4 lg:py-2 m-2 lg:text-2xl font-bold text-center text-danger">
                              $ {price() - 100}
                            </div>
                          </div>
                          <button
                            type="button"
                            data-drawer-target="drawer-right-example"
                            data-drawer-show="drawer-right-example"
                            aria-controls="drawer-right-example"
                            data-drawer-placement="right"
                            class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                          >
                            <svg
                              aria-hidden="true"
                              data-prefix="far"
                              data-icon="credit-card"
                              class="w-8"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="currentColor"
                                d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                              />
                            </svg>
                            <span class="ml-2 mt-5px">
                              Procceed to checkout
                            </span>
                          </button>
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
    </>
  );
};

export default Cart;

export const Checkout: Component = (props) => {
  const [formData, setFormData] = createSignal<FormData>({
    fullname: "",
    email: "",
    note: "",
    address: "",
    phone: "",
    city: "",
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

  console.log(formData);

  return (
    <>
      <div
        id="drawer-right-example"
        class="container fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-1/2 dark:bg-gray-800"
        tabindex="-1"
        aria-labelledby="drawer-right-label"
      >
        <div>
          <div>
            <h5
              id="drawer-right-label"
              class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
            >
              <svg
                class="w-4 h-4 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              Input your information
            </h5>
            <button
              type="button"
              data-drawer-hide="drawer-right-example"
              aria-controls="drawer-right-example"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close menu</span>
            </button>
          </div>

          <div class="backdrop-blur-sm bg-white bg-opacity-80 md:p-8 p-3">
            {/* <form onSubmit={handleSubmit}>
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
                  <label class="block text-md  text-primary-focus">Phone</label>
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
                  <label class="block text-md  text-primary-focus">Email</label>
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
                  <label class="block text-md  text-primary-focus">City</label>
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
                <label class="block text-md  text-primary-focus">Address</label>
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
                <label class="block text-md  text-primary-focus">Note</label>
                <textarea
                  name="note"
                  value={formData().note}
                  onInput={handleInputChange}
                  placeholder="I love this product"
                  class="w-full bg-gray-50 border border-gray-300 rounded text-gray-900 text-sm  p-2 focus:outline-none"
                />
              </div>
              <div class="mt-8">
                {formData().address ? (
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
                    onclick={handleSubmit}
                  >
                    Confirm Order
                  </button>
                )}
              </div>
            </form> */}

            <form>
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm block w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
