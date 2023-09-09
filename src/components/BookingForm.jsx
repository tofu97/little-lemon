import { useState } from "react"
import user from "../assets/images/User.svg"
import clock from "../assets/images/clock.svg"
import dish from "../assets/images/Dish.svg"
import Calendar from "./Calendar"

const BookingForm = (props) => {
    const [date, setDate] = useState("")
    const [diners, setDiners] = useState(1)
    const [time, setTime] = useState("")
    const [occasion, setOccasion] = useState("")
    const {
        availableTimes,
        dispatchAvailableTimes,
    } = props.times

    const onChangeDate = (e) => {
        console.log(e.target.value)
        const newDate = e.target.value
        setDate(newDate)
        dispatchAvailableTimes({date: newDate})
    }

    const onChangeDiners = (e) => {
        console.log(e.target.value)
        setDiners(e.target.value)
    }
    
    const adjustDiners = (e, numDiners) => {
      e.preventDefault()
      numDiners = Math.min(10, Math.max(1, numDiners))
      setDiners(numDiners)
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
        <form id="reservation-details">
            <Calendar />    
            <div id="date-input">
                <div className="field">
                    <label htmlFor="res-date">
                    <img src={clock} alt="date" />
                    Date
                    </label>
                    <input 
                        type="date" 
                        id="res-date" 
                        onChange={onChangeDate} 
                        value={date} 
                    />
                </div>
            </div>
            <div id="diners-input">
                <div className='field field-flex'>
                    <label htmlFor="guests">
                    <img src={user} alt="user" />
                    Number of Diners
                    </label>
                    <div id="diners-number-picker">
                    <button 
                        className="number-btn" 
                        onClick={(e) => adjustDiners(e, diners - 1)}
                    >-</button>
                        <input 
                        type='number' 
                        value={diners} 
                        min={1} 
                        max={10} 
                        id="guests" 
                        onChange={onChangeDiners}
                        />
                    <button 
                        className="number-btn"
                        onClick={(e) => adjustDiners(e, diners + 1)}
                    >+</button>
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
    )
}

export default BookingForm