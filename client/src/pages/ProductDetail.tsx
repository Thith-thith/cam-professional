import { Component } from "solid-js";

const ProductDetail: Component<{}> = (props) => {
  return (
    <div class="mx-44 mt-8">
      <div class="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Core Product</a>
          </li>
          <li>Ribbon</li>
          <li>CAM-TONER W1103A</li>
        </ul>
      </div>
      {/* //product details */}
      <div class="mt-12">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <img class="w-96" src="/products/product1.png" />
          </div>
          <div>df</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
