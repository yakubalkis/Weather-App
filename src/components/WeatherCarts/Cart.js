import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router'
import { getCurrentWeatherOfDay, showPopup } from '../../redux/actions'
import CartMenu from './CartMenu'
import getDayData from '../CustomFunctions/getDayData'
import getWeatherIcon from '../CustomFunctions/getWeatherIcon'
import getPopupData from '../CustomFunctions/getPopupData'
import getDaysNames from  '../CustomFunctions/getDaysNames'


function Cart(props){

    
   
    const [isHomePage, setIsHomePage]  = useState(false)
    const {pathname} = useLocation()

    useEffect(() => {
        if(pathname === '/'){
            setIsHomePage(true)
        }else { setIsHomePage(false)}
    },[pathname])

    const styleCursor = {
        cursor: !isHomePage && !props.isShowPopup ? 'pointer':'default'
    }

    function handleClick(){
        props.getCurrentWeatherOfDay(getPopupData(props.weeklyWeatherForecast,getDayData()[0]))
    }

    return(
        <div className={"cart"} style={styleCursor}  onClick={() => {if(!isHomePage && !props.isShowPopup){handleClick();props.showPopup()}}}>
           <p className="cart-day">{props.isShowPopup ?  getDaysNames(Number(props.day - getDayData()[0])-1) : getDayData()[1]}</p>
           <p className="cart-day-number">{props.isShowPopup ? props.day  : getDayData()[0]}</p>
           <img className="cart-icon" alt="" src={getWeatherIcon(props.weatherState, props.currentTemp)} />
           {!props.isShowPopup && <p className="cart-city">{props.city}<span className="cart-city-country">{props.country}</span></p>}
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
          {isHomePage && <CartMenu idOfCity={props.idOfCity} cityName={props.city} countryName={props.country} index={props.index}  />}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isToggle:state.isToggle,
        weeklyWeatherForecast:state.weeklyWeatherForecast,
        isShowPopup:state.isShowPopup
    }
}
export default connect(mapStateToProps,{getCurrentWeatherOfDay, showPopup})(Cart)