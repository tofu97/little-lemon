import backButtonGrn from "../assets/images/Back-grn.svg"
import forwardButtonGrn from "../assets/images/Forward-grn.svg"
import { explodeDate, months } from "../helpers/date"

const Calendar = ({date, setDate}) => {
    let [year, monthNumber, day] = explodeDate(date)
    let monthIdx = monthNumber - 1
    const month = months[monthIdx]
    const dateObj = new Date(year, monthIdx, day)
    const dayOfMonth = dateObj.getDate()
    const daysInMonth = new Date(year, monthIdx + 1, 0).getDate()
    const firstWeekDayOfMonth = new Date(year, monthIdx, 1).getDay()

    const onPreviousMonth = (e) => {
        e.preventDefault()
        if (monthIdx === 0) {
            year--
            monthIdx = 11
        } else {
            monthIdx--
        }
        const dateStr = [year, monthIdx + 1, 1].map((v) => {
            return String(v).padStart(2, '0')
        }).join("-")
        setDate(dateStr)
    }
    
    const onNextMonth = (e) => {
        e.preventDefault()
        if (monthIdx === 11) {
            year++
            monthIdx = 0
        } else {
            monthIdx++
        }
        const dateStr = [year, monthIdx + 1, 1].map((v) => {
            return String(v).padStart(2, '0')
        }).join("-")
        setDate(dateStr)
    }

    const rows = []
    let curr = 1 - firstWeekDayOfMonth
    for (let i = 0; i < 6; i++) {
        const row = []
        for (let j = 0; j < 7; j++) {
            if (curr < 1 || curr > daysInMonth) {
                row.push([false, "*", "ghost"])
            } else if (curr === dayOfMonth) {
                row.push([true, curr, ""])
            } else {
                row.push([false, curr, ""])
            }
            curr++
        }
        rows.push(row)
    }

    const selectDay = (day) => () => {
        if (day === "*") {
            return
        }
        const dateStr = [year, monthIdx + 1, day].map((v) => {
            return String(v).padStart(2, '0')
        }).join("-")
        setDate(dateStr)
    }

    return (
        <>
            <div className="calender-nav">
                <nav>
                    <button onClick={onPreviousMonth} aria-label="next month">
                        <img src={backButtonGrn} alt="previous month" />
                    </button>
                    <h3>{month} {year}</h3>
                    <button onClick={onNextMonth} aria-label="previous month">
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
                    {rows.map((row, i) => {
                        return (
                            <tr key={i}>
                                {row.map(([isSelected, cell, ghost], j) => {
                                    return (
                                        isSelected 
                                            ? <td key={`${i,j}`} aria-label="On click" className={`selected ${ghost}`} onClick={selectDay(cell)}>{cell}</td>
                                            : <td key={`${i,j}`} aria-label="On click" className={ghost} onClick={selectDay(cell)}>{cell}</td>
                                    )     
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Calendar