import './gridta.css'
import { useEffect, useReducer } from 'react';
import Reservation from './components/Reservation';
import Home from './components/Home';
import Header from './components/Header';
import { Routes, Route, useNavigate } from 'react-router-dom';
import updateTimes, {initializeTimes} from './reducers/updateTimes';
import useSubmit from './hooks/useSubmit';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  const [availableTimes, dispatchAvailableTimes] = useReducer(
      updateTimes,
      []
  )
  const {submitSucceeded, resetForm, submitForm} = useSubmit()
  const navigate = useNavigate()

  useEffect(() => {
      if (submitSucceeded) {
          resetForm()
          navigate("/confirmed")
      }
  }, [submitSucceeded, navigate, resetForm])

  useEffect(() => {
      const fetchData = async () => {
        try {
          const times = await initializeTimes()
          dispatchAvailableTimes({
            times,
            type: "update_times", 
          })
        } catch (error) {
          console.error(error)
        }
      }
      fetchData()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/reservations" 
          element={<Reservation times={{availableTimes, dispatchAvailableTimes}} submitForm={submitForm}/>}
        />
        <Route path="/confirmed" element={<ConfirmedBooking />}/>
      </Routes>
    </>
  );
}

export default App;
