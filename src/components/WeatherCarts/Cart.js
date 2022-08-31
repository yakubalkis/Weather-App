import React from 'react'
import iconSun from '../img/icon-sun.png'
export default  function Cart(){
    return(
        <div className="cart">
           <p className="cart-day">Wednesday</p>
           <p className="cart-day-number">31</p>
           <img className="cart-icon" alt="" src={iconSun} />
           <p className="cart-city">Leira<span className="cart-city-country">PT</span></p>
           <p className="cart-weather-state">Scattered clouds</p>
           <div className="cart-weather-info-div">
                <div className="cart-weather-info">
                    <p className='cart-weather-temp-info'>Current Temp.</p>
                    <p className='temp'>23°C</p>
                </div>
                <div className="cart-weather-info">
                    <p className='cart-weather-temp-info'>Feels Like</p>
                    <p className='temp'>23°C</p>
                </div>
                <div className="cart-weather-info">
                    <p className='cart-weather-temp-info'>Humidity</p>
                    <p className='temp'>71%</p>
                </div>
           </div>
           <img alt='' />
        </div>
    )
}