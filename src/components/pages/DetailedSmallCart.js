import { connect } from "react-redux"
import { getCurrentWeatherOfDay,showPopup } from "../../redux/actions"
import getDaysNames from "../CustomFunctions/getDaysNames"
import getMonthName from "../CustomFunctions/getMonthName"
import getWeatherIcon from "../CustomFunctions/getWeatherIcon"



function DetailedSmallCart(props){

    function handleClick(){
        props.getCurrentWeatherOfDay(props.weatherData,Number(props.day),getMonthName(props.monthNumber)) 
    }

    return(
        <div className="cart cart-small" onClick={() => {handleClick();props.showPopup()}}>
            <p className="cart-day">{getDaysNames(props.index)}</p>
            <p className="cart-day-number">{props.day}</p>
            <div className="descriptionText" data-hover={props.description.charAt(0).toUpperCase()+props.description.slice(1)}>
                <img className="cart-icon" alt="" src={getWeatherIcon(props.description, props.currentTemp)} /></div>
            <div className="cart-weather-info-div">
                    <p className='temp tempText' data-hover="Max Temperature" >{Math.round(props.maxTemp)}°C</p>
                    <p className='temp tempText' data-hover="Min Temperature" style={{opacity:'0.7'}}>{Math.round(props.minTemp)}°C</p>
           </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        weeklyWeatherForecast:state.weeklyWeatherForecast
    }
}
export default connect(mapStateToProps,{getCurrentWeatherOfDay, showPopup})(DetailedSmallCart)