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
    }),
    { name: "Cart-storage" },
  ),
);
