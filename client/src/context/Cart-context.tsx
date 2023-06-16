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
  createContext,
  createEffect,
  createSignal,
  useContext,
} from "solid-js";

// type Products = {
//   id: string;
//   name: string;
//   image: string;
//   rating: number;
//   category: string;
//   price: number;
//   quatity: number;
// };

// type CartItem = {
//   product: Products;
//   quantity: number;
// };

// type Cart = {
//   items: CartItem[];
// };

// const CartContext = createContext<Cart | undefined>();

// export function CartContextProvider(props: any) {
//   const [cart, setCart] = createSignal<Cart[]>([]);
//   const [cart, setCart] = createSignal<Cart>({ items: [] });
type Product = {
  id: string;
  name: string;
  image: string;
  rating: number;
  category: string;
  price: number;
  quatity: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  cartItems: CartItem[];
  setCartItems: (cart: CartItem) => void;
  //   addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextValue>();

export function CartContextProvider(props: any) {
  const [cartItems, setCartItems] = createSignal<CartItem[]>([]);

  //   createEffect(() => {
  //     const storedCartItems = localStorage.getItem("cartItems");
  //     if (storedCartItems) {
  //       setCartItems(JSON.parse(storedCartItems));
  //     }
  //   });

  // Save cart to localStorage when it changes
  createEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems()));
  });

  return (
    <CartContext.Provider value={{ cartItems: cartItems(), setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
}
export const useCartContext = () => useContext(CartContext)!;
