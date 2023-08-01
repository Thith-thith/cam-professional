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
    <div class="text-center text-gray-500 dark:text-gray-400">
      <img
        class="mx-auto mb-4 w-52 h-52 rounded-full"
        src={props.image}
        alt="Bonnie Avatar"
      />
      <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{props.name}</a>
      </h3>

      <p>{props.position}</p>
    </div>
  );
};

export default MemberCard;
