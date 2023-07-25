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
  rating: number;
  brand: string;
  price: number;
  category: string;
  quantity: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  minusCart: (product: Product) => void;
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

  const updateLocalStorage = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product?.id === product?.id
      );
      if (existingItem) {
        return prevItems.map((res) =>
          res.product?.id === product?.id
            ? { ...res, quantity: res.quantity + 1 }
            : res
        );
      }
      const newItem: CartItem = { product, quantity: 1 };
      const updatedItems = [...prevItems, newItem];
      return updatedItems;
    });
    updateLocalStorage();
  };

  const minusCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product?.id === product?.id
      );
      if (existingItem) {
        return prevItems.map((res) =>
          res.product.id === product.id
            ? { ...res, quantity: res.quantity - 1 }
            : res
        );
      }
      const updatedItems = prevItems.filter(
        (item: any) => item.product.id !== product.id
      );
      return updatedItems;
      // const newItem: CartItem = { product, quantity: 1 };
      // const updatedItems = [...prevItems, newItem];
      // return updatedItems;
    });
    updateLocalStorage();
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
        cartItems,
        addToCart,
        removeFromCart,
        minusCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
export const useCartContext = () => useContext(CartContext)!;

// import {
//   Accessor,
//   Setter,
//   createContext,
//   createEffect,
//   createSignal,
//   useContext,
// } from "solid-js";
// import { createStore } from "solid-js/store";

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
//   count: Accessor<number>;
//   setCount: Setter<number>;
//   changeCount: () => void;
//   cartItems: CartItem[];
//   cart: CartItem[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: string) => void;
// };

// const CartContext = createContext<CartContextValue>();

// export function CartContextProvider(props: { children: any }) {
//   const [cartItems, setCartItems] = createSignal<CartItem[]>([]);
//   const [count, setCount] = createSignal(1);
//   // const [cartItems, setCartItems] = createSignal<CartItem[] | null>(null);

//   console.log(count(), "count");
//   // Save cart to localStorage when it changes
//   createEffect(() => {
//     const storedCartItems: any = localStorage.getItem("cartItems");
//     if (storedCartItems) {
//       setCartItems(JSON.parse(storedCartItems));
//     }
//   });
//   const updateLocalStorage = () => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems()));
//   };

//   createEffect(() => {
//     const storeCount: any = localStorage.setItem("count", count());
//     if (storeCount) {
//       localStorage.setItem("count", storeCount);
//     }
//   });
//   createEffect(() => {
//     console.log(cartItems(), "cart");
//     updateLocalStorage();
//   });
//   const changeCount = () => {
//     setCount(3);
//   };

//   const addToCart = (product: Product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find(
//         (item) => item.product.id.toString() === product.id.toString()
//       );
//       if (existingItem) {
//         existingItem.quantity++;
//         return prevItems;
//       }
//       const newItem: CartItem = { product, quantity: 1 };
//       const updatedItems = [...prevItems, newItem];
//       return updatedItems;
//     });
//     updateLocalStorage();
//     // localStorage.setItem("cartItems", JSON.stringify(cartItems()));
//   };
//   const removeFromCart = (productId: string) => {
//     setCartItems((prevItems) => {
//       const updatedItems = prevItems.filter(
//         (item) => item.product.id !== productId
//       );
//       return updatedItems;
//     });
//     updateLocalStorage();
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems: cartItems(),
//         addToCart,
//         removeFromCart,
//         cart: cartItems(),
//         count,
//         setCount,
//         changeCount,
//       }}
//     >
//       {props.children}
//     </CartContext.Provider>
//   );
// }
// export const useCartContext = () => useContext(CartContext)!;
