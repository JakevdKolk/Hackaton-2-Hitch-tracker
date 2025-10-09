import React, { useEffect, useState } from "react";
import "./Bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

function Bar({ max = 100, speed = 50 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev >= max) {
          clearInterval(interval);
          return max;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [max, speed]);

  const percentage = Math.min((value / max) * 100, 12);

  return (
    <div className="progress-container">
      <div className="progress-header">
        <FontAwesomeIcon icon={faMapLocationDot} className="progress-icon" />
        <h2>Route Voortgang</h2>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="progress-label">{Math.round(percentage)}%</p>
    </div>
  );
}

export default Bar;
