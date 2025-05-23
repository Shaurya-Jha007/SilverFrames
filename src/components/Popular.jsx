import { useQuery } from "@tanstack/react-query";
import { fetchPopularMoviesAndShows } from "../../util/fetch";
import Slider from "react-slick";
import { baseUrl } from "./Slider";
import loader from "../img/loader.svg";
import { Link } from "react-router-dom";
export default function Popular() {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["popularMoviesAndShows"],
    queryFn: fetchPopularMoviesAndShows,
  });

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
    return (
      <section className="text-white lg:mt-24 mt-8 px-8 font-bold">
        <h2 className="text-3xl">Popular Movies/Shows</h2>
        <Slider {...settings}>
          {data.map((show, index) => {
            return (
              <div className="xl:h-[55vh] lg:h-[45vh] md:h-[40vh] sm:h-[50vh] h-[45vh] w-full mt-8">
                <Link
                  to={show.title ? `/movie/${show.id}` : `/show/${show.id}`}
                >
                  <div
                    key={index}
                    className="h-5/6 w-11/12 rounded-2xl hover:scale-110 duration-300 overflow-hidden z-10"
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
                </Link>
              </div>
            );
          })}
        </Slider>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="h-[55vh] text-red-600 flex justify-center items-center">
        <p className="text-6xl">
          {error.message || "Failed to fetch popular movies! Please try again."}
        </p>
      </section>
    );
  }

  if (isPending) {
    return (
      <img
        src={loader}
        alt="Spinning loader"
        className="h-[35vh] my-4 mx-auto"
      />
    );
  }
}
