import { Component, For } from "solid-js";
import NewsCard from "../../components/cards/NewsCard";
import NewsData from "../../data/News";

const News: Component = () => {
  return (
    <section>
      <Banner />
    </section>
  );
};

export default News;

export const Banner: Component = () => {
  return (
    <section class="w-full h-screen overflow-x-hidden ">
      <div class="news-background">
        <div class="bg-white/90 w-full h-full bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
          <div class="mx-auto max-w-screen-xl py-9 ">
            <div class="flex px-5 md:flex-row flex-col items-center bg-white rounded-3xl">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left">
                <h1 class=" sm:w-10/12 md:w-2/3 font-black text-primary text-4xl text-left sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
                  Our{" "}
                  <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                    News
                  </span>
                </h1>
                <p class="mt-3 leading-relaxed text-xl font-normal text-gray-600">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
              </div>
              <div class="lg:max-w-sm lg:w-1/2 md:w-1/2 w-5/6">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="../../public/images/shopping.png"
                />
              </div>
            </div>
            <div class=" grid md:grid-cols-4 gap-4 mt-12">
              <For each={NewsData}>
                {(NewData) => {
                  return <NewsCard props={NewData} />;
                }}
              </For>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
