import { Component, For, Show, createResource } from "solid-js";
import Cards from "../../components/cards/Cards";
const fetchData = async () => {
  const res = await fetch("http://localhost:3000/CoreProducts");
  return res.json();
};

const Products: Component<{}> = () => {
  const [AllCoreProducts] = createResource(fetchData);

  return (
    <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div>
        <Banner />
      </div>

      <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-black bg-opacity-25"></div>

        <div class="fixed inset-0 z-40 flex">
          <div class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div class="flex items-center justify-between px-4">
              <h2 class="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              >
                <span class="sr-only">Close menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form class="mt-4 border-t border-gray-200">
              <h3 class="sr-only">Categories</h3>
              <ul role="list" class="px-2 py-3 font-medium text-gray-900">
                <li>
                  <a href="#" class="block px-2 py-3">
                    Totes
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-2 py-3">
                    Backpacks
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-2 py-3">
                    Travel Bags
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-2 py-3">
                    Hip Bags
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-2 py-3">
                    Laptop Sleeves
                  </a>
                </li>
              </ul>

              <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">
                  <button
                    type="button"
                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-mobile-0"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">Color</span>
                    <span class="ml-6 flex items-center">
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                      </svg>
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div class="pt-6" id="filter-section-mobile-0">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-0"
                        name="color[]"
                        value="white"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-color-0"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        White
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-1"
                        name="color[]"
                        value="beige"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-color-1"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Beige
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-2"
                        name="color[]"
                        value="blue"
                        type="checkbox"
                        checked
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-color-2"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Blue
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-3"
                        name="color[]"
                        value="brown"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-color-3"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Brown
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-4"
                        name="color[]"
                        value="green"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-color-4"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Green
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-5"
                        name="color[]"
                        value="purple"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-color-5"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Purple
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">
                  <button
                    type="button"
                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-mobile-1"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">Category</span>
                    <span class="ml-6 flex items-center">
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                      </svg>
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div class="pt-6" id="filter-section-mobile-1">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-0"
                        name="category[]"
                        value="new-arrivals"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-category-0"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Products
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-1"
                        name="category[]"
                        value="sale"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-category-1"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Sale
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-2"
                        name="category[]"
                        value="travel"
                        type="checkbox"
                        checked
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-category-2"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Travel
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-3"
                        name="category[]"
                        value="organization"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-category-3"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Organization
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-4"
                        name="category[]"
                        value="accessories"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-category-4"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Accessories
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">
                  <button
                    type="button"
                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-mobile-2"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">Size</span>
                    <span class="ml-6 flex items-center">
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                      </svg>
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div class="pt-6" id="filter-section-mobile-2">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-size-0"
                        name="size[]"
                        value="2l"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-size-0"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        2L
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-size-1"
                        name="size[]"
                        value="6l"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-size-1"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        6L
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-size-2"
                        name="size[]"
                        value="12l"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-size-2"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        12L
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-size-3"
                        name="size[]"
                        value="18l"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-size-3"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        18L
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-size-4"
                        name="size[]"
                        value="20l"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-size-4"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        20L
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-size-5"
                        name="size[]"
                        value="40l"
                        type="checkbox"
                        checked
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-mobile-size-5"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        40L
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">
            Products
          </h1>

          <div class="flex items-center">
            <div class="relative inline-block text-left">
              <div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                  type="button"
                >
                  Sort
                  <svg
                    class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div
                id="dropdown"
                class="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Most Popular
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Best Rating
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Newest
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Low to High
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      High to Low
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section aria-labelledby="products-heading" class="pb-24 pt-6">
          <h2 id="products-heading" class="sr-only">
            Products
          </h2>

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <form class="hidden lg:block">
              <h3 class="sr-only">Categories</h3>
              <ul
                role="list"
                class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
              >
                <li>
                  <a href="#">Equipment</a>
                </li>
                <li>
                  <a href="#">Ink Cartridge</a>
                </li>
                <li>
                  <a href="#">CAM-TONER CARTRIDGE</a>
                </li>
                <li>
                  <a href="#">Printer</a>
                </li>
                <li>
                  <a href="#">Bill Counter</a>
                </li>
                <li>
                  <a href="#">IT Services</a>
                </li>
                <li>
                  <a href="#">Ribbon</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
              </ul>
              <div class="border-b border-gray-200 py-6">
                <h3 class="-my-3 flow-root">
                  <button
                    type="button"
                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-1"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">Branding</span>
                  </button>
                </h3>

                {/*--------------- filters branding ---------------  */}

                <div class="pt-6" id="filter-section-1">
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <input
                        id="filter-category-0"
                        name="category[]"
                        value="new-arrivals"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-category-0"
                        class="ml-3 text-sm text-gray-600"
                      >
                        RIBBON
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-category-1"
                        name="category[]"
                        value="sale"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-category-1"
                        class="ml-3 text-sm text-gray-600"
                      >
                        EVOLIS
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-category-2"
                        name="category[]"
                        value="travel"
                        type="checkbox"
                        checked
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-category-2"
                        class="ml-3 text-sm text-gray-600"
                      >
                        FUJIFILM
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-category-3"
                        name="category[]"
                        value="organization"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-category-3"
                        class="ml-3 text-sm text-gray-600"
                      >
                        HP
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-category-4"
                        name="category[]"
                        value="accessories"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-category-4"
                        class="ml-3 text-sm text-gray-600"
                      >
                        DELL
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-category-4"
                        name="category[]"
                        value="accessories"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-category-4"
                        class="ml-3 text-sm text-gray-600"
                      >
                        SONY
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div class="lg:col-span-3">
              <div class="grid md:grid-cols-3 gap-4 mt-4">
                <Show when={AllCoreProducts()} fallback={<p>Loading...</p>}>
                  <For each={AllCoreProducts()}>
                    {(CoreProducts) => {
                      return <Cards product={CoreProducts} />;
                    }}
                  </For>
                </Show>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;

export const Banner: Component = () => {
  return (
    <div class="container mx-auto pt-9 md:pt-12 md:px-3">
      <div class="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-4">
        <div class="rounded-2xl flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
          <div class="flex flex-col justify-center md:w-1/2">
            <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
              Best Deal
            </h1>
            <p class="text-base lg:text-xl text-gray-800 dark:text-white mt-2">
              Save upto <span class="font-bold">50%</span>
            </p>
          </div>
          <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <img
              src="../../../public/products/product-2.png"
              alt=""
              class="w-1/2"
            />
          </div>
        </div>
        <div class="rounded-2xl md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
          <div class="flex flex-col justify-center">
            <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
              Game Console
            </h1>
            <p class="text-base lg:text-xl text-gray-800 dark:text-white">
              Save Upto <span class="font-bold">30%</span>
            </p>
          </div>
          <div class="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
            <img
              src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"
              alt=""
              class="md:w-20 md:h-20 lg:w-full lg:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
