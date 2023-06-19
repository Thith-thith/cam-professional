import { Component } from "solid-js";
import { useCartContext } from "../context/Cart-context";

const Cart: Component<{}> = (props) => {
  const { cartItems } = useCartContext();
  console.log(cartItems, "carts");
  return (
    <div>
      <div class="px-44">
        <div>
          <h2>Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div>{item.product.name}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
