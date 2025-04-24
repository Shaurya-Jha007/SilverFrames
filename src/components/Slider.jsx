import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies } from "../../util/fetch";
import Slider from "react-slick";
import Arrow from "../../util/Arrow";

export default function Header() {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrendingMovies,
  });

  if (data) {
    const settings = {
      dots: false,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      autoPlaySpeed: 2000,
      prevArrow: <Arrow />,
      nextArrow: <Arrow type={true} />,
    };
    const renderData = data.results.slice(0, 10);
    console.log(renderData);
    return (
      <header className="h-[75vh] mt-4">
        <Slider {...settings}>
          {renderData.map((movie, index) => {
            return (
              <div className="h-[75vh]">
                <div
                  style={{
                    backgroundImage: `url(${baseUrl}${movie.backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                  className="h-full w-full"
                  key={index}
                ></div>
              </div>
            );
          })}
        </Slider>
      </header>
    );
  }
}
