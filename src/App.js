import './gridta.css'
import { useReducer } from 'react';
import Reservation from './components/Reservation';
import Home from './components/Home';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

// hello
function App() {
  const initializeTimes = () => {
      return [
          "17:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
      ]
  }
  
  const updateTimes = (_state, action) => {
      // TODO: Use the action.date to get times for the date
      return ["13:01"]
  }

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
