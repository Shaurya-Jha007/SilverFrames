import { useQuery } from "@tanstack/react-query";
import { fetchLatestMovies } from "../../util/fetch";

export default function LatestMoviesOrShows({ type }) {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["LatestMoviesOrShows"],
    queryFn: () => fetchLatestMovies(type),
  });

  if (data) {
    console.log(data);
  }
}
