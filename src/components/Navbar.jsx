import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-20 h-12 bg-white rounded-lg 
        font-bold items-center justify-center flex shadow-md"
      >
        <p className="blue-gradient_text">MyWAY</p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
/*
Notes:
Tags in html are called as Symentic Tag

{({data})=>{}} - Here, data is called as destructured
*/
