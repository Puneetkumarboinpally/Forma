import { useNavigate } from "react-router-dom";

const HighlightSection = () => {
  const navigate = useNavigate();
  return (
    <section className="h-full bg-clay/10 flex justify-center items-center p-4">
      <div className="flex flex-col gap-8 text-center p-4">
        <p className="font-body text-lg font-medium">COLLECTION HIGHLIGHT</p>
        <h2 className="font-display text-5xl font-bold">
          The Natural Collection — Oak, linen, stone and soft forms.
        </h2>
        <button
          onClick={() => navigate("/collections")}
          className="py-3 px-8 rounded-md font-bold border mx-auto cursor-pointer transition-all duration-300 hover:bg-accent hover:text-primary"
        >
          EXPLORE COLLECTION
        </button>
      </div>
    </section>
  );
};

export default HighlightSection;
