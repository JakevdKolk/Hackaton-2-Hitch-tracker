import { useState } from "react";
import InputBox from "./InputBox";

type PriceCalculatorProps = {
  kmNumber: number;
  timeInMinutes: number;
};

export default function PriceCalculator({ kmNumber, timeInMinutes }: PriceCalculatorProps) {
  const [pricePerKm, setPricePerKm] = useState(0.35);
  const [pricePerMinute, setPricePerMinute] = useState(0.1);
  const [tempKmPrice, setTempKmPrice] = useState(pricePerKm);
  const [tempMinutePrice, setTempMinutePrice] = useState(pricePerMinute);

  const [pricingMode, setPricingMode] = useState<"km" | "minute">("km");

  const handleConfirm = () => {
    setPricePerKm(tempKmPrice);
    setPricePerMinute(tempMinutePrice);
  };

  const totalPrice =
    pricingMode === "km"
      ? kmNumber * pricePerKm
      : timeInMinutes * pricePerMinute;

  return (
    <div id="price" className={kmNumber === 0 ? "faded" : ""}>
      <h3>Trip Summary</h3>

      <div id="flexbox">
        <div id="wrapper">
          <p>Distance:</p>
          <p id="display">{kmNumber} km</p>
        </div>
        <div id="wrapper">
          <p>Estimated Time:</p>
          <p id="display">{timeInMinutes} min</p>
        </div>
      </div>


      <div id="flexbox">
        <InputBox
            name="Price per km"
            type="number"
            value={tempKmPrice}
            onChange={(e) => {
                const v = parseFloat(e.target.value);
                if (!isNaN(v)) setTempKmPrice(v);
            }}
        />

        <InputBox
            name="Price per minute"
            type="number"
            value={tempMinutePrice}
            onChange={(e) => {
                const v = parseFloat(e.target.value);
                if (!isNaN(v)) setTempMinutePrice(v);
            }}
        />

      </div>
        <div id="flexbox">
            <label id="flexbox">
                <p>Price per KM:</p>
                <input
                    type="radio"
                    name="pricingMode"
                    value="km"
                    checked={pricingMode === "km"}
                    onChange={() => setPricingMode("km")}
                />
            </label>

            <label id="flexbox">
                <p>Price per Minute:</p>
                <input
                    type="radio"
                    name="pricingMode"
                    value="minute"
                    checked={pricingMode === "minute"}
                    onChange={() => setPricingMode("minute")}
                />
            </label>
      </div>

      <p>Total Price: €{totalPrice.toFixed(2)}</p>

      <button type="button" onClick={handleConfirm}>
        Calculate Prices
      </button>
    </div>
  );
}
