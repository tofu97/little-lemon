import React, { useState } from "react"
import backButtonGrn from "../assets/images/Back-grn.svg"
import forwardButtonGrn from "../assets/images/Forward-grn.svg"
import user from "../assets/images/User.svg"
import clock from "../assets/images/clock.svg"
import dish from "../assets/images/Dish.svg"

const ReservationDetails = (props) => {
    const [date, setDate] = useState("")
    const [diners, setDiners] = useState(1)
    const [time, setTime] = useState("")
    const [occasion, setOccasion] = useState("")
    const [availableTimes, setAvailableTimes] = useState([
      "17:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ])

    const onChangeDate = (e) => {
        console.log(e.target.value)
        setDate(e.target.value)
    }

    const onChangeDiners = (e) => {
        console.log(e.target.value)
        setDiners(e.target.value)
    }
    
    const onChangeTime = (e) => {
        console.log(e.target.value)
        setTime(e.target.value)
    }
    
    const onChangeOccasion = (e) => {
        console.log(e.target.value)
        setOccasion(e.target.value)
    }

    return (
        <section className="container">
          <div className="content">
            <form id="reservation-details">
              <div className="calender-nav">
                <nav>
                  <button>
                    <img src={backButtonGrn} alt="previous month" />
                  </button>
                  <h3>August 2023</h3>
                  <button>
                    <img src={forwardButtonGrn} alt="next month" />
                  </button>
                </nav>
              </div>
              <table id="reservation-table">
                <thead>
                  <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                    <td>31</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div id="date-input">
                <div className="field">
                  <label htmlFor="res-date">
                    <img src={clock} alt="date" />
                    Date
                  </label>
                  <input type="date" id="res-date" onChange={onChangeDate} />
                </div>
              </div>
              <div id="diners-input">
                <div className='field field-flex'>
                  <label htmlFor="guests">
                    <img src={user} alt="user" />
                    Number of Diners
                  </label>
                  <div id="diners-number-picker">
                    <button className="number-btn">-</button>
                      <input 
                        type='number' 
                        defaultValue={diners} 
                        min={1} 
                        max={10} 
                        id="guests" 
                        onChange={onChangeDiners}
                      />
                    <button className="number-btn">+</button>
                  </div>
                </div> 
              </div>
              <div id="time-input">
                <div className='field'>
                  <label htmlFor="res-time">
                    <img src={clock} alt="clock" />
                    Time
                  </label>
                  <select 
                    value={time} 
                    id="res-time"
                    onChange={onChangeTime}
                  >
                    {availableTimes.map((time) => {
                      return (
                        <option key={time}>{time}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
              <div id="occasion-input">
                <div className="field">
                  <label htmlFor="occasion">
                    <img src={clock} alt="clock" />
                    Occasion
                  </label>
                  <select 
                    id="occasion" 
                    onChange={onChangeOccasion}
                    value={occasion}
                  >
                    <option></option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                  </select>
                </div>
              </div>
              <div id="reservation-hud">
                <div className="reservation-hud-item">
                  <img src={dish} alt="dish" />
                  <h2>August 23, 2023</h2>
                </div>
                <div className="reservation-hud-item">
                  <img src={clock} alt="clock" />
                  <h2>7:30 PM</h2>
                </div>
                <div className="reservation-hud-item">
                  <img src={user} alt="diner" />
                  <h2>4 Diners</h2>
                </div>
              </div>
              <div id="reservation-contact-info">
                <p>Enter customer contact information, and credit card number to confirm reservation.</p>
              </div>
              <div id="contact-form">
                <fieldset>
                  <div className="field">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" id="firstName" name="firstName" />
                  </div>
                  <div className="field">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" id="lastName" name="lastName" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div id="credit-card-details">
                    <div className="field">
                      <label htmlFor="creditCard">Credit Card Number</label>
                      <input type="text" id="creditCard" name="creditCard" />
                    </div>
                    <div className="field">
                      <label htmlFor="creditCardCvv">CVV</label>
                      <input type="text" id="creditCardCvv" name="creditCardCvv" />
                    </div>
                  </div>
                  <div className='submit-btn-container'>
                    <span></span>
                    <button className='submit-btn'>Reserve</button>
                  </div>
                </fieldset>
              </div>
            </form>
          </div>
        </section>
    )
}

export default ReservationDetails