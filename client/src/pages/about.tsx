import { Component, For, Show } from "solid-js";
import Members from "../data/Members";
import MemberCard from "../components/cards/Member-cart";
const About: Component = () => {
  return (
    <>
      <Banner />
      <Missions />
      <Teams />
    </>
  );
};

export default About;

export const Banner: Component = () => {
  return (
    <section class="w-full h-screen overflow-x-hidden">
      <div class="background-img-about">
        <div class="py-12 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-4">
          <div>
            <h1 class="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-primary text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
              We Believe In Hard Work <br />
              <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                And Commitment
              </span>
              .
            </h1>
            <div class="lg:flex">
              <div class="relative mt-8 md:mt-16 space-y-6 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                <p class="sm:text-lg text-gray-500 font-normal dark:text-gray-300 lg:w-11/12">
                  Our Company is one of leading company in consumer printer
                  field established in 2010, the main product is compatible
                  toner cartridges for HP, Canon, Epson, Lexmark, Samsung, Dell,
                  Brother, etc.
                </p>
                <p class="sm:text-lg text-gray-500 font-normal dark:text-gray-300 lg:w-11/12">
                  We are trying our best service for you with the best quality
                  and trust. Finding the best solutions, fixing and solve issues
                  with all our ability.
                </p>
                <p class="sm:text-lg text-gray-500 font-normal dark:text-gray-300 lg:w-11/12">
                  We choose the best parts of consumables to make the whole
                  toner cartridge.
                </p>
                <p class="sm:text-lg text-gray-500 font-normal dark:text-gray-300 lg:w-11/12">
                  We test each toner cartridge before delivery to make sure
                  quality.
                </p>
              </div>
              <div class="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12 z-0">
                <div class="relative w-full">
                  <div
                    aria-hidden="true"
                    class="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
                  ></div>
                  <img
                    src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg"
                    class="relative w-full animate-spin animate-infinite animate-duration-[300000ms]"
                    alt="wath illustration"
                    loading="lazy"
                    width="320"
                    height="280"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Missions: Component = () => {
  return (
    <section>
      <section>
        <div class="pt-60 mx-auto max-w-screen-xl lg:pt-60 lg:px-4">
          <div>
            <div class="relative flex justify-start">
              <div class="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12 xl:pb-0">
                <div
                  class="snap xs:max-w-[368px] flex-no-wrap mx-auto flex h-auto w-full max-w-[300px] overflow-hidden transition-all sm:max-w-[508px] md:max-w-[630px] lg:max-w-[738px] 2xl:max-w-[850px]"
                  x-ref="carousel"
                >
                  <div class="xs:min-w-[368px] mx-auto h-full min-w-[300px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[850px]">
                    <div class="w-full items-center md:flex">
                      <div class="relative mb-12 w-full max-w-[310px] md:mr-12 md:mb-0 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
                        <img
                          src="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                          alt="image"
                          class="w-full"
                        />
                        <span class="absolute -top-6 -left-6 z-[-1] hidden sm:block">
                          <svg
                            width="77"
                            height="77"
                            viewBox="0 0 77 77"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="1.66343"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 1.66343 74.5221)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="30.94"
                              r="1.66343"
                              transform="rotate(-90 1.66343 30.94)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 16.3016 74.5221)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="30.94"
                              r="1.66343"
                              transform="rotate(-90 16.3016 30.94)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 30.9398 74.5221)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="30.94"
                              r="1.66343"
                              transform="rotate(-90 30.9398 30.94)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 45.578 74.5221)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="30.94"
                              r="1.66343"
                              transform="rotate(-90 45.578 30.94)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="74.5216"
                              r="1.66343"
                              transform="rotate(-90 60.2162 74.5216)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="74.5216"
                              r="1.66343"
                              transform="rotate(-90 74.6634 74.5216)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="30.9398"
                              r="1.66343"
                              transform="rotate(-90 60.2162 30.9398)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="30.9398"
                              r="1.66343"
                              transform="rotate(-90 74.6634 30.9398)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 1.66343 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 1.66343 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 16.3016 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 16.3016 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 30.9398 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 30.9398 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 45.578 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 45.578 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 60.2162 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 74.6634 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 60.2162 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 74.6634 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 1.66343 45.2455)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="1.66342"
                              r="1.66343"
                              transform="rotate(-90 1.66343 1.66342)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 16.3016 45.2455)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="1.66342"
                              r="1.66343"
                              transform="rotate(-90 16.3016 1.66342)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 30.9398 45.2455)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="1.66342"
                              r="1.66343"
                              transform="rotate(-90 30.9398 1.66342)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 45.578 45.2455)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="1.66344"
                              r="1.66343"
                              transform="rotate(-90 45.578 1.66344)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="45.2458"
                              r="1.66343"
                              transform="rotate(-90 60.2162 45.2458)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="45.2458"
                              r="1.66343"
                              transform="rotate(-90 74.6634 45.2458)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="1.66371"
                              r="1.66343"
                              transform="rotate(-90 60.2162 1.66371)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="1.66371"
                              r="1.66343"
                              transform="rotate(-90 74.6634 1.66371)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                        <span class="absolute  -bottom-8 -right-20 z-[-1]">
                          <svg
                            width="217"
                            height="229"
                            viewBox="0 0 217 229"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                              fill="url(#paint0_linear_1179_5)"
                            ></path>
                            <defs>
                              <linearGradient
                                id="paint0_linear_1179_5"
                                x1="76.5"
                                y1="281"
                                x2="76.5"
                                y2="1.22829e-05"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  stop-color="#3056D3"
                                  stop-opacity="0.08"
                                ></stop>
                                <stop
                                  offset="1"
                                  stop-color="#C4C4C4"
                                  stop-opacity="0"
                                ></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                      </div>
                      <div class="w-full">
                        <div>
                          <div class="mb-7">
                            <h1 class="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-primary text-xl text-center sm:text-5xl md:text-3xl lg:w-auto lg:text-left xl:text-4xl dark:text-white">
                              Our{" "}
                              <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                                Mission
                              </span>
                              .
                            </h1>
                          </div>
                          <p class="text-body-color mb-11 text-base font-medium italic sm:text-lg lg:text-2xl">
                            Make customers peaceful and prosperous with the
                            company’s use of service products.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class=" mx-auto max-w-screen-xl lg:px-4">
          <div>
            <div class="relative flex justify-end">
              <div class="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12 xl:pb-0">
                <div
                  class="snap xs:max-w-[368px] flex-no-wrap mx-auto flex h-auto w-full max-w-[300px] overflow-hidden transition-all sm:max-w-[508px] md:max-w-[630px] lg:max-w-[738px] 2xl:max-w-[850px]"
                  x-ref="carousel"
                >
                  <div class="xs:min-w-[368px] mx-auto h-full min-w-[300px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[850px]">
                    <div class="w-full items-center md:flex">
                      <div class="w-full">
                        <div>
                          <div class="mb-7">
                            <h1 class="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-primary text-xl text-right sm:text-5xl md:text-3xl lg:w-auto lg:text-right xl:text-4xl dark:text-white">
                              Our{" "}
                              <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                                Vission
                              </span>
                              .
                            </h1>
                          </div>
                          <p class="text-body-color text-right mb-11 text-base font-medium italic sm:text-lg lg:text-2xl">
                            Becoming a perfect company in supplying products and
                            technology services.
                          </p>
                        </div>
                      </div>
                      <div class="relative mb-12 w-full max-w-[310px] md:ml-12 md:mb-0 md:max-w-[250px] lg:ml-24 lg:max-w-[280px] 2xl:ml-24">
                        <img
                          src="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                          alt="image"
                          class="w-full"
                        />
                        <span class="absolute -top-6 -left-6 z-[-1] hidden sm:block">
                          <svg
                            width="77"
                            height="77"
                            viewBox="0 0 77 77"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="1.66343"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 1.66343 74.5221)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="30.94"
                              r="1.66343"
                              transform="rotate(-90 1.66343 30.94)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 16.3016 74.5221)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="30.94"
                              r="1.66343"
                              transform="rotate(-90 16.3016 30.94)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 30.9398 74.5221)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="30.94"
                              r="1.66343"
                              transform="rotate(-90 30.9398 30.94)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 45.578 74.5221)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="30.94"
                              r="1.66343"
                              transform="rotate(-90 45.578 30.94)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="74.5216"
                              r="1.66343"
                              transform="rotate(-90 60.2162 74.5216)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="74.5216"
                              r="1.66343"
                              transform="rotate(-90 74.6634 74.5216)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="30.9398"
                              r="1.66343"
                              transform="rotate(-90 60.2162 30.9398)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="30.9398"
                              r="1.66343"
                              transform="rotate(-90 74.6634 30.9398)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 1.66343 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 1.66343 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 16.3016 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 16.3016 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 30.9398 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 30.9398 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 45.578 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 45.578 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 60.2162 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 74.6634 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 60.2162 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 74.6634 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 1.66343 45.2455)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="1.66342"
                              r="1.66343"
                              transform="rotate(-90 1.66343 1.66342)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 16.3016 45.2455)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="1.66342"
                              r="1.66343"
                              transform="rotate(-90 16.3016 1.66342)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 30.9398 45.2455)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="1.66342"
                              r="1.66343"
                              transform="rotate(-90 30.9398 1.66342)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 45.578 45.2455)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="1.66344"
                              r="1.66343"
                              transform="rotate(-90 45.578 1.66344)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="45.2458"
                              r="1.66343"
                              transform="rotate(-90 60.2162 45.2458)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="45.2458"
                              r="1.66343"
                              transform="rotate(-90 74.6634 45.2458)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="1.66371"
                              r="1.66343"
                              transform="rotate(-90 60.2162 1.66371)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="1.66371"
                              r="1.66343"
                              transform="rotate(-90 74.6634 1.66371)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                        <span class="absolute  -bottom-8 -left-16 z-[-1]">
                          <svg
                            width="217"
                            height="229"
                            viewBox="0 0 217 229"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                              fill="url(#paint0_linear_1179_5)"
                            ></path>
                            <defs>
                              <linearGradient
                                id="paint0_linear_1179_5"
                                x1="76.5"
                                y1="281"
                                x2="76.5"
                                y2="1.22829e-05"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  stop-color="#3056D3"
                                  stop-opacity="0.08"
                                ></stop>
                                <stop
                                  offset="1"
                                  stop-color="#C4C4C4"
                                  stop-opacity="0"
                                ></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class=" mx-auto max-w-screen-xl  lg:px-4">
          <div>
            <div class="relative flex justify-start">
              <div class="relative w-full pb-16 xl:pb-0">
                <div
                  class="snap xs:max-w-[368px] flex-no-wrap mx-auto flex h-auto w-full overflow-hidden transition-all "
                  x-ref="carousel"
                >
                  <div class="xs:min-w-[368px] mx-auto h-full min-w-[300px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[850px]">
                    <div class="w-full items-center md:flex">
                      <div class="relative mb-12 w-full max-w-[310px] md:mr-12 md:mb-0 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
                        <img
                          src="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                          alt="image"
                          class="w-full"
                        />
                        <span class="absolute -top-6 -left-6 z-[-1] hidden sm:block">
                          <svg
                            width="77"
                            height="77"
                            viewBox="0 0 77 77"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="1.66343"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 1.66343 74.5221)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="30.94"
                              r="1.66343"
                              transform="rotate(-90 1.66343 30.94)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 16.3016 74.5221)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="30.94"
                              r="1.66343"
                              transform="rotate(-90 16.3016 30.94)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 30.9398 74.5221)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="30.94"
                              r="1.66343"
                              transform="rotate(-90 30.9398 30.94)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="74.5221"
                              r="1.66343"
                              transform="rotate(-90 45.578 74.5221)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="30.94"
                              r="1.66343"
                              transform="rotate(-90 45.578 30.94)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="74.5216"
                              r="1.66343"
                              transform="rotate(-90 60.2162 74.5216)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="74.5216"
                              r="1.66343"
                              transform="rotate(-90 74.6634 74.5216)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="30.9398"
                              r="1.66343"
                              transform="rotate(-90 60.2162 30.9398)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="30.9398"
                              r="1.66343"
                              transform="rotate(-90 74.6634 30.9398)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 1.66343 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 1.66343 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 16.3016 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 16.3016 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 30.9398 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 30.9398 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 45.578 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 45.578 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 60.2162 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="59.8839"
                              r="1.66343"
                              transform="rotate(-90 74.6634 59.8839)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 60.2162 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="16.3017"
                              r="1.66343"
                              transform="rotate(-90 74.6634 16.3017)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 1.66343 45.2455)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.66343"
                              cy="1.66342"
                              r="1.66343"
                              transform="rotate(-90 1.66343 1.66342)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 16.3016 45.2455)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="16.3016"
                              cy="1.66342"
                              r="1.66343"
                              transform="rotate(-90 16.3016 1.66342)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 30.9398 45.2455)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="30.9398"
                              cy="1.66342"
                              r="1.66343"
                              transform="rotate(-90 30.9398 1.66342)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="45.2455"
                              r="1.66343"
                              transform="rotate(-90 45.578 45.2455)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="45.578"
                              cy="1.66344"
                              r="1.66343"
                              transform="rotate(-90 45.578 1.66344)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="45.2458"
                              r="1.66343"
                              transform="rotate(-90 60.2162 45.2458)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="45.2458"
                              r="1.66343"
                              transform="rotate(-90 74.6634 45.2458)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="60.2162"
                              cy="1.66371"
                              r="1.66343"
                              transform="rotate(-90 60.2162 1.66371)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="74.6634"
                              cy="1.66371"
                              r="1.66343"
                              transform="rotate(-90 74.6634 1.66371)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                        <span class="absolute  -bottom-8 -right-20 z-[-1]">
                          <svg
                            width="217"
                            height="229"
                            viewBox="0 0 217 229"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                              fill="url(#paint0_linear_1179_5)"
                            ></path>
                            <defs>
                              <linearGradient
                                id="paint0_linear_1179_5"
                                x1="76.5"
                                y1="281"
                                x2="76.5"
                                y2="1.22829e-05"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  stop-color="#3056D3"
                                  stop-opacity="0.08"
                                ></stop>
                                <stop
                                  offset="1"
                                  stop-color="#C4C4C4"
                                  stop-opacity="0"
                                ></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                      </div>
                      <div class="w-full">
                        <div>
                          <div class="mb-7">
                            <h1 class="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-primary text-xl text-center sm:text-5xl md:text-3xl lg:w-auto lg:text-left xl:text-4xl dark:text-white">
                              Our{" "}
                              <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                                Policies
                              </span>
                              .
                            </h1>
                          </div>
                          <p class="text-body-color mb-3 text-base font-medium italic sm:text-lg lg:text-2xl">
                            All company employees and professionals are the
                            number one property, then customers.
                          </p>
                          <p class="text-body-color mb-3 text-base font-medium italic sm:text-lg lg:text-2xl">
                            Serve customers to be the most perfect and sincere.
                          </p>
                          <p class="text-body-color mb-3 text-base font-medium italic sm:text-lg lg:text-2xl">
                            End the problem by finding the central and best
                            solutions.
                          </p>
                          <p class="text-body-color mb-3 text-base font-medium italic sm:text-lg lg:text-2xl">
                            Self-respect, respect others is the foundation of
                            the company’s morality.
                          </p>
                          <p class="text-body-color mb-3 text-base font-medium italic sm:text-lg lg:text-2xl">
                            Help thinking about every method, enabling the
                            company to grow, we will grow the same.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export const Teams: Component = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="pt-9 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h1 class="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-primary text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
            Our Core{" "}
            <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Teams
            </span>
          </h1>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Meeting Our Amazing Team. We Couldn't Do It Without Them.
          </p>
        </div>
        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <For each={Members}>
            {(Member) => {
              return (
                <div>
                  <MemberCard props={Member} />
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </section>
  );
};
