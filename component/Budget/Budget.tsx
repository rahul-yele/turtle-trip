import React, { useState } from 'react'
import style from './Budget.module.css'

function Budget() {
    const [flightPrice, setFlightPrice] = useState(0);
    const [hotelPrice, setHotelPrice] = useState(0)

    const handleFlightSliderChange = (event) => {
        setFlightPrice(Number(event.target.value));
      };
    
      const handleHotelSliderChange = (event) => {
        setHotelPrice(Number(event.target.value));
      }; 
  return (
    <div className={style.budget}>
        <div className={style.flight}>
            <div className={style.flightPrice}>
                    
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
        </div>


        <div className={style.hotel}>

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
        </div>

    </div>
  )
}

export default Budget