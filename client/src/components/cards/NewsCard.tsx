import { Component } from "solid-js";
import { NavLink } from "@solidjs/router";

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
      <NavLink href={`/news/${props.id}`}>
        <div class="mx-auto mb-3 max-w-[370px]">
          <div class="mb-3 overflow-hidden rounded-2xl border-gray-200 shadow hover:scale-105 duration-150">
            <img src={props.image} alt="news" class="w-full" />
          </div>
          <div>
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
      </NavLink>
    </div>
  );
};

export default NewsCard;
