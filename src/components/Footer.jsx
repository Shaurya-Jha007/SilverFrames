import logo from "../img/logo.png";
export default function Footer() {
  const list1 = [
    "Movies",
    "TV Shows",
    "Trending",
    "Top IMDb",
    "Live broadcasts",
    "Collections",
    "Actors ",
    "Request",
    "Discord",
    "Subscription",
  ];
  const list2 = ["Privacy Policy", "Cookie Policy", "DMCA", "Terms"];

  return (
    <footer className="flex sm:flex-row flex-col mb-18 p-8 lg:space-x-32 space-x-54 text-gray-400 text-2xl">
      <div className="w-1/4 lg:block hidden">
        <img src={logo} alt="Site logo" className="h-16" />
        <p className="mt-8">
          PopcornMovies - The best place to watch movies online for free in HD
          quality, Free TV Shows and stream live.
        </p>
        <p className="mt-8">&copy; 2025 Popcornmovies. All rights reserved.</p>
      </div>
      <div className="w-1/4 lg:ml-0 ml-24">
        <h3 className="font-medium text-white">Browse</h3>
        <div className="flex mt-8 space-x-24">
          <div>
            {list1.slice(0, list1.length / 2).map((item) => {
              return (
                <p className="mb-8 hover:text-white hover:underline">{item}</p>
              );
            })}
          </div>
          <div>
            {list1.slice(list1.length / 2, list1.length).map((item) => {
              return (
                <p className="mb-8 hover:text-white hover:underline">{item}</p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="sm:ml-0 ml-24 sm:mt-0 mt-16">
        <h3 className="font-medium text-white">About</h3>
        <div className="flex mt-8 space-x-32">
          <div>
            {list2.slice(0, list2.length / 2).map((item) => {
              return (
                <p className="mb-4 hover:text-white hover:underline">{item}</p>
              );
            })}
          </div>
          <div>
            {list2.slice(list2.length / 2, list2.length).map((item) => {
              return (
                <p className="mb-4 hover:text-white hover:underline">{item}</p>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
