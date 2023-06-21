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
  count: Accessor<number>;
  setCount: Setter<number>;
  changeCount: () => void;
  cartItems: CartItem[];
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
};

const CartContext = createContext<CartContextValue>();

export function CartContextProvider(props: { children: any }) {
  const [cartItems, setCartItems] = createSignal<CartItem[]>([]);
  const [count, setCount] = createSignal(1);
  // const [cartItems, setCartItems] = createSignal<CartItem[] | null>(null);

  console.log(count(), "count");
  // Save cart to localStorage when it changes
  createEffect(() => {
    const storedCartItems: any = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  });
  const updateLocalStorage = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems()));
  };

  createEffect(() => {
    const storeCount: any = localStorage.setItem("count", count());
    if (storeCount) {
      localStorage.setItem("count", storeCount);
    }
  });
  createEffect(() => {
    console.log(cartItems(), "cart");
    updateLocalStorage();
  });
  const changeCount = () => {
    setCount(3);
  };

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
    updateLocalStorage();
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems(),
        addToCart,
        removeFromCart,
        cart: cartItems(),
        count,
        setCount,
        changeCount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
export const useCartContext = () => useContext(CartContext)!;
