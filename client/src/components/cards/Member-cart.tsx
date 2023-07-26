import { Component } from "solid-js";

export type Members = {
  id: string;
  name: string;
  image: string;
  position: string;
};
interface Props {
  props: Members;
}
const MemberCard: Component<Props> = ({ props }) => {
  return (
    <div>
      <div class="bg-base-200 rounded h-full">
        <div class="md:py-8 py-2 px-10">
          <div class="flex justify-center">
            <img class="w-44" src={props.image} />
          </div>
        </div>
        <div class="text-center px-2 py-8">
          <h1 class="font-bold text-pink-500">{props.name}</h1>
          <p class="text-sm text-gray-600">{props.position}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
