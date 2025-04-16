import {
  faCirclePlay,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import backgroundImage from "../img/background.png";
export default function HeroSection() {
  return (
    <section>
      <img
        src={backgroundImage}
        alt="Background Image"
        className="object-contain h-full"
      />
    </section>
  );
}
