import React from "react";
import Bar from "../components/Bar"; // make sure the path is correct
import "./TripTrackerStyle.css";

export default function TripTrackerPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Trip Tracker</h2>
      <p>Hier komt de Trip Tracker functionaliteit.</p>

      {/* Add your progress bar here */}
      <Bar/> 
    </div>
  );
}
