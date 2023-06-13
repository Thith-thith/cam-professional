import { Component, For } from "solid-js";
import NewsCard from "../../components/News-card";
import NewsData from "../../data/News";

const News: Component = () => {
  return (
    <div>
      <h1 class="text-center text-gray-500 font-extrabold md:text-2xl">
        CHECK LATEST NEWS
      </h1>
      <div class="grid grid-cols-4 gap-4 mt-12">
        <For each={NewsData}>
          {(NewData) => {
            return (
              <div>
                <NewsCard props={NewData} />
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default News;
