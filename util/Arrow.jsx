import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
export default function Arrow({ onClick, type }) {
  return (
    <div
      onClick={onClick}
      className={`right-6 text-2xl z-10 px-9 py-7 rounded-full lg:block hidden bg-gray-400/30 absolute hover:bg-green-400 duration-200 cursor-pointer ${
        type ? "xl:top-1/3 lg:top-1/7" : "xl:top-1/2 lg:top-1/3"
      }`}
    >
      {type ? (
        <FontAwesomeIcon icon={faChevronRight} />
      ) : (
        <FontAwesomeIcon icon={faChevronLeft} />
      )}
    </div>
  );
}
