import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-jobs", title: "My Jobs" },
    { path: "/expected-salary", title: "Expected Salary" },
    { path: "/post-job", title: "Post a Job" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        {/* logo and portal name section  */}
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx="12.0143"
              cy="12.5143"
              r="12.0143"
              fill="#3575E2"
              fillOpacity="0.4"
            />
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
          </svg>{" "}
          <span>Job Finder</span>
        </a>

        {/* nav items or navbar for medium devices*/}
        <ul className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <li key={item.path} className="text-base text-primary">
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* //login and signup section */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">
            Login
          </Link>
          <Link
            to="/sign-up"
            className="py-2 px-5 border rounded bg-secondary text-white"
          >
            Register
          </Link>
        </div>

        {/* nav items or navbar for small devices*/}
        <div className="md:hidden block">
          <button onClick={handleToggle}>
            {isMenuOpen ? (
              <FaXmark color="#3575E2" className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered color="#3575E2" className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`px-4 bg-black py-5 rounded-md ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul className="">
          {navItems.map((item) => (
            <li key={item.path} className="text-base text-white first:text-white py-1 hover:text-secondary">
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
