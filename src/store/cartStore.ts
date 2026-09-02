import { create } from "zustand";
import type { FurnitureProduct } from "../data/products";
import { persist } from "zustand/middleware";

type CartItem = {
  product: FurnitureProduct;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  addToCart: (product: FurnitureProduct) => void;
  removeFromCart: (id: string) => void;
  resetCart: () => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.product.id === product.id,
          );

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }
          return {
            cart: [...state.cart, { product, quantity: 1 }],
          };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.product.id !== id),
        })),
      resetCart: () => set({ cart: [] }),
      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.product.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        })),
      decreaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.product.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),
    }),
    { name: "Cart-storage" },
  ),
);
