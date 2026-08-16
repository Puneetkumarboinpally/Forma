import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="flex gap-4 tablet:gap-2 max-tablet:hidden ">
      <NavLink to={"/"} className={`nav-link`}>
        SHOP
      </NavLink>
      <NavLink to={"/collection"} className="nav-link">
        COLLECTIONS
      </NavLink>
      <NavLink to={"/living-room"} className="nav-link">
        LIVING ROOM
      </NavLink>
      <NavLink to={"/bedroom"} className="nav-link">
        BEDROOM
      </NavLink>
      <NavLink to={"/dining"} className="nav-link">
        DINING
      </NavLink>
      <NavLink to={"/lighting"} className="nav-link">
        LIGHTING
      </NavLink>
    </div>
  );
};

export default NavMenu;
