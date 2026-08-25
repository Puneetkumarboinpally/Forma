import { create } from "zustand";
import type { FurnitureProduct } from "../data/products";
import { persist } from "zustand/middleware";

type WishlistState = {
  wishlistCart: FurnitureProduct[];
  addToWishlist: (product: FurnitureProduct) => void;
  removeWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlistCart: [],
      addToWishlist: (product) =>
        set((state) => ({ wishlistCart: [...state.wishlistCart, product] })),
      removeWishlist: (id) =>
        set((state) => ({
          wishlistCart: state.wishlistCart.filter(
            (product) => product.id !== id,
          ),
        })),
      isInWishlist: (id) => {
        return get().wishlistCart.some((product) => product.id === id);
      },
    }),
    { name: "wishlist-storage" },
  ),
);
