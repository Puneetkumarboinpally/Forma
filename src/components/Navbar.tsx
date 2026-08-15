import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div>
        <img src="" alt="Brand Logo" />
        <h2>FORMA</h2>
      </div>
      <div>
        <NavLink to={"/"}>SHOP</NavLink>
        <NavLink to={"/collection"}>COLLECTIONS</NavLink>
        <NavLink to={"/living-room"}>LIVING ROOM</NavLink>
        <NavLink to={"/bedroom"}>BEDROOM</NavLink>
        <NavLink to={"/dinning"}>DINNING</NavLink>
        <NavLink to={"/lighting"}>LIGHTING</NavLink>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Navbar;
