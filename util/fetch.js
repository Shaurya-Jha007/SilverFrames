const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchTrendingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
  );
  if (!response.ok) {
    const error = new Error(
      "Failed to fetch movies data! Please try again later."
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function fetchPopularMoviesAndShows() {
  const moviesResponse = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
  );

  if (!moviesResponse.ok) {
    const error = new Error(
      "Error, fetching popular movies! Please try again later."
    );
    error.code = moviesResponse.status;
    error.info = await moviesResponse.json();
    throw error;
  }

  const moviesData = await moviesResponse.json();

  let data;

  if (moviesData) {
    const showsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );

    if (!showsResponse.ok) {
      const error = new Error("Failed to fetch shows! Please try again later.");
      error.code = showsResponse.status;
      error.info = await showsResponse.json();
      throw error;
    }

    const showsData = await showsResponse.json();

    data = [...showsData.results, ...moviesData.results];
  }

  if (data) {
    return data;
  }
}
