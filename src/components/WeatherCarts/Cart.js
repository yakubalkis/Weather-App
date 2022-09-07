import React from 'react'
import { connect } from 'react-redux'
import getDays from '../CustomFunctions/getDays'
import CartMenu from './CartMenu'
import getWeatherIcon from '../CustomFunctions/getWeatherIcon'



function Cart(props){


    return(
        <div className="cart">
           <p className="cart-day">{getDays()[1]}</p>
           <p className="cart-day-number">{getDays()[0]}</p>
           <img className="cart-icon" alt="" src={getWeatherIcon(props.weatherState, props.currentTemp)} />
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
           <CartMenu idOfCity={props.idOfCity} cityName={props.city} index={props.index}  />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isToggle:state.isToggle
    }
}
export default connect(mapStateToProps)(Cart)