import { useQuery } from "@tanstack/react-query";
import { fetchLatestMovies } from "../../util/fetch";
import { baseUrl } from "./Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import loader from "../img/loader.svg";
import { Link } from "react-router-dom";

export default function LatestMoviesOrShows({ type }) {
  const { data, error, isError, isPending } = useQuery({
    queryKey: [type],
    queryFn: () => fetchLatestMovies(type),
  });

  function truncate(str) {
    if (str.length > 14) {
      return str.slice(0, 14) + "...";
    }
    return str;
  }

  if (data) {
    const latest = data.results.slice(0, 16);
    console.log(latest);
    return (
      <section className="px-8 2xl:h-[80vh] h-auto mt-16">
        <div>
          <h2 className="text-3xl font-bold">
            Latest {type == "movie" ? "Movie" : "Show"}s
          </h2>
          <div className="flex flex-wrap mt-8 gap-10">
            {latest.map((item, index) => {
              return (
                <Link
                  to={item.title ? `/movie/${item.id}` : ""}
                  className="relative group duration-300 w-64"
                  key={index}
                >
                  <img
                    src={`${baseUrl}${item.poster_path}`}
                    className="w-full rounded-xl group-hover:opacity-50 group-hover:blur-xs"
                    alt={
                      type == "movie"
                        ? `${item.title} logo`
                        : `${item.name} logo`
                    }
                  />
                  <p className="absolute top-3 left-3 px-3 py-1 rounded-md font-bold bg-green-400">
                    HD
                  </p>

                  <FontAwesomeIcon
                    icon={faCirclePlay}
                    className="text-8xl absolute top-1/2 left-1/2 hover:animate-ping -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                  />

                  <div className="absolute bottom-3 left-3 cursor-pointer opacity-0 group-hover:opacity-100">
                    <p className="text-lg text-gray-400">
                      {type == "movie"
                        ? item.release_date.slice(0, 4)
                        : item.first_air_date.slice(0, 4)}
                    </p>
                    <p className="text-2xl font-semibold">
                      {truncate(type == "movie" ? item.title : item.name)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="h-[50vh] flex justify-center items-center">
        <p className="text-7xl text-red-500">
          {error.message || "Failed to fetch latest movies! Try reloading"}
        </p>
      </section>
    );
  }

  if (isPending) {
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <img src={loader} alt="Loading spinner." />
      </div>
    );
  }
}
