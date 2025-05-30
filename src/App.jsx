import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import MoviesPage from "./pages/MoviesPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ShowsPage from "./pages/ShowsPage";
import WatchList from "./pages/WatchList";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/movie/:movieId" element={<MoviesPage />} />
          <Route path="/show/:showId" element={<ShowsPage />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </QueryClientProvider>
      <Footer />
    </>
  );
}

export default App;
