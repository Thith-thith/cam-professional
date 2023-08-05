import { Component } from "solid-js";

export type Image = {
  image: String;
  name: String;
  width: String;
  heigh: String;
  is_scale: Boolean;
};

const Image: Component<Image> = (props) => {
  return (
    <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
      <img
        src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
        alt="Two each of gray, white, and black shirts laying flat."
        class="h-full w-full object-cover object-center hover:scale-125 duration-150"
      />
    </div>
  );
};

export default Image;
