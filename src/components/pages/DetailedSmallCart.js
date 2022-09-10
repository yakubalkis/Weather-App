import getDaysNames from "../CustomFunctions/getDaysNames"
import getWeatherIcon from "../CustomFunctions/getWeatherIcon"


export default function DetailedSmallCart(props){
    return(
        <div className="cart cart-small">
            <p className="cart-day">{getDaysNames(props.index)}</p>
            <p className="cart-day-number">{props.day}</p>
            <div className="descriptionText" data-hover={props.description}><img className="cart-icon" alt="" src={getWeatherIcon(props.description, props.currentTemp)} /></div>
            <div className="cart-weather-info-div">
                    <p className='temp tempText' data-hover="Max Temperature" >{Math.round(props.maxTemp)}°C</p>
                    <p className='temp tempText' data-hover="Min Temperature" style={{opacity:'0.7'}}>{Math.round(props.minTemp)}°C</p>
           </div>
        </div>
    )
}