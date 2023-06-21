import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/appointment",
      title: "Appointment",
    },
    {
      path: "/login",
      title: "Login",
    },
  ];

  return (
    <header className="w-full bg-gray-800 text-gray-100 body-font mb-4 shadow-sm">
      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* Site logo and Name */}
        <Link
          to="/"
          className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <img
            src="/src/assets/logo.png"
            alt=""
            className="w-[40px] h-[40px]"
          />
          <span className="ml-3 text-xl text-main font-semibold antialiased font-source">
            Doc <span className="text-white">House</span>
          </span>
        </Link>
        {/* Navbar */}
        <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-main mr-8 hover:text-gray-300"
                  : "mr-8 hover:text-gray-300"
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
        {/* Avatar */}

        {/* Burger icon standard */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none  "
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white transition delay-150 duration-300 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* :MOBILE MENU */}
      {isOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-900 text-base uppercase text-center font-semibold transition delay-150 duration-100">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-main mr-8 hover:text-gray-300"
                  : "mr-8 hover:text-gray-300"
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
