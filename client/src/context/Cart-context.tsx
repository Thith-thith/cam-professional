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
  onMount,
  useContext,
} from "solid-js";

type Product = {
  id: string;
  name: string;
  image: string;
  rating: number;
  category: string;
  price: number;
  quantity: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  cartItems: CartItem[];
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
};

const CartContext = createContext<CartContextValue>();

export function CartContextProvider(props: { children: any }) {
  const [cartItems, setCartItems] = createSignal<CartItem[]>([]);
  // const [cartItems, setCartItems] = createSignal<CartItem[] | null>(null);

  // Save cart to localStorage when it changes
  createEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  });
  const updateLocalStorage = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems()));
  };
  createEffect(() => {
    updateLocalStorage();
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
    updateLocalStorage();
    // localStorage.setItem("cartItems", JSON.stringify(cartItems()));
  };
  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(
        (item) => item.product.id !== productId
      );
      return updatedItems;
    });
    //  updateLocalStorage();
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems(),
        addToCart,
        removeFromCart,
        cart: cartItems(),
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
export const useCartContext = () => useContext(CartContext)!;
