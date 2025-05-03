import { useParams } from "react-router-dom";
import { fetchIndividualMovie } from "../../util/fetch";
import { useQuery } from "@tanstack/react-query";
export default function MoviesPage() {
  const { movieId } = useParams();

  const { data, error, isError, isPending } = useQuery({
    queryKey: [movieId],
    queryFn: () => fetchIndividualMovie(movieId),
  });

  if (data) {
    console.log(movieId, data);
  }
}
