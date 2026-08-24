import { useState } from "react";

const FilterSection = () => {
  return (
    <aside className="flex flex-col gap-4 lg:w-1/5">
      {/* --- CATEGORY SECTION --- */}
      <div className="filter-container">
        <h2>CATEGORY</h2>
        <div className="grouped-input">
          <input
            className="filter-input"
            type="radio"
            name="category"
            id="all"
            value="all"
          />
          <label className="filter-label" htmlFor="all">
            All Furniture
          </label>
        </div>
        <div className="grouped-input">
          <input
            className="filter-input"
            type="radio"
            name="category"
            id="seating"
            value="seating"
          />
          <label className="filter-label" htmlFor="seating">
            Sofa & Chairs
          </label>
        </div>
        <div className="grouped-input">
          <input
            className="filter-input"
            type="radio"
            name="category"
            id="tables"
            value="tables"
          />
          <label className="filter-label" htmlFor="tables">
            Tables
          </label>
        </div>
        <div className="grouped-input">
          <input
            className="filter-input"
            type="radio"
            name="category"
            id="bed"
            value="bed"
          />
          <label className="filter-label" htmlFor="bed">
            Beds
          </label>
        </div>
        <div className="grouped-input">
          <input
            className="filter-input"
            type="radio"
            name="category"
            id="lamp"
            value="lamp"
          />
          <label className="filter-label" htmlFor="lamp">
            Lamps
          </label>
        </div>
      </div>
      {/* --- ROOM SECTION --- */}
      <div className="filter-container">
        <h2>ROOM</h2>
        <div className="grouped-input">
          <input
            className="filter-input"
            type="radio"
            name="living-room"
            id="living-room"
          />
          <label className="filter-label" htmlFor="living-room">
            Living Room
          </label>
        </div>
        <div className="grouped-input">
          <input
            className="filter-input"
            type="radio"
            name="dinning-room"
            id="dinning-room"
          />
          <label className="filter-label" htmlFor="dining-room">
            Dining Room
          </label>
        </div>
        <div className="grouped-input">
          <input
            className="filter-input"
            type="radio"
            name="bedroom"
            id="bedroom"
          />
          <label className="filter-label" htmlFor="bedroom">
            Bedroom
          </label>
        </div>
        <div className="grouped-input">
          <input
            className="filter-input"
            type="radio"
            name="lighting"
            id="lighting"
          />
          <label className="filter-label" htmlFor="lighting">
            Lighting
          </label>
        </div>
      </div>

      {/* --- RATING SECTION --- */}
      <div className="filter-container">
        <h2>RATINGS</h2>
      </div>

      {/* --- MATERIAL SECTION --- */}
      <div className="filter-container">
        <h2>MATERIAL</h2>
        <div className="flex flex-wrap gap-2 w-48">
          <button className="filter-btn">Wood</button>
          <button className="filter-btn">Metal</button>
          <button className="filter-btn">Glass</button>
          <button className="filter-btn">Leather</button>
          <button className="filter-btn">Fabric</button>
        </div>
      </div>

      {/* --- PRICE RANGE SECTION */}
      <div className="filter-container">
        <h2>PRICE RANGE</h2>
      </div>
    </aside>
  );
};

export default FilterSection;
