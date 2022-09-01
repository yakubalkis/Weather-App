import React from 'react'
import iconSun from '../img/icon-sun.png'
export default  function Cart(props){

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 
    const date = new Date()
    const day = date.getDate() >= 10 ? date.getDate() : '0'+ date.getDate()
    const dayName = days[date.getDay()]

    return(
        <div className="cart">
           <p className="cart-day">{dayName}</p>
           <p className="cart-day-number">{day}</p>
           <img className="cart-icon" alt="" src={iconSun} />
           <p className="cart-city">{props.city}<span className="cart-city-country">{props.country}</span></p>
           <p className="cart-weather-state">{props.weatherState.charAt(0).toUpperCase()+props.weatherState.slice(1)}</p>
           <div className="cart-weather-info-div">
                <div className="cart-weather-info">
                    <p className='cart-weather-temp-info'>Current Temp.</p>
                    <p className='temp'>{Math.round(props.currentTemp)}°C</p>
                </div>
                <div className="cart-weather-info">
                    <p className='cart-weather-temp-info'>Feels Like</p>
                    <p className='temp'>{Math.round(props.feelsLike)}°C</p>
                </div>
                <div className="cart-weather-info">
                    <p className='cart-weather-temp-info'>Humidity</p>
                    <p className='temp'>{props.humidity}%</p>
                </div>
           </div>
           <img alt='' />
        </div>
    )
}