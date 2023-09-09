import './gridta.css'
import { useReducer } from 'react';
import Reservation from './components/Reservation';
import Home from './components/Home';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import updateTimes, {initializeTimes} from './updateTimesReducer';

function App() {
  const [availableTimes, dispatchAvailableTimes] = useReducer(
      updateTimes, 
      initializeTimes()
  )

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservation times={{availableTimes, dispatchAvailableTimes}}/>}/>
      </Routes>
    </>
  );
}

export default App;
