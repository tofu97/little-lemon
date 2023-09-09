import backButtonGrn from "../assets/images/Back-grn.svg"
import forwardButtonGrn from "../assets/images/Forward-grn.svg"

const Calendar = (props) => {
    return (
        <>
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
        </>
    )
}

export default Calendar