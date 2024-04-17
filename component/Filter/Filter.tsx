import React, { useState } from 'react'
import { CalendarDays } from "lucide-react";
import style from "./Filter.module.css"
import Budget from '../Budget/Budget';



function Filter({onCalendarClick, onBudgetClick}) {

    const [value, setValue] = useState(100);
    const [departure, setDeparture] = useState(0);
    const [arrival, setArrival] = useState(0);


    const handleDepartureClick = (departure) =>{
        setDeparture(departure)
    }

    const handleArrivalClick = (arrival) =>{
        setArrival(arrival)
    }
    
    const handleSliderChange = (event) => {
        setValue(event.target.value); 
    }; 
  return (
    <div  >
        <div className={style.Filter}> 

            <div className={style.filterSection}> 
                <div className={style.title}>CALENDAR</div>
                <div className={style.calendar}>
                    <CalendarDays onClick={onCalendarClick} size={100} className={style.CalendarIcon}/>
                    <div className={style.flexDeparture}>
                        <div className={style.flexCounter}>
                            <button type="button" className={style.counterButton} onClick={()=>handleDepartureClick(departure-1)}>-</button>
                            <div className={style.flexDepartureCount}>{departure}</div>
                            <button type="button" className={style.counterButton} onClick={()=>handleDepartureClick(departure+1)}>+</button>
                        </div>
                        Flex Departer
                    </div>

                    <div className={style.flexArrival}>
                        <div className={style.flexCounter}>
                            <button type="button" className={style.counterButton} onClick={()=>handleArrivalClick(arrival-1)}>-</button>
                            <div className={style.flexArrivalCount}>{arrival}</div>
                            <button type="button" className={style.counterButton} onClick={()=>handleArrivalClick(arrival+1)}>+</button>
                        </div>
                        Flex Arrival
                    </div>

                    <div className={style.Checkbox}>
                        <input
                            type="checkbox"
                            // checked={false}
                            // onChange={onChange}
                        />
                        Include Weekends
                    </div>

                    <div className={style.Checkbox}>
                        <input
                            type="checkbox"
                            // checked={false}
                            // onChange={onChange}
                        />
                        Red eye
                    </div>

                </div>
                <div className={style.line} />
                <div className={style.title}>PRICE</div>

                <div className={style.Price}>
                
                    <div className={style.priceSlider}>
                        <div >${value}</div>
                        <div>
                            <input
                                type="range"
                                min={0}
                                max={10000}
                                value={value}
                                onChange={handleSliderChange}
                                className={style.sliderInput}
                            />
                        </div>
                    </div>
                    <div>
                        Max.$10000
                    </div>

                    <div>
                        <button onClick={onBudgetClick}>Advanced Selection</button>
                    </div>

                </div>

                <div className={style.line} />
                <div className={style.title}>DISCOVER</div>
            </div>

        </div>

    </div>
  )
}

export default Filter



//-----------------------------

// import React, { useState } from 'react';
// import { CalendarDays } from "lucide-react";
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// function Filter() {
//     const [value, setValue] = useState(100);
//     const [departure, setDeparture] = useState(0);
//     const [arrival, setArrival] = useState(0);

//     const handleDepartureClick = (departure) => {
//         setDeparture(departure);
//     };

//     const handleArrivalClick = (arrival) => {
//         setArrival(arrival);
//     };

//     const handleSliderChange = (event) => {
//         setValue(event.target.value);
//     };

//     return (
//         <div className="w-1/5">
//             <div className="p-4 border border-gray-300 rounded-md">
//                 <div className="indigo-400 text-lg font-bold">CALENDAR</div>
//                 <div className="flex items-center mt-4">
//                     <CalendarDays size={100} className="text-blue-500 mr-2" />
//                     <div className="flex flex-col">
//                         <div className="flex items-center">
//                             <button
//                                 type="button"
//                                 className="px-3 py-1 border border-gray-300 rounded-md mr-2"
//                                 onClick={() => handleDepartureClick(departure - 1)}
//                             >
//                                 -
//                             </button>
//                             <div className="text-lg">{departure}</div>
//                             <button
//                                 type="button"
//                                 className="px-3 py-1 border border-gray-300 rounded-md ml-2"
//                                 onClick={() => handleDepartureClick(departure + 1)}
//                             >
//                                 +
//                             </button>
//                         </div>
//                         <div className="text-gray-600">Flex Departure</div>
//                     </div>
//                 </div>
//                 <div className="my-4 border-b border-gray-300" />
//                 <div className="text-indigo-400 text-lg font-bold">PRICE</div>
//                 <div className="flex flex-col items-center mt-4">
//                     <div>${value}</div>
//                     <input
//                         type="range"
//                         min={0}
//                         max={10000}
//                         value={value}
//                         onChange={handleSliderChange}
//                         className="w-full mt-2"
//                     />
//                     <div>Max. $10000</div>
//                 </div>
//                 <div className="my-4 border-b border-gray-300" />
//                 <div className="text-#a9bcd0 text-lg font-bold">DISCOVER</div>
//             </div>
//             <div className="mt-4">
//                 <Calendar defaultActiveStartDate={new Date()} />
//             </div>
//         </div>
//     );
// }

// export default Filter;






