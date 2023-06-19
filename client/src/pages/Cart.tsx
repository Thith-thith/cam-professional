import { Component, createEffect, createSignal } from "solid-js";
import { useCartContext } from "../context/Cart-context";

type Count = {
  count: number;
};

const Cart: Component = () => {
  const { cartItems } = useCartContext();
  //   const [count, setCount] = createSignal(0);
  //   console.log(count(), "count");
  //   createEffect(() => {
  //     return localStorage.setItem("count", count());
  //   });
  return (
    <div>
      <div class="px-44">
        <div>
          <h2>Cart</h2>
          {/* <button onClick={() => setCount(count() + 1)}>add</button> */}
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
