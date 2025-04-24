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
                <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black before:to-transparent before:z-1 after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:to-transparent after:via-gray-950/60 after:z-1"></div>
                <div className="absolute inset-0 before:absolute before:right-0 rtl:before:left-0 before:top-0 before:bottom-0 before:w-1/6 before:bg-gradient-to-l before:from-black before:to-transparent after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1/6 after:bg-gradient-to-r after:from-black after:to-transparent z-1"></div>
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
