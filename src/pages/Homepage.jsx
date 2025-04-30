import LatestMoviesOrShows from "../components/LatestMoviesOrShows";
import Popular from "../components/Popular";
import Header from "../components/Slider";
import Streaming from "../components/Streaming";

export default function Homepage() {
  return (
    <main>
      <Header />
      <Popular />
      {/* <Streaming /> */}
      <LatestMoviesOrShows type="movie" />
    </main>
  );
}
