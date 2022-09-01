import React,{useState} from 'react'
import { connect } from 'react-redux'
import getWeatherIcon from '../CustomFunctions/getWeatherIcon'
import iconMenu from '../img/icon-menu.png'


function Cart(props){

    const [isShowMenu,setIsShowMenu] = useState(false)
    const style = {
        display: isShowMenu ? 'block':'none'
    }
    const theme = props.isToggle ? 'dark' : 'light'

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 
    const date = new Date()
    const day = date.getDate() >= 10 ? date.getDate() : '0'+ date.getDate()
    const dayName = days[date.getDay()]


    return(
        <div className="cart">
           <p className="cart-day">{dayName}</p>
           <p className="cart-day-number">{day}</p>
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
           <img alt='' src={iconMenu} className='icon-menu' onClick={() => {setIsShowMenu(prevState => !prevState)}} />
           <div className='cart-menu'  >
             <button style={style} className={`cart-menu-button button-top ${theme}-modeSidebar`}>View Weather</button>
             <button style={style} className={`cart-menu-button button-bottom ${theme}-modeSidebar`}>Remove City</button>
           </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isToggle:state.isToggle
    }
}
export default connect(mapStateToProps)(Cart)