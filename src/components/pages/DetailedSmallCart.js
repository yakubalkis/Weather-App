import getDays from "../CustomFunctions/getDays"
import getWeatherIcon from "../CustomFunctions/getWeatherIcon"


export default function DetailedSmallCart(props){
    return(
        <div className="cart cart-small">
            <p className="cart-day">{getDays()[1]}</p>
            <p className="cart-day-number">{props.day}</p>
            <img className="cart-icon" alt="" src={getWeatherIcon(props.description, props.currentTemp)} />
            <div className="cart-weather-info-div">
                    <p className='temp'>{Math.round(props.maxTemp)}°C</p>
                    <p className='temp' style={{opacity:'0.7'}}>{Math.round(props.minTemp)}°C</p>
           </div>
        </div>
    )
}