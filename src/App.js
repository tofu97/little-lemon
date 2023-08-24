import './App.css';
import logo from "./assets/images/Logo.svg"
import backButtonBlk from "./assets/images/Back-blk.svg"
import backButtonGrn from "./assets/images/Back-grn.svg"
import forwardButtonGrn from "./assets/images/Forward-grn.svg"
import tablePhoto from "./assets/images/restaurant.jpg"
import calendar from "./assets/images/calendar-placeholder.png"
import user from "./assets/images/User.svg"
import clock from "./assets/images/clock.svg"

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="Little Lemon Logo" />
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <div id='reserve-heading'>
            <nav>
              <a href="/">
                <img src={backButtonBlk} alt="Back button" />
              </a>
            </nav>
            <h1>Reserve Table</h1>
            <h3>Choose the date, number of diners, and then select from an available time</h3>
          </div>
          <div>
            <img src={tablePhoto} alt="Little Lemon restaurant dining area" />
          </div>
        </section>
        <section id="reservation-details">
          <div id='calendar'>
            <nav id='calendar-nav'>
              <button id='previous-month'>
                <img src={backButtonGrn} alt="previous month" />
              </button>
              <h3>August 2023</h3>
              <button id='next-month'>
                <img src={forwardButtonGrn} alt="next month" />
              </button>
            </nav>
            <img src={calendar} alt="calendar placeholder" />
          </div>
          <div id="details">
            <div className='Field'>
              <label>
                <img src={user} alt="user" />Number of Diners
              </label>
              <input type='number' />
            </div> 
            <div className='Field'>
              <label>
                <img src={clock} alt="clock" />Time
              </label>
              <select value="1930">
                <option value="1930">7:30 PM</option>
                <option value="1945">7:45 PM</option>
                <option value="2000">8:00 PM</option>
              </select>
            </div> 
          </div>
          <button>Reserve</button>
        </section>
      </main>
      <footer>
        <img src={logo} alt="Little lemon logo" />
        <nav>
          <h3>Doormat Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </nav>
        <nav>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </nav>
        <nav>
          <h3>Social media links</h3>
          <ul>
            <li>Address</li>
            <li>Phone</li>
            <li>email</li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default App;
