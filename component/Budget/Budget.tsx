import React, { useState } from 'react'
import style from './Budget.module.css'

function Budget() {
    const [flightPrice, setFlightPrice] = useState(0);
    const [hotelPrice, setHotelPrice] = useState(0)

    const FlightOptions = [
        { id: 'multipleStops', name: 'multipleStops', label: 'Allow multiple stops' },
        { id: 'airportChanges', name: 'airportChanges', label: 'Allow airport changes' },
        { id: 'nearbyAirports', name: 'nearbyAirports', label: 'Allow nearby airports' },
        { id: 'redEye', name: 'redEye', label: 'Allow red eye' },
        { id: 'mixedCabins', name: 'mixedCabins', label: 'Allow mixed cabins' }
    ];

    const HotelOptions = [
        { id: 'multipleStops', name: 'multipleStops', label: 'Allow Multiple Stops' },
        { id: 'airportChanges', name: 'airportChanges', label: 'Allow Airport Changes'},
        { id: 'nearbyAirports', name: 'nearbyAirports', label: 'Allow Nearby Airports'},
        { id: 'redEye', name: 'redEye', label: 'Allow Red Eye'},
        { id: 'mixedCabin', name: 'mixedCabin', label: 'Allow Mixed Cabin' }
    ];
    const handleFlightSliderChange = (event) => {
        setFlightPrice(Number(event.target.value));
      };
    
      const handleHotelSliderChange = (event) => {
        setHotelPrice(Number(event.target.value));
      }; 
  return (
    <div>
        
        <div className={style.budget}>
            <div className={style.flight}>
                <div className={style.flightPrice}>

                    <div>
                        Flights
                    </div>

                        
                    <div className={style.priceSlider}>
                        <div >${flightPrice}</div>
                        <div>
                            Per Pax
                            <input
                                type="range"
                                min={0}
                                max={500}
                                value={flightPrice}
                                onChange={handleFlightSliderChange}
                                className={style.sliderInput}
                            />
                        </div>
                    </div>
                    <div>
                        Max.$500
                    </div>
                </div>


                <div className={style.FlightOptions}>
                    <div >
                        <label htmlFor="cabin" className={style.Label}>CABIN</label>
                        <input type="text" id="cabin" name="cabin" className={style.Input} placeholder='Eco/Pre Eco/Bus/First'/>
                    </div>

                    <div >
                        <label htmlFor="stops" className={style.Label}>STOPS</label>
                        <input type="text" id="stops" name="stops" className={style.Input} placeholder='+/-'/>
                    </div>

                    <div > 
                        <label htmlFor="layover" className={style.Label}>LAYOVER</label>
                        <input type="text" id="layover" name="layover" className={style.Input} placeholder='8 hours' />
                    </div>
                </div>


                <div className={style.checkboxGroup}>
                    {FlightOptions.map(option => (
                        <div key={option.id} className={style.checkboxOption}>
                            <input type="checkbox" id={option.id} name={option.id} className={style.Input}  />
                            {option.label}
                        </div>
                    ))}
                </div>
            </div>

    {/* ---------------------------------------------------------------------------------------------- */}

            <div className={style.hotel}>
                <div>
                    Hotel
                </div>

                <div className={style.hotelPrice}>
                            
                    <div className={style.priceSlider}>
                        <div >${hotelPrice}</div>
                        <div>
                            Per Night
                            <input
                                type="range"
                                min={0}
                                max={150}
                                value={hotelPrice}
                                onChange={handleHotelSliderChange}
                                className={style.sliderInput}
                            />
                        </div>
                    </div>
                    <div>
                        Max.$150
                    </div>

                </div>

                <div className={style.HotelOptions}>
                    <div >
                        <label htmlFor="noOfBeds" className={style.Label}>NO OF BED</label>
                        <input type="text" id="noOfBeds" name="noOfBeds" className={style.Input} />
                    </div>

                    <div >
                        <label htmlFor="roomClass" className={style.Label}>CLASS</label>
                        <input type="text" id="roomClass" name="roomClass" className={style.Input} />
                    </div>

                    <div >
                        <label htmlFor="rating" className={style.Label}>RATING</label>
                        <input type="text" id="rating" name="rating" className={style.Input} />
                    </div>
                </div>

                <div className={style.checkboxGroup}>
                    {HotelOptions.map(option => (
                        <div key={option.id} className={style.checkboxOption}>
                            <input type="checkbox" id={option.id} name={option.id} className={style.Input} />
                            {option.label}
                        </div>
                    ))}
 
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Budget