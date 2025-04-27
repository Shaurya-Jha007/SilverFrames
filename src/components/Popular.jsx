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
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1361,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 608,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  if (data) {
    console.log(data);
    return (
      <section className="text-white lg:mt-24 mt-8 px-8 font-bold">
        <h2 className="text-3xl">Popular Movies/Shows</h2>
        <Slider {...settings}>
          {data.map((show, index) => {
            return (
              <div className="xl:h-[55vh] lg:h-[45vh] md:h-[40vh] sm:h-[50vh] h-[45vh] w-full mt-8">
                <div
                  key={index}
                  className="h-5/6 w-11/12 rounded-2xl cursor-pointer hover:scale-110 duration-300 overflow-hidden z-10"
                  style={{
                    backgroundImage: `url(${baseUrl}${show.poster_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-t from-black to-transparent"></div>
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
