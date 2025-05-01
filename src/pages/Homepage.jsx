import LatestMoviesOrShows from "../components/LatestMoviesOrShows";
import Popular from "../components/Popular";
import Header from "../components/Slider";

export default function Homepage() {
  return (
    <main>
      <Header />
      <Popular />
      <LatestMoviesOrShows type="movie" />
      <LatestMoviesOrShows type="tv" />
    </main>
  );
}
