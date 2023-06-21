// import {
//   createContext,
//   createEffect,
//   createSignal,
//   useContext,
// } from "solid-js";

// type Products = {
//   id: string;
//   name: string;
//   image: string;
//   rating: number;
//   category: string;
//   price: number;
//   quatity: number;
// };

// interface ContextProps {
//   items: Products[] | null;
//   setItems: (product: Products) => void;
// }

// const CartContext = createContext<ContextProps>();

// export function CartContextProvider(props: any) {
//   const [items, setItems] = createSignal<Products[] | null>(null);

//   // Save cart to localStorage when it changes
//   createEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(items()));
//   });

//   return (
//     <CartContext.Provider value={{ items: items(), setItems }}>
//       {props.children}
//     </CartContext.Provider>
//   );
// }
// export const useCartContext = () => useContext(CartContext)!;

import {
  Accessor,
  Setter,
  createContext,
  createEffect,
  createSignal,
  useContext,
} from "solid-js";
import { createStore } from "solid-js/store";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
};

const CartContext = createContext<CartContextValue>();

export function CartContextProvider(props: { children: any }) {
  const [cartItems, setCartItems] = createStore<CartItem[]>([]);
  // const [cartItems, setCartItems] = createSignal<CartItem[] | null>(null);

  // ==================Load cart items from local storage on component mount=====================
  createEffect(() => {
    const storedCartItems: any = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  });
  // ================Update local storage whenever cart items change================
  createEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  });

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id.toString() === product.id.toString()
      );
      if (existingItem) {
        existingItem.quantity++;
        return prevItems;
      }
      const newItem: CartItem = { product, quantity: 1 };
      const updatedItems = [...prevItems, newItem];
      return updatedItems;
    });
    // localStorage.setItem("cartItems", JSON.stringify(cartItem()));
  };
  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(
        (item) => item.product.id !== productId
      );
      return updatedItems;
    });
    // localStorage.setItem("cartItems", JSON.stringify(cartItem()));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
export const useCartContext = () => useContext(CartContext)!;
