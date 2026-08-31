import { create } from "zustand";

type SortRating = "higher" | "lower" | null;

interface FilterState {
  category: string | null;
  room: string | null;
  materials: string[];
  priceRange: [number, number];
  sortRating: SortRating;

  setCategory: (category: string | null) => void;
  setRoom: (room: string | null) => void;
  setMaterials: (materials: string[]) => void;
  setPriceRange: (range: [number, number]) => void;
  setSortRating: (sort: SortRating) => void;

  clearFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  category: null,
  room: null,
  materials: [],
  priceRange: [0, 1000],
  sortRating: null,

  setCategory: (category) => set({ category }),
  setRoom: (room) => set({ room }),
  setMaterials: (materials) => set({ materials }),
  setPriceRange: (range) => set({ priceRange: range }),
  setSortRating: (sortRating) => set({ sortRating }),

  clearFilters: () =>
    set({
      category: null,
      room: null,
      materials: [],
      priceRange: [0, 1000],
      sortRating: null,
    }),
}));
