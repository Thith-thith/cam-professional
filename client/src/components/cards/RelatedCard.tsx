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

const RelatedCard: Component<Props> = ({ props }) => {
  return (
    <NavLink href={`/news/${props.id}`}>
      <div class="lg:w-full mt-2 ">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border p-2 rounded-xl">
          <img
            alt="team"
            class="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4"
            src={props?.image}
          />
          <div class="flex-grow sm:pl-8">
            <p class="mb-4">{props.title}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default RelatedCard;
