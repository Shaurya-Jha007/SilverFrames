import { useQuery } from "@tanstack/react-query";
import { fetchPopularMoviesAndShows } from "../../util/fetch";
import Slider from "react-slick";
export default function Popular() {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["popularMoviesAndShows"],
    queryFn: fetchPopularMoviesAndShows,
  });
  const baseUrl = "https://image.tmdb.org/t/p/w154";

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  if (data) {
    console.log(`${baseUrl}${data[0].poster_path}`);
    return (
      <section className="h-[50vh] text-white mt-16 px-8 font-bold">
        <h2 className="text-3xl">Popular Movies</h2>
        <Slider {...settings}>
          {data.map((show, index) => {
            return (
              <div
                key={index}
                className="h-96 w-48"
                style={{
                  backgroundImage: `url(${baseUrl}${show.poster_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              ></div>
            );
          })}
        </Slider>
      </section>
    );
  }
}
