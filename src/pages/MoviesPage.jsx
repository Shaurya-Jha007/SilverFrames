import { useParams } from "react-router-dom";
import { fetchIndividualMovie } from "../../util/fetch";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../components/Slider";
import { useDispatch, useSelector } from "react-redux";
import { watchListActions } from "../../store/watchListStore";
import loader from "../img/loader.svg";
export default function MoviesPage() {
  const watchList = useSelector((state) => state);
  const dispatch = useDispatch();
  const { movieId } = useParams();
  console.log(watchList);

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
    // console.log(movieId, data);
    return (
      <main className="xl:h-[70vh] lg:h-[50vh] flex items-center gap-16 mb-16 mt-8 w-[95vw] my-0 mx-auto">
        <div className="lg:w-1/5 w-2/5 h-11/12">
          <img
            src={`${baseUrl}${data.poster_path}`}
            alt={`${data.title} movie poster image`}
            className="w-full rounded-xl"
          />
          <p
            onClick={() => dispatch(watchListActions.addToWatchlist(data))}
            className="text-gray-300 mt-4 text-center py-5 text-2xl rounded-lg font-semibold bg-gray-800 hover:bg-gray-500/80 hover:text-white cursor-pointer w-full "
          >
            Add to Watchlist
          </p>
          {watchList.some((item) => item.id === data.id) && (
            <p className="text-2xl text-green-400 text-center mt-6">
              Added to Watchlist
            </p>
          )}
        </div>
        <div className="h-11/12 lg:w-4/5 w-3/5 flex flex-col gap-12">
          <p className="text-3xl font-semibold text-gray-300">
            {data.original_title}
          </p>
          <p className="text-4xl font-bold text-white">{data.title}</p>
          <div className="flex gap-12 text-xl items-center">
            <p className="text-lg bg-gray-800 px-3 py-1 font-semibold">HD</p>
            <p>{data.runtime} min</p>
            <p>{data.release_date.slice(0, 4)}</p>
          </div>
          <p className="text-gray-400 text-2xl lg:block hidden">
            {data.overview}
          </p>
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

  if (isError) {
    console.log(error);
    return (
      <section className="h-[70vh] flex justify-center items-center">
        <p className="text-4xl text-red-600">
          {error.message || "Failed to fetch movie data! Please try again."}
        </p>
      </section>
    );
  }

  if (isPending) {
    console.log(isPending);
    return (
      <section className="h-[70vh] flex justify-center items-center">
        <img src={loader} alt="Loading Spinner" />
      </section>
    );
  }
}
