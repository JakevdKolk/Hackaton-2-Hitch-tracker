import { useState } from "react";
import Routeform from "../components/Routeform";
import PriceCalculator from "../components/PriceCalculator";
import Bar from "../components/Bar";

export default function TripTrackerPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [kmNumber, setKmNumber] = useState(0);
  const [speedNumber, setSpeedNumber] = useState(0);
  const [timeInMinutes, setTimeInMinutes] = useState(0);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Trip Tracker</h2>

      <Routeform
        from={from}
        to={to}
        setFrom={setFrom}
        setTo={setTo}
        setKmNumber={setKmNumber}
        setSpeedNumber={setSpeedNumber}
        setTimeInMinutes={setTimeInMinutes}
      />
      <Bar speed={speedNumber} />
      

      <PriceCalculator
        kmNumber={kmNumber}
        timeInMinutes={timeInMinutes}
      />
    </div>
  );
}
