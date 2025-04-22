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
