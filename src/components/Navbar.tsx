import { Moon, Search, ShoppingBag, Sun } from "lucide-react";
import { useThemeStore } from "../store/themeStore";
import { useEffect } from "react";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
const Navbar = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggle = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="flex justify-between items-center h-16 max-w-container p-4 bg-background border-b border-b-border">
      {/* LOGO CONTAINER */}

      <div className="flex items-center">
        <Link to={"/"} className="text-xl font-bold">
          FORMA
        </Link>
        {/* NAV MENU CONTAINER */}
      </div>
      <div>
        <NavMenu />
      </div>

      {/* NAVBAR CTA CONTAINER */}

      <div className="flex gap-4 tablet:gap-2">
        <div>
          <Search />
        </div>
        <div>
          <ShoppingBag />
        </div>
        <button onClick={toggle}>
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
        {/* ---- */}
        <div>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
