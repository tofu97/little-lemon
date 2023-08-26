import './App.css';
import './gridta.css'
import logo from "./assets/images/Logo.svg"
import backButtonBlk from "./assets/images/Back-blk.svg"
import backButtonGrn from "./assets/images/Back-grn.svg"
import forwardButtonGrn from "./assets/images/Forward-grn.svg"
import tablePhoto from "./assets/images/Table photo.jpg"
import calendar from "./assets/images/calendar-placeholder.png"
import user from "./assets/images/User.svg"
import clock from "./assets/images/clock.svg"
import dish from "./assets/images/Dish.svg"
import happyChef from "./assets/images/happy-chef.jpg"
import lemon from "./assets/images/lemon.svg"

function ReservationDetails () {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="header">
          <header>
            <img className="logo" src={logo} alt="Little Lemon Logo" />
          </header>
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
        </div>
      </div>
      <main>
        <section id="hero">
          <div class="container">
            <div id="hero-container">
              <div id='reserve-heading'>
                <div class="hero-nav">
                  <nav>
                    <a href="/">
                      <img src={backButtonBlk} alt="Back button" />
                    </a>
                  </nav>
                </div>
                <div class="hero-heading">
                  <h1>Reserve Table</h1>
                  <h3>Choose the date, number of diners, and then select from an available time</h3>
                </div>
              </div>
              <img className="heroImage" src={tablePhoto} alt="Little Lemon restaurant dining area" />
            </div>
          </div>
        </section>
        <div className="container">
          <section id="reservation-details">
            <div id="reservation-details-month">
              <nav id='calendar-nav'>
                <button id='previous-month'>
                  <img src={backButtonGrn} alt="previous month" />
                </button>
                <h3>August 2023</h3>
                <button id='next-month'>
                  <img src={forwardButtonGrn} alt="next month" />
                </button>
              </nav>
            </div>
            <div id="reservation-details-inner">
              <div id='calendar'>
                <img src={calendar} alt="calendar placeholder" />
              </div>
              <div className="details">
                <div className='field field-flex'>
                  <label>
                    <img src={user} alt="user" />
                    Number of Diners
                  </label>
                  <div id="diners-number-picker">
                    <button class="number-btn">-</button>
                      <input type='number' defaultValue={2} min={1} max={20} />
                    <button class="number-btn">+</button>
                  </div>
                </div> 
                <div className='field'>
                  <label>
                    <img src={clock} alt="clock" />
                    Time
                  </label>
                  <select value="1930">
                    <option value="1930">7:30 PM</option>
                    <option value="1945">7:45 PM</option>
                    <option value="2000">8:00 PM</option>
                  </select>
                </div>
                <div className='submit-btn-container'>
                  <button className='submit-btn'>Reserve</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className="footer-container">
        <footer>
          <img src={lemon} alt="Little lemon logo" />
          <nav>
            <h3>Doormat Navigation</h3>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Contact</h3>
            <ul>
              <li><a href="/address">Address</a></li>
              <li><a href="/phone">Phone number</a></li>
              <li><a href="/email">Email</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Social media links</h3>
            <ul>
              <li><a href="/address">Address</a></li>
              <li><a href="/phone">Phone number</a></li>
              <li><a href="/email">Email</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  )
}

function ReservationFinalize () {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="header">
          <header>
            <img className="logo" src={logo} alt="Little Lemon Logo" />
          </header>
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
        </div>
      </div>
      <main>
        <section id="hero">
          <div class="container">
            <div id="hero-container">
              <div id='reserve-heading'>
                <div class="hero-nav">
                  <nav>
                    <a href="/">
                      <img src={backButtonBlk} alt="Back button" />
                    </a>
                  </nav>
                </div>
                <div class="hero-heading">
                  <h1>Reserve Table</h1>
                  <h3>Enter customer contact information, credit card number, and then confirm reservation below</h3>
                </div>
              </div>
              <img className="heroImage" src={tablePhoto} alt="Little Lemon restaurant dining area" />
            </div>
          </div>
        </section>
        <div className="container">
          <div className="reservation-contact-container">
            <section id="reservation-contact">
              <div id="reservation-details-fields">
                <div className='reservation-details-field'>
                  <label>
                    <img src={dish} alt="dish icon" />
                  </label>
                  <h3>August 21, 2023</h3> 
                </div>
                <div className='reservation-details-field'>
                  <label>
                    <img src={clock} alt="clock icon" />
                  </label>
                  <h3>7:30 PM</h3> 
                </div>
                <div className='reservation-details-field'>
                  <label>
                    <img src={user} alt="user icon" />
                  </label>
                  <h3>4 Diners</h3> 
                </div>
                <img src={happyChef} alt="happy chef" />
              </div>
            </section>
            <form>
              <fieldset>
                <div className="field">
                  <label for="firstName">First name</label>
                  <input type="text" id="firstName" name="firstName" />
                </div>
                <div className="field">
                  <label for="lastName">Last name</label>
                  <input type="text" id="lastName" name="lastName" />
                </div>
                <div className="field">
                  <label for="email">Email Address</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div id="credit-card-details">
                  <div className="field">
                    <label for="creditCard">Credit Card Number</label>
                    <input type="text" id="creditCard" name="creditCard" />
                  </div>
                  <div className="field">
                    <label for="creditCardCvv">CVV</label>
                    <input type="text" id="creditCardCvv" name="creditCardCvv" />
                  </div>
                </div>
                <div className='submit-btn-container'>
                  <span></span>
                  <button className='submit-btn'>Reserve</button>
                </div>
              </fieldset>
            </form> 
          </div>
        </div>
      </main>
      <div className="footer-container">
        <footer>
          <img src={lemon} alt="Little lemon logo" />
          <nav>
            <h3>Doormat Navigation</h3>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Contact</h3>
            <ul>
              <li><a href="/address">Address</a></li>
              <li><a href="/phone">Phone number</a></li>
              <li><a href="/email">Email</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Social media links</h3>
            <ul>
              <li><a href="/address">Address</a></li>
              <li><a href="/phone">Phone number</a></li>
              <li><a href="/email">Email</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <ReservationDetails />
      {/* <ReservationFinalize /> */}
    </>
  );
}

export default App;
