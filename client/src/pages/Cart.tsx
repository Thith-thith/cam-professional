import { Component, createEffect, createSignal } from "solid-js";
import { useCartContext } from "../context/CartContext";

type Name = {
  name: string;
};

const Cart: Component = () => {
  const { cartItems } = useCartContext();

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
