import { Routes, Route } from "react-router-dom";
import Header from "./header";
import TripTrackerPage from "./pages/TripTrackerPage";
import PlanningPage from "./pages/PlanningPage";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trip-tracker" element={<TripTrackerPage />} />
        <Route path="/planning" element={<PlanningPage />} />
      </Routes>
    </>
  );
}

export default App;
