import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTaxi,
  faCalendarAlt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <h1>Hitchhiker</h1>
      <p>
        Innovatieve taxi-service oplossing met real-time tracking, communicatie
        en planning
      </p>

      <div className="options-row">
        <Link to="/trip-tracker" className="option">
          <FontAwesomeIcon icon={faTaxi} /> <span>Trip Tracker</span>
        </Link>

        <Link to="/" className="option">
          <FontAwesomeIcon icon={faHome} /> <span>Home</span>
        </Link>

        <Link to="/planning" className="option">
          <FontAwesomeIcon icon={faCalendarAlt} /> <span>Planning</span>
        </Link>
      </div>
    </header>
  );
}
