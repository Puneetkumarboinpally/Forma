import { useEffect, useState } from "react";

const BedroomPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [photos, setPhotos] = useState<GetPhotos>([]);

  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  type GetPhotos = {
    id: string;
    alt: string;
    img: string;
  };

  const getPhotos = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=bedroom&page=2&Per_page=12&client_id=${accessKey}`,
      );
      if (!response.ok) {
        throw new Error("something went wrong...");
      }
      const data = await response.json();
      setPhotos(data.results);
      console.log(data.results[0].alt_description);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("something error");
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
      <section className="h-[70dvh] flex flex-col justify-center items-center text-center gap-4 lg:gap-6 p-4 lg:p-8 bg-clay/20">
        <h2 className="text-4xl lg:text-5xl font-display font-bold">
          🛏️Bedroom
        </h2>
        <p className="text-lg font-body font-medium w-full max-w-2xl">
          Turn rest into a ritual. Explore serene beds, bedside tables, and
          bedroom essentials designed to create a calm, comfortable retreat
          you'll love coming home to.
        </p>
      </section>
      <section className="h-full p-4">
        <div className="h-full grid grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="h-70 w-full">
              <img
                src={photo.urls.regular}
                alt={photo.alt_description}
                className="h-full w-full object-cover"
              />
              <p>Bed room Collection</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BedroomPage;
