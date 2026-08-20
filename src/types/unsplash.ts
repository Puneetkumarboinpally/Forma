export type Photo = {
  id: string;
  alt_description: string | null;
  urls: {
    regular: string;
  };
};
export type UnsplashResponse = {
  results: Photo[];
};
