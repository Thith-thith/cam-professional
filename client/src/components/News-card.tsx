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
    <div class="h-full">
      <a>
        <div class="bg-base-200 h-full rounded-none">
          <figure>
            <img src={props.image} alt="Shoes" class="h-full w-full" />
          </figure>
          <div class="card-body">
            <h1 class="font-extrabold text-lg">{props.title}</h1>
            <p class="text-gray-500">{props.des}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
