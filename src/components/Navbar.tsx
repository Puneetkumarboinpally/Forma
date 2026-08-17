import { Menu, Moon, Search, ShoppingBag, Sun, X } from "lucide-react";
import { useThemeStore } from "../store/themeStore";
import { useEffect, useState } from "react";
import { links } from "../data/NavLinks";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const theme = useThemeStore((state) => state.theme);
  const toggle = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="flex justify-between items-center h-16 max-w-container p-4 bg-surface border-b border-b-border">
      {/* --- NAVBAR LOGO SECTION ---*/}
      <div className="flex items-center">
        <Link
          to={"/"}
          className="text-3xl font-extrabold text-accent font-display"
        >
          FORMA
        </Link>
      </div>

      {/* --- NAV MENU SECTION ---*/}
      <nav className="flex gap-4 max-laptop:gap-2">
        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              `nav-link-styles max-laptop:hidden ${isActive ? "text-accent" : "text-secondary"}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* --- NAVIGATION CTA SECTION ---*/}

      <div className="flex items-center gap-4">
        {/* --- SEARCH SECTION ---*/}
        <div>
          <button aria-label="search button">
            <Search />
          </button>
        </div>

        {/* --- CART SECTION ---*/}
        <div>
          <button aria-label="cart button">
            <ShoppingBag />
          </button>
        </div>

        {/* --- DARK THEME TOGGLE BUTTON ---*/}
        <button
          onClick={toggle}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "switch to dark mode"
          }
          className="cursor-pointer border rounded-full p-1"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* --- MOBILE MENU NAVIGATION ---*/}
        <div className="relative laptop:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "close menu" : "open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
          <nav
            className={`fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-full bg-foreground flex flex-col gap-4 p-6 transition-transform duration-500 ease-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {links.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `nav-link-styles ${isActive ? "text-accent" : "text-secondary"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
