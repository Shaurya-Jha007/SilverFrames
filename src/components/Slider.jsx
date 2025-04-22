import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies } from "../../util/fetch";
import Slider from "react-slick";

export default function header() {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrendingMovies,
  });

  if (data) {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const renderData = data.results.slice(0, 10);
    console.log(renderData.length);
    return (
      <header className="h-[75vh] mt-4">
        <Slider {...settings}>
          {renderData.map((movie, index) => {
            return (
              <div
                style={{
                  backgroundImage: `url(${baseUrl}${movie.backdrop_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
                className="h-full w-full"
                key={index}
              ></div>
            );
          })}
        </Slider>
      </header>
    );
  }
}
