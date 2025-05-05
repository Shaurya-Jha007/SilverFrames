import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
export default function Navbar() {
  const searchRef = useRef();
  const [searchActive, setSearchActive] = useState(false);
  const list = [
    "Movies",
    "TV Shows",
    "Trending",
    "Top IMDb",
    "Live broadcasts",
    "Collections",
    "Actors ",
    "Request",
    "Discord",
  ];

  useEffect(() => {
    const handler = (event) => {
      if (!searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const commonClass =
    "cursor-pointer hover:text-gray-500 duration-300 sm:hidden hidden xl:block";
  return (
    <nav className="flex pt-4 px-10 justify-between">
      <div
        className={`flex items-center md:gap-12 sm:gap-8 text-2xl text-gray-300 ${
          searchActive ? "blur-sm opacity-70" : "blur-none"
        }`}
      >
        <FontAwesomeIcon icon={faBars} className="sm:!block xl:!hidden p-4" />
        <Link to="/">
          <img
            src={logo}
            alt="Website logo"
            className="h-12 mr-8 cursor-pointer"
          />
        </Link>
        {list.map((item) => {
          return (
            <p className={commonClass} key={item}>
              {item}
            </p>
          );
        })}
      </div>
      <div
        className={`flex items-center text-2xl gap-12 text-gray-200 ${
          searchActive ? "blur-sm opacity-70" : "blur-none"
        }`}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-gray-400 text-3xl md:!hidden"
          onClick={() => setSearchActive((prevState) => !prevState)}
          ref={searchRef}
        />
        <FontAwesomeIcon
          icon={faCircleUser}
          className="bg-green-400 px-4 py-4 rounded-full text-3xl md:!hidden"
        />
        <p className="text-gray-400 hover:text-gray-200 cursor-pointer duration-300 hidden md:block sm:hidden">
          Sign in
        </p>
        <p className="py-6 px-15 bg-green-400 rounded-full hover:bg-green-500 cursor-pointer duration-300 hidden md:block sm:hidden">
          Sign up <span>&rarr;</span>
        </p>
      </div>
      {searchActive && (
        <div
          className="absolute bg-[#1E293B] w-4/5 h-16 top-24 md:left-28 sm:left-24 left-16 rounded-2xl flex gap-8 items-center z-10"
          ref={searchRef}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-3xl ml-8 text-gray-400 cursor-pointer w-auto"
          />
          <input
            type="text"
            placeholder="Search..."
            className="text-2xl text-gray-400 w-full outline-none h-full"
          />
        </div>
      )}
    </nav>
  );
}
