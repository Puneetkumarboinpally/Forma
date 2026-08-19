import { useEffect, useState } from "react";

const LivingRoomPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [photos, setPhotos] = useState<Photo>([]);

  type Photo = {
    id: string;
    urls: {
      regular: string;
    };
    alt_description: string | null;
  };

  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  const getPhotos = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=living%20room&page=1&per_page=12&client_id=${accessKey}`,
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      setPhotos(data.results);
      console.log(data.results);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="h-full">
      <section className="h-[70dvh] flex flex-col justify-center items-center text-center gap-4 lg:gap-6 p-4 lg:p-8 bg-clay/40">
        <h2 className="text-4xl lg:text-5xl font-display font-bold">
          🛋️Living Room
        </h2>
        <p className="text-lg font-body font-medium w-full max-w-2xl">
          Create a space made for slowing down. Discover thoughtfully designed
          sofas, lounge chairs, and tables that bring comfort, character, and
          timeless style to the heart of your home.
        </p>
      </section>
      <section className="h-full grid grid-cols-3 gap-4 p-16">
        {photos.map((photo) => (
          <img
            className="h-90 w-90 object-cover"
            key={photo.id}
            src={photo.urls.regular}
            alt={photo.alt_description ?? "Unsplash photo"}
          />
        ))}
      </section>
    </div>
  );
};

export default LivingRoomPage;
