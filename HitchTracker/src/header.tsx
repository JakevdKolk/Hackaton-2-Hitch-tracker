import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTaxi, faComments, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import './header.css'

export default function Header() {
  return (
    <header>
      {/* Title */}
      <h1>Hitchhiker</h1>
      {/* Subtitle */}
      <p>
        Innovatieve taxi-service oplossing met real-time tracking, communicatie en planning
      </p>

      {/* Yellow options row */}
      <div className="options-row">
        <div className="option">
          <FontAwesomeIcon icon={faTaxi} /> <span>Trip Tracker</span>
        </div>
        <div className="option">
          <FontAwesomeIcon icon={faComments} /> <span>Communicatie</span>
        </div>
        <div className="option">
          <FontAwesomeIcon icon={faCalendarAlt} /> <span>Planning</span>
        </div>
      </div>
    </header>
  );
}


