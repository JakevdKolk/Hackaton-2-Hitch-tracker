import { Routes, Route } from 'react-router-dom';
import Header from './header';
import TripTrackerPage from './pages/TripTrackerPage';
import CommunicatiePage from './pages/CommunicatiePage';
import PlanningPage from './pages/PlanningPage';
import './App.css'

function App() {  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/trip-tracker" element={<TripTrackerPage />} />
        <Route path="/communicatie" element={<CommunicatiePage />} />
        <Route path="/planning" element={<PlanningPage />} />
      </Routes>
    </>
  );
}

export default App;
