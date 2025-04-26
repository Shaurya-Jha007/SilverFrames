import { useQuery } from "@tanstack/react-query";
import { fetchPopularMoviesAndShows } from "../../util/fetch";
import Slider from "react-slick";
export default function Popular() {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["popularMoviesAndShows"],
    queryFn: fetchPopularMoviesAndShows,
  });
  const baseUrl = "https://image.tmdb.org/t/p/original";

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
      <section className="text-white mt-24 px-8 font-bold">
        <h2 className="text-3xl">Popular Movies</h2>
        <Slider {...settings}>
          {data.map((show, index) => {
            return (
              <div className="h-[55vh] w-full mt-8">
                <div
                  key={index}
                  className="h-5/6 w-11/12 rounded-2xl cursor-pointer hover:scale-110 duration-300 overflow-hidden z-10"
                  style={{
                    backgroundImage: `url(${baseUrl}${show.poster_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <p className="mt-3 ml-3 bg-green-400 inline-block text-xl px-3 py-0.5 rounded-lg">
                    HD
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    );
  }
}
