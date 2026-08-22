import { create } from "zustand";
import type { Photo, UnsplashResponse } from "../types/unsplash";

type PhotoStore = {
  loading: boolean;
  error: string;
  photos: Photo[];
  getPhotos: (query: string, page?: number) => Promise<void>;
};

export const usePhotoStore = create<PhotoStore>((set) => ({
  loading: false,
  error: "",
  photos: [],
  getPhotos: async (query, page = 1) => {
    try {
      set({
        loading: true,
        error: "",
      });
      const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=20&client_id=${accessKey}`,
      );
      if (!response.ok) {
        throw new Error("Something went wrong...");
      }
      const data: UnsplashResponse = await response.json();

      set({
        photos: data.results,
      });
      console.log(data)
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      } else {
        set({ error: "Error time" });
      }
    } finally {
      set({
        loading: false,
      });
    }
  },
}));
