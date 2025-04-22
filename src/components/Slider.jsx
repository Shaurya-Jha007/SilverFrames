import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies } from "../../util/fetch";

export default function Slider() {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrendingMovies,
  });

  if (data) {
    console.log(data.results);
  }
  return <h1></h1>;
}
