import { create } from "zustand";

type SortRating = "higher" | "lower" | null;

interface FilterState {
  category: string | null;
  room: string | null;
  materials: string[];
  sortRating: SortRating;

  setCategory: (category: string | null) => void;
  setRoom: (room: string | null) => void;
  setMaterials: (materials: string[]) => void;
  setSortRating: (sort: SortRating) => void;

  clearFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  category: "all",
  room: null,
  materials: [],
  sortRating: null,

  setCategory: (category) => set({ category }),
  setRoom: (room) => set({ room }),
  setMaterials: (materials) => set({ materials }),
  setSortRating: (sortRating) => set({ sortRating }),

  clearFilters: () =>
    set({
      category: "all",
      room: null,
      materials: [],
      sortRating: null,
    }),
}));
