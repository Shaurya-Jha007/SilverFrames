import logo from "../img/logo.png";
export default function Navbar() {
  const commonClass = "cursor-pointer hover:text-gray-500 duration-300";
  return (
    <nav className="flex pt-4 px-10 justify-between">
      <div className="flex items-center gap-12 text-2xl text-gray-300">
        <img
          src={logo}
          alt="Website logo"
          className="h-12 mr-8 cursor-pointer"
        />
        <p className={commonClass}>Movies</p>
        <p className={commonClass}>TV Shows</p>
        <p className={commonClass}>Trending</p>
        <p className={commonClass}>Top IMDb</p>
        <p className={commonClass}>Live braodcasts</p>
        <p className={commonClass}>Collections</p>
        <p className={commonClass}>Actors</p>
        <p className={commonClass}>Request</p>
        <p className={commonClass}>Discord</p>
      </div>
      <div className="flex items-center text-2xl gap-12 text-gray-200">
        <p className="text-gray-400 hover:text-gray-200 cursor-pointer duration-300">
          Sign in
        </p>
        <p className="py-6 px-15 bg-green-400 rounded-full hover:bg-green-500 cursor-pointer duration-300">
          Sign up <span>&rarr;</span>
        </p>
      </div>
    </nav>
  );
}
