import { useQuery } from "@tanstack/react-query";
import { fetchLatestMovies } from "../../util/fetch";
import { baseUrl } from "./Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function LatestMoviesOrShows({ type }) {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["LatestMoviesOrShows"],
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
      <section className="px-8 h-[80vh] mt-10">
        <div className="">
          <h2 className="text-3xl font-bold">Latest {type}s</h2>
          <div className="flex flex-wrap mt-8 gap-10">
            {latest.map((item, index) => {
              return (
                <div
                  className="relative cursor-pointer group duration-300 w-64"
                  key={index}
                >
                  <img
                    src={`${baseUrl}${item.poster_path}`}
                    className="w-full rounded-xl group-hover:opacity-50 group-hover:blur-xs"
                    alt="Movie Logo"
                  />
                  <p className="absolute top-3 left-3 px-3 py-1 rounded-md font-bold bg-green-400">
                    HD
                  </p>

                  <FontAwesomeIcon
                    icon={faCirclePlay}
                    className="text-7xl absolute top-1/2 left-1/2 hover:animate-ping -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                  />

                  <div className="absolute bottom-3 left-3 cursor-pointer opacity-0 group-hover:opacity-100">
                    <p className="text-lg text-gray-400">
                      {item.release_date.slice(0, 4)}
                    </p>
                    <p className="text-2xl font-semibold">
                      {truncate(item.title)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
