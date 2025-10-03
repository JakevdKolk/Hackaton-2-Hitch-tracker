import { useState } from "react";
import InputBox from "./InputBox";

function Routeform() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [kmNumber, setKmNumber] = useState(0);
  const [speedNumber, setSpeedNumber] = useState(0);
  const [timeInMinutes, setTimeInMinutes] = useState(0);

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTo(e.target.value);
  };

  const handleClick = () => {
    if (!from.trim()) {
      return alert("Please fill in a starting location.");
    }
    if (!to.trim()) {
      return alert("Please fill in a destination.");
    }

    const generatedKm = Math.floor(Math.random() * 20 + 1); 
    const generatedKmh = Math.floor(Math.random() * 60 + 10); 

    const routeTime = Math.ceil((generatedKm / generatedKmh) * 60);

    setKmNumber(generatedKm);
    setSpeedNumber(generatedKmh);
    setTimeInMinutes(routeTime);

    console.log({
      From: from,
      To: to,
      KM: generatedKm,
      kmh: generatedKmh,
      timeInMinutes: routeTime,
    });
  };

  return (
    <form className="route-input">
      <InputBox name="From" value={from} onChange={handleFromChange} />
      <InputBox name="To" value={to} onChange={handleToChange} />
      <input type="button" value="Plan Route" onClick={handleClick} />
    </form>
  );
}

export default Routeform;
