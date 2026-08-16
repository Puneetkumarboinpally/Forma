import { Moon, Search, ShoppingBag, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useThemeStore } from "../store/themeStore";
import { useEffect } from "react";
const Navbar = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggle = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="flex justify-between items-center h-16 max-w-container p-4 bg-background border-b border-b-border">
      <div className="flex gap-4 items-center">
        <img
          className="h-8 w-8 object-center"
          src="/src/assets/logo.png"
          alt="Brand Logo"
        />
        <h2 className="text-2xl font-bold">FORMA</h2>
      </div>
      <div className="flex gap-4">
        <NavLink to={"/"} className="nav-link">SHOP</NavLink>
        <NavLink to={"/collection"} className="nav-link">COLLECTIONS</NavLink>
        <NavLink to={"/living-room"} className="nav-link">LIVING ROOM</NavLink>
        <NavLink to={"/bedroom"} className="nav-link">BEDROOM</NavLink>
        <NavLink to={"/dinning"} className="nav-link">DINNING</NavLink>
        <NavLink to={"/lighting"} className="nav-link">LIGHTING</NavLink>
      </div>
      <div className="flex gap-4">
        <div>
          <Search />
        </div>
        <div>
          <ShoppingBag />
        </div>
        <button onClick={toggle}>
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
