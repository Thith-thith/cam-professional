import { Component, For, Show, createResource } from "solid-js";
import latestProduct from "../../data/Lates-product";
import Cards from "../components/cards/Cards";
import NewsData from "../data/News";
import NewsCard from "../components/cards/NewsCard";

const Home: Component = () => {
  return (
    <div>
      <Banner />
      <div class="md:mx-44 mx-3">
        <div class="mt-20">
          <LatestProducts />
        </div>
        <div class="mt-32">
          <MainProducts />
        </div>

        <div>
          <Features />
        </div>
        <div class="mt-32">
          <News />
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;

export const Banner: Component = () => {
  return (
    <section class="w-full h-screen overflow-x-hidden">
      <div class="background-img">
        <div class="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <div>
            <a
              href="#"
              class="inline-flex justify-between items-center py-1 px-4 mb-3 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span class="text-sm font-medium ">
                CAM PROFESSIONAL TECHNOLOGY
              </span>
              <svg
                class="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              The Best Toner Cartridge Supplier In Cambodia
            </h1>
            <p class="mb-1 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              One of the leading companies in the consumer printer field
              established in 2010
            </p>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Its main product is compatible toner cartridges for HP, Canon,
              Epson, Lexmark, Samsung, Dell, Brother, etc.
            </p>
          </div>

          <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/products"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-2xl bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Started
              <svg
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div class="mt-24 px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span class="font-semibold text-gray-400 uppercase">
              Our Clients Believe In Us
            </span>
            <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <a
                href="#"
                class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <img
                  alt=""
                  src="../../public/images/maybank.svg"
                  class="w-48 "
                />
              </a>
              <a
                href="#"
                class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <img
                  alt=""
                  src="../../public/images/prince-bank.png"
                  class="w-48"
                />
              </a>
              <a
                href="#"
                class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <img
                  alt=""
                  src="../../public/images/hgb-group.png"
                  class="w-36"
                />
              </a>
            </div>
            <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <a
                href="#"
                class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <img
                  alt=""
                  src="../../public/images/ph_logo.png"
                  class="w-20"
                />
              </a>
              <a
                href="#"
                class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <img
                  alt=""
                  src="../../public/images/orkide_development_logo.jpg"
                  class="w-28"
                />
              </a>
              <a
                href="#"
                class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <img
                  alt=""
                  src="../../public/images/CAMPU_BANK.jpg"
                  class="w-72"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const LatestProducts: Component<{}> = () => {
  return (
    <section id="products">
      <div class="mx-auto max-w-screen-xl">
        <h1 class="text-center text-gray-300 font-extrabold md:text-5xl uppercase">
          Latest Products
        </h1>
        <p class="text-center text-xl font-semibold uppercase">
          Out new products
        </p>
        <div class="float-right py-3 flex space-x-1 items-center">
          <a href="/products" class="text-gray-500 text-xs font-bold">
            Show More
          </a>
          <img class="w-auto h-3.5" src="/images/right-arrow.png" />
        </div>
        <div class="grid md:grid-cols-4 grid-cols-1 gap-4 mt-12">
          <For each={latestProduct}>
            {(latestProduct) => {
              return (
                <div>
                  <Cards product={latestProduct} />
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </section>
  );
};

export const MainProducts: Component<{}> = () => {
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/CoreProducts");
    return res.json();
  };
  const [coreProducts] = createResource(fetchData);

  return (
    <section>
      <div class="mx-auto max-w-screen-xl">
        <h1 class="text-center text-gray-300 font-extrabold md:text-5xl uppercase">
          CHECK THE CORE PRODUCT
        </h1>
        <p class="text-center text-xl font-semibold uppercase">
          LOOKING FOR OUR CORE PRODUCT
        </p>
        <a href="/products">
          <div class="float-right py-3 flex space-x-1 items-center">
            <h1 class="text-gray-500 text-xs font-bold">Show More</h1>
            <img class="w-auto h-3.5" src="/images/right-arrow.png" />
          </div>
        </a>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
          <Show when={coreProducts()} fallback={<p>Loading...</p>}>
            <For each={coreProducts().slice(0, 8)}>
              {(coreProducts) => {
                return (
                  <div>
                    <Cards product={coreProducts} />
                  </div>
                );
              }}
            </For>
          </Show>
        </div>
      </div>
    </section>
  );
};

export const Features: Component = () => {
  return (
    <section>
      <div class="mt-32 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-gray-100">
              Brand new
            </p>
          </div>
          <h2 class="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span class="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-primary lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                  width="52"
                  height="24"
                ></rect>
              </svg>
              <span class="relative">CAM </span>
            </span>{" "}
            Professional Technology Co., LTD
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            We Choose the best parts of consumable to make the whole toner
            cartridge. We test each other cartridge before delivery to make sure
            quality.
          </p>
        </div>
        <div class="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-3">
          <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div class="mr-4">
              <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  class="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
            </div>
            <div>
              <h6 class="mb-3 text-xl font-bold leading-5">
                Which Payment systems
              </h6>
              <p class="mb-3 text-sm text-gray-900">
                You can use payments systems, as well as bank payment, card
                payment.
              </p>
              <a
                href="/"
                aria-label=""
                class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div class="mr-4">
              <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  class="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
            </div>
            <div>
              <h6 class="mb-3 text-xl font-bold leading-5">Shipping methods</h6>
              <p class="mb-3 text-sm text-gray-900">
                We delivery for you at anytime and anywhere
              </p>
              <a
                href="/"
                aria-label=""
                class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div class="mr-4">
              <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  class="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
            </div>
            <div>
              <h6 class="mb-3 text-xl font-bold leading-5">Policy</h6>
              <p class="mb-3 text-sm text-gray-900">
                We will renew for the error product in warranty
              </p>
              <a
                href="/"
                aria-label=""
                class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const News: Component = () => {
  return (
    <section>
      <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <h1 class="text-center text-gray-300 font-extrabold md:text-5xl uppercase">
          CHECK LATEST NEWS
        </h1>
        <p class="text-center text-xl font-semibold uppercase">
          Stay connect with us
        </p>
        <div class="float-right py-3 flex space-x-1 items-center">
          <a href="/news" class="text-gray-500 text-xs font-bold">
            Show More
          </a>
          <img class="w-auto h-3.5" src="/images/right-arrow.png" />
        </div>
        <div class="grid md:grid-cols-4 gap-4 mt-12">
          <For each={NewsData}>
            {(NewData) => {
              return <NewsCard props={NewData} />;
            }}
          </For>
        </div>
      </div>
    </section>
  );
};

export const Contact: Component = () => {
  return (
    <section id="contact" class="text-gray-600 body-font relative py-24">
      <h1 class="text-center text-gray-300 font-extrabold md:text-5xl uppercase">
        Contact US
      </h1>
      <p class="text-center text-xl font-semibold uppercase">
        We Would Be Happy To Meet You And Cooperate Together
      </p>
      <div class="mx-auto mt-24 sm:max-w-xl md:max-w-full lg:max-w-screen-xl  flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.770467508788!2d104.8496440871582!3d11.555971500000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513223a19f75%3A0xb642eeae5a98c92b!2sCAM%20PROFESSIONAL%20TECHNOLOGY%20CO.%2C%20LTD.!5e0!3m2!1sen!2skh!4v1690609006019!5m2!1sen!2skh"
            width="100%"
            height="100%"
            style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
            allowfullscreen={true}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="absolute inset-0"
          ></iframe>
          <div class="bg-white/30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 relative flex flex-wrap py-6 shadow-md rounded-lg">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p class="mt-1">
                #18C1, Sangkat Tuek Thlar, Khan Sen Sok, Phnom Penh, Cambodia
              </p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a class="text-indigo-500 leading-relaxed">
                info@camprotec.com.kh
              </a>
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p class="leading-relaxed">023 884 789</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full  rounded-xl bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button class="text-white rounded-xl bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};
