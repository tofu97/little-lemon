import './gridta.css'
import Reservation from './components/Reservation';
import Home from './components/Home';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

// hello
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservation />} />
      </Routes>
    </>
  );
}

export default App;
