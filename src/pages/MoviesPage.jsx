import { useParams } from "react-router-dom";
import { fetchIndividualMovie } from "../../util/fetch";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../components/Slider";
export default function MoviesPage() {
  const { movieId } = useParams();

  const { data, error, isError, isPending } = useQuery({
    queryKey: [movieId],
    queryFn: () => fetchIndividualMovie(movieId),
  });

  if (data) {
    const releaseDate = new Date(data.release_date);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    console.log(movieId, data);
    return (
      <main className="h-[70vh] flex items-center gap-16 mb-16 mt-8 w-[95vw] my-0 mx-auto">
        <div className="w-1/5">
          <img
            src={`${baseUrl}${data.poster_path}`}
            alt={`${data.title} movie poster image`}
            className="w-full rounded-xl"
          />
          <p className="text-gray-300 mt-4 text-center py-5 text-2xl rounded-lg font-semibold bg-gray-800 hover:bg-gray-500/80 hover:text-white cursor-pointer w-full ">
            Add to Watchlist
          </p>
        </div>
        <div className="h-11/12 w-4/5 mt-6 flex flex-col gap-12">
          <p className="text-3xl font-semibold text-gray-300">
            {data.original_title}
          </p>
          <p className="text-4xl font-bold text-white">{data.title}</p>
          <div className="flex gap-12 text-xl items-center">
            <p className="text-lg bg-gray-800 px-3 py-1 font-semibold">HD</p>
            <p>{data.runtime} min</p>
            <p>{data.release_date.slice(0, 4)}</p>
          </div>
          <p className="text-gray-400 text-2xl">{data.overview}</p>
          <div className="flex flex-col gap-8 text-gray-400">
            <p className="text-2xl">
              Genre :{" "}
              {data.genres.map((genre, index) => {
                return (
                  <span key={index} className="text-white">
                    {genre.name}
                    {`${index == data.genres.length - 1 ? " " : ","}`}{" "}
                  </span>
                );
              })}
            </p>
            <p className="text-2xl">
              Released :{" "}
              {`${
                releaseDate.getDate() < 10
                  ? `0${releaseDate.getDate()}`
                  : releaseDate.getDate()
              } ${
                months[releaseDate.getMonth()]
              }, ${releaseDate.getFullYear()}`}
            </p>
            <p className="text-2xl">
              Rating : {Math.round(data.vote_average * 10) / 10}
            </p>
          </div>
        </div>
      </main>
    );
  }
}
