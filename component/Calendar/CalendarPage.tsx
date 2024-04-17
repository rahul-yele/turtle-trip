import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import style from './CalendarPage.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalendarPage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [inputText, setInputText] = useState("");
    const [departureDateInput, setDepartureDateInput] = useState(new Date());
    const [arrivalDateInput, setArrivalDateInput] = useState(new Date())
    // const [isDatePicker, setIsDatePicker] = useState(false);
  
    // const handleInputChange = (e) => {
    //     const text = e.target.value;
    //     setInputText(text);
    
    //     // Try to parse the input text as a date
    //     const parsedDate = new Date(text);
    //     if (!isNaN(parsedDate.getTime())) {
    //       setSelectedDate(parsedDate);
    //     } else {
    //       setSelectedDate(new Date());
    //     }
    //   };

    const handleInputChange = (e, type) => {
        const text = e.target.value;
        setInputText(text);

        // Try to parse the input text as a date
        const parsedDate = new Date(text);
        if (!isNaN(parsedDate.getTime())) {
            if (type === 'departure') {
                setDepartureDateInput(parsedDate);
            } else if (type === 'arrival') {
                setArrivalDateInput(parsedDate);
            }
        } else {
            setSelectedDate(new Date());
        }
    };

    const handleCalendarChange = (inputDate, type) => {

        const date = new Date(inputDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        const date1 = new Date(inputDate);
        const date2 =  `${year}/${month}/${day}`
        if (type === 'departure') {
            setDepartureDateInput(date1);
            setInputText(date2);
        } else if (type === 'arrival') {
            setArrivalDateInput(date1);
            setInputText(date2);

        }
    };
    
  return (
    <div>

        <div className={style.calendarContainers}>
            <div > <Calendar  className={style.calendar}    onChange={(date) => handleCalendarChange(date, 'departure')}  value={departureDateInput}/></div>
            <div > <Calendar  className={style.calendar}    onChange={(date) => handleCalendarChange(date, 'arrival')}  value={arrivalDateInput}/></div>


        </div>

        <div className={style.Checkbox1}>
            <input
                type="checkbox"
                // checked={false}
                // onChange={onChange}
            />
            Include Weekends
        </div>

        {/* <div className={style.DateSelection}>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter a date (e.g., YYYY-MM-DD)"
            />
            { inputText.length>0 ?<DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
                className={style.datepickerOverlay}
            /> : ""} 
        </div> */}

        <div className={style.dateInputs}>
            <div>
                <label className={style.Label} htmlFor="departure">DEPARTURE</label>
                <input className={style.Input}  type="text" id="depature" name="departure" value={inputText} onChange={(e) => handleInputChange(e, 'departure')}  placeholder='Flexible Date Selection (YYYY-MM-DD)'/>
            </div>

            <div>
                <label className={style.Label} htmlFor="arrival">ARRIVAL</label>
                <input className={style.Input}  type="text" id="arrival" name="arrival" value={inputText} onChange={(e) => handleInputChange(e, 'arrival')}  placeholder='Flexible Date Selection (YYYY-MM-DD)'/>
            </div>
        </div>

        <div className={style.timeInputs}>
            <div>
                <label className={style.Label}  htmlFor="departureTime">TIME PREF</label>
                <input className={style.Input}  type="text" id="departureTime" name="departureTime"  placeholder='Mor/Afternoon/Eve'/>
            </div>

            <div>
                <label className={style.Label} htmlFor="arrivalTime">TIME PREF</label>
                <input className={style.Input}  type="text" id="arrivalTime" name="arrivalTime"  placeholder='Mor/Afternoon/Eve'/>
            </div>
        </div>

        <div className={style.checkboxGroup}>
            <div className={style.checkboxOption}>
                <input  type="checkbox" id="" />
                Allow red eye
            </div>

            <div className={style.checkboxOption}>
                <input  type="checkbox" id="" />
                Allow airport changes
            </div>

            <div className={style.checkboxOption}>
                <input  type="checkbox" id="" />
                Allow Nearby airports
            </div>

            <div className={style.checkboxOption}>
                <input  type="checkbox" id="" />
                Allow mixed cabin
            </div>
        </div>

    </div>
  )
}

export default CalendarPage