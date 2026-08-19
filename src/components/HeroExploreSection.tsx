import React from "react";
import { useNavigate } from "react-router-dom";

const HeroExploreSection = () => {
  const navigate = useNavigate();
  return (
    <section className="h-full flex flex-col justify-around gap-8 p-12">
      <div className="lg:flex justify-between item-center">
        <h2 className="text-4xl font-bold font-display">
          Explore the Collection
        </h2>
        <p
          onClick={() => navigate("/collection")}
          className="text-lg w-fit font-medium font-body border-b cursor-pointer transition-all duration-300 hover:text-accent hover:text-black"
        >
          View all categories <span className="font-bold text-3xl">&rarr;</span>
        </p>
      </div>
      <div className="grid grid lg:grid-cols-4 gap-6">
        <div
          onClick={() => navigate("/living-room")}
          className="explore-section"
        >
          <img
            className="explore-img"
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D"
            alt="living room"
          />

          <div className="flex justify-between">
            <span className="name">Living Room</span>
            <span className="arrow">&rarr;</span>
          </div>
        </div>
        <div onClick={() => navigate("/bedroom")} className="explore-section">
          <img
            className="explore-img"
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
            alt="bedroom"
          />
          <div className="flex justify-between">
            <span className="name">Bedroom</span>
            <span className="arrow">&rarr;</span>
          </div>
        </div>
        <div onClick={() => navigate("/dining")} className="explore-section">
          <img
            className="explore-img"
            src="https://images.unsplash.com/photo-1657524398377-567034729507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGluaW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Dining"
          />
          <div className="flex justify-between">
            <span className="name">Dining</span>
            <span className="arrow">&rarr;</span>
          </div>
        </div>
        <div onClick={() => navigate("/lighting")} className="explore-section">
          <img
            className="explore-img"
            src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxpZ2h0aW5nfGVufDB8fDB8fHww"
            alt="lightning"
          />
          <div className="flex justify-between">
            <span className="name">Lighting</span>
            <span className="arrow">&rarr;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroExploreSection;
