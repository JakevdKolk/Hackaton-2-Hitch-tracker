import InputBox from "./InputBox";

type RouteformProps = {
  from: string;
  to: string;
  setFrom: (v: string) => void;
  setTo: (v: string) => void;
  setKmNumber: (v: number) => void;
  setSpeedNumber: (v: number) => void;
  setTimeInMinutes: (v: number) => void;
};

export default function Routeform({
  from, to, setFrom, setTo,
  setKmNumber, setSpeedNumber, setTimeInMinutes
}: RouteformProps) {

  const handleClick = () => {
    if (!from.trim()) return alert("Please fill in a starting location.");
    if (!to.trim()) return alert("Please fill in a destination.");

    const generatedKm = Math.floor(Math.random() * 20 + 1);
    const generatedKmh = Math.floor(Math.random() * 60 + 10);
    const routeTime = Math.ceil((generatedKm / generatedKmh) * 60);

    setKmNumber(generatedKm);
    setSpeedNumber(generatedKmh);
    setTimeInMinutes(routeTime);
  };

  return (
    <form className="route-input">
      <InputBox name="From" value={from} onChange={(e) => setFrom(e.target.value)} />
      <InputBox name="To" value={to} onChange={(e) => setTo(e.target.value)} />
      <input type="button" value="Plan Route" onClick={handleClick} />
    </form>
  );
}
