import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchIndividualShow } from "../../util/fetch";
import { baseUrl } from "../components/Slider";
import loader from "../img/loader.svg";

export default function ShowsPage() {
  const { showId } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: [showId],
    queryFn: () => fetchIndividualShow(showId),
  });

  if (data) {
    const releaseDate = new Date(data.first_air_date);
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
            alt={`${data.name} movie poster image`}
            className="w-full rounded-xl"
          />
          <p className="text-gray-300 mt-4 text-center py-5 text-2xl rounded-lg font-semibold bg-gray-800 hover:bg-gray-500/80 hover:text-white cursor-pointer w-full ">
            Add to Watchlist
          </p>
        </div>
        <div className="h-11/12 lg:w-4/5 w-3/5 flex flex-col gap-12">
          {/* <p className="text-3xl font-semibold text-gray-300">{data.name}</p> */}
          <p className="text-4xl font-bold text-white">{data.name}</p>
          <div className="flex gap-12 text-xl items-center">
            <p className="text-lg bg-gray-800 px-3 py-1 font-semibold">HD</p>
            <p>{data.number_of_episodes} eps.</p>
            <p>{data.first_air_date.slice(0, 4)}</p>
          </div>
          <p className="text-gray-400 text-2xl lg:block hidden">
            {data.overview}
          </p>
          <div className="flex flex-col gap-8 text-gray-400">
            <p className="text-2xl">
              Genre :{" "}
              {data.genres.map((genre, index) => {
                return (
                  <span key={index} className="text-white font-semibold">
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
            <p className="text-2xl">
              Status :{" "}
              <span className="text-white font-semibold">{data.status}</span>
            </p>
            <p className="text-2xl">
              <span className="font-bold text-white">
                {data.number_of_seasons}{" "}
              </span>
              Season
              {data.number_of_seasons > 1 ? "s" : ""}
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
