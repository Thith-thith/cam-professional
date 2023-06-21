import { Component, createEffect, createSignal } from "solid-js";
import { useCartContext } from "../context/Cart-context";
import { useGlobalContext } from "../context/Test-context";

type Name = {
  name: string;
};

const Cart: Component = () => {
  const { cartItems, count, setCount, changeCount } = useCartContext();
  //   const { count, setCount } = useGlobalContext();
  const handleCount = () => {
    setCount(count() + 1);
  };
  createEffect(() => {
    console.log(count());
    console.log(cartItems, "cartITem");
  });

  return (
    <div>
      <div class="px-44">
        {count() === 3 ? "home" : "house"}
        <div>
          <h2>Cart</h2>
          <p>number:{count()}</p>
          <button onClick={handleCount} class="btn btn-primary">
            Increment
          </button>
          <button onClick={changeCount} class="btn btn-primary">
            ChangeCount
          </button>
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
