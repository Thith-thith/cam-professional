// import { createContext, createSignal } from "solid-js";

// type Product = {
//   id: string;
//   name: string;
//   image: string;
//   rating: number;
//   category: string;
//   price: number;
//   quantity: number;
// };

// type CartItem = {
//   product: Product;
//   quantity: number;
// };

// type CartContextValue = {
//   cartItems: CartItem[];
//   cart: CartItem[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: string) => void;
// };

// const TestContext = createContext<CartContextValue>();

// export function TestContextProvider(props: { children: any }) {
//   const [cartItems, setCartItems] = createSignal<CartItem[]>([]);
//   console.log(cartItems(), "test");
//   carts = [
//     cartItems,
//     {
//       addToCart: (product: Product) => {
//         setCartItems((prevItems) => {
//           const existingItem = prevItems.find(
//             (item) => item.product.id.toString() === product.id.toString()
//           );
//           if (existingItem) {
//             existingItem.quantity++;
//             return prevItems;
//           }
//           const newItem: CartItem = { product, quantity: 1 };
//           const updatedItems = [...prevItems, newItem];
//           return updatedItems;
//         });

//         localStorage.setItem("cartItems", JSON.stringify(cartItems()));
//       },
//     },
//   ];
//   return (
//     <TestContext.Provider value={carts}>{props.children}</TestContext.Provider>
//   );
// }

import {
  Accessor,
  Setter,
  createContext,
  useContext,
  createSignal,
} from "solid-js";

interface ContextProps {
  count: Accessor<number>;
  setCount: Setter<number>;
  pageName: Accessor<string>;
  setPageName: Setter<string>;
}

const GlobalContext = createContext<ContextProps>();

export function GlobalContextProvider(props: any) {
  const [count, setCount] = createSignal(0);
  const [pageName, setPageName] = createSignal("");
  // console.log(count(), "count");
  return (
    <GlobalContext.Provider value={{ count, setCount, pageName, setPageName }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext)!;
