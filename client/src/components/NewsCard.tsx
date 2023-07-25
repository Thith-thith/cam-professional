import { Component } from "solid-js";

export type NewsData = {
  id: string;
  title: string;
  image: string;
  des: string;
  author: string;
};
interface Props {
  props: NewsData;
}

const NewsCard: Component<Props> = ({ props }) => {
  return (
    <div class="w-full ">
      <div class="mx-auto mb-3 max-w-[370px]">
        <div class="mb-3 overflow-hidden rounded-2xl border-gray-200 shadow hover:scale-105 duration-150">
          <img src={props.image} alt="news" class="w-full" />
        </div>
        <div>
          <span class="bg-primary mb-2 inline-block rounded-lg py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
            Dec 22, 2023
          </span>
          <h3>
            <a
              href="javascript:void(0)"
              class="text-dark hover:text-primary inline-block text-xl font-semibold sm:text-lg lg:text-lg xl:text-lg"
            >
              {props.title}
            </a>
          </h3>
          <p class="text-body-color text-base">{props.des}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
