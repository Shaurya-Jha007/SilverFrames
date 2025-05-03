import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies } from "../../util/fetch";
import { motion } from "motion/react";
import Slider from "react-slick";
import Arrow from "../../util/Arrow";
import loader from "../img/loader.svg";

export const baseUrl = "https://image.tmdb.org/t/p/original";
export default function Header() {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrendingMovies,
  });
  function truncate(str, char = 150) {
    if (str.length < char) {
      return str;
    } else {
      return str.slice(0, char) + "...";
    }
  }

  if (isError) {
    return (
      <div className="flex h-[75vh] justify-center items-center">
        <p className="text-7xl text-red-600">
          {error.message || "Failed to fetch! Please try again."}
        </p>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="h-[75vh] flex justify-center items-center">
        <img src={loader} alt="Loader" />
      </div>
    );
  }

  if (data) {
    const settings = {
      dots: false,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 2500,
      prevArrow: <Arrow />,
      nextArrow: <Arrow type={true} />,
    };
    const renderData = data.results.slice(0, 10);
    return (
      <motion.header
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 2,
        }}
        className="mt-4"
      >
        <Slider {...settings}>
          {renderData.map((movie, index) => {
            return (
              <div className="2xl:h-[70vh] xl:h-[55vh] lg:h-[50vh] sm:h-[80vh] h-[80vh]">
                <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black before:to-transparent before:z-1 after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:to-transparent after:via-gray-950/60 after:z-1"></div>
                <div className="absolute inset-0 before:absolute before:right-0 rtl:before:left-0 before:top-0 before:bottom-0 before:w-1/6 before:bg-gradient-to-l before:from-black before:to-transparent after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1/6 after:bg-gradient-to-r after:from-black after:to-transparent z-1"></div>
                <div
                  style={{
                    backgroundImage: `url(${baseUrl}${movie.backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                  className="h-full w-full"
                  key={index}
                >
                  <div className="absolute flex flex-col gap-12 2xl:top-1/4 xl:top-1/9 lg:top-1/8 sm:top-1/4 top-1/4 left-10 z-10 md:w-1/2 sm:w-2/3 w-11/12">
                    <h1 className="text-5xl font-bold sm:text-7xl text-green-300">
                      {movie.title}
                    </h1>
                    <div className="flex gap-12 items-center text-xl text-gray-200">
                      <p className="text-xl text-black bg-yellow-400 px-4 py-1.5 rounded-md font-semibold">
                        {Math.round(movie.vote_average * 10) / 10}
                      </p>
                      <p className="text-lg px-3 py-1.5 rounded-lg bg-gray-500/50">
                        HD
                      </p>
                      <p>{movie.original_language.toUpperCase()}</p>
                      <p>{movie.release_date.slice(0, 4)}</p>
                    </div>
                    <div>
                      <p className="text-2xl leading-12">
                        {truncate(movie.overview)}
                      </p>
                    </div>
                    <div className="flex">
                      <p className="bg-green-400 text-2xl font-bold px-18 py-6 rounded-full cursor-pointer hover:bg-green-600 duration-300">
                        Details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </motion.header>
    );
  }
}
