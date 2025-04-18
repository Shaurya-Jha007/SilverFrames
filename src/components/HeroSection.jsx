import {
  faCirclePlay,
  faMagnifyingGlass,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroImage from "../img/hero.png";
import backgroundImage from "../img/background.png";
export default function HeroSection() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="relative h-[72vh] mt-4"
      >
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black before:to-transparent before:z-1 after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:to-transparent after:via-gray-950/60 after:z-1"></div>
        <div className="absolute inset-0 before:absolute before:right-0 rtl:before:left-0 before:top-0 before:bottom-0 before:w-1/5 before:bg-gradient-to-l before:from-black before:to-transparent after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1/2 after:bg-gradient-to-r after:from-black after:to-transparent z-1"></div>
        <div className="relative flex flex-col gap-8 md:justify-center justify-start md:pt-0 pt-32 items-center h-full w-full z-20">
          <div className="flex justify-center items-center">
            <img
              src={heroImage}
              alt="Popcorn-man image"
              className="sm:h-32 h-28"
            />
            <h2 className="md:text-7xl text-5xl font-extrabold text-gray-200 animate-pulse tracking-wide">
              POPCORNMOVIES
            </h2>
          </div>
          <p className="sm:text-2xl text-xl text-gray-400">
            70,000+ Movies 35,000+ TV Shows And Live Broadcasts
          </p>
          <div className="bg-[#1E293B] lg:w-3/5 w-4/5 h-24 mt-12 md:left-28 sm:left-24 rounded-full flex gap-8 items-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-3xl ml-12 text-gray-400 cursor-pointer w-auto"
            />
            <input
              type="text"
              placeholder="Search..."
              className="text-2xl text-gray-400 w-full outline-none h-full"
            />
          </div>
          <p className="text-2xl px-12 py-6 mt-8 font-extrabold bg-green-400 rounded-full flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faCirclePlay} className="mr-4 text-4xl" />
            Go to Homepage
            <FontAwesomeIcon icon={faChevronRight} className="ml-4" />
          </p>
        </div>
      </section>
    </>
  );
}
