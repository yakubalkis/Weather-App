import React from "react";
import { connect } from "react-redux";
import { hidePopup } from "../../redux/actions";
import Cart from "../WeatherCarts/Cart";
import Shadow from "../Main-homepage/Shadow";
import xIconDark from '../img/x-iconDark.png'
import xIconLight from '../img/x-iconLight.png'
import windIconDark from '../img/icon-windDark.png'
import rainIconDark from '../img/icon-rainDark.png'
import cloudsIconDark from '../img/icon-cloudsDark.png'

function Popup(props){

    const xIcon = props.isToggle ? xIconDark : xIconLight
    const theme = props.isToggle ? 'dark' : 'light'
    let rainPercentage=0
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    
    console.log(props.currentWeatherOfDay)
    for(let key in props.currentWeatherOfDay?.rain){ // because of rain object has '3h' key 
        if(props.currentWeatherOfDay?.rain.hasOwnProperty(key)){  
            rainPercentage  = props.currentWeatherOfDay?.rain[key]
        } 
    }

    const cart = Object.keys(props.currentWeatherOfDay).length !== 0 ? 
       <Cart 
                    weatherState={props.currentWeatherOfDay.weather[0].description}
                    currentTemp={props.currentWeatherOfDay.main.temp} 
                    feelsLike={props.currentWeatherOfDay.main.feels_like}
                    humidity={props.currentWeatherOfDay.main.humidity}
                    day={props.currentWeatherOfDay.dt_txt[8]+props.currentWeatherOfDay.dt_txt[9]}
               /> 
     : false

    return (
        <>
            <div className={`popup ${theme}-modeSidebar`} style={{display: props.isShowPopup ? 'block':'none'}}>
                <div className="popup-header">
                    <p>Weather Info from <b>{monthNames[Number(props.currentWeatherOfDay?.dt_txt[5]+props.currentWeatherOfDay?.dt_txt[6])-1]} {props.currentWeatherOfDay?.dt_txt[8]+props.currentWeatherOfDay?.dt_txt[9]}th</b></p>
                    <img alt=""  className="btn" src={xIcon} onClick={() => props.hidePopup()}  />
                </div>
                <div className="popup-main">
                    <div className="popup-cart">{cart}</div>
                    <div className="popup-info">
                        <div className="popup-info-part">
                            <img  alt=""src={windIconDark} />
                            <div className="popup-info-part-text" >
                                <h3>Wind</h3>
                                <h4><b>Velocity: </b>{Math.round(props.currentWeatherOfDay?.wind?.speed)} km/h </h4>
                                <h4><b>Direction: </b>{Math.round(props.currentWeatherOfDay?.wind?.deg)}°</h4>
                            </div>
                        </div>
                        <div className="popup-info-part">
                            <img  alt="" src={rainIconDark}/>
                            <div className="popup-info-part-text">
                                <h3>Rain</h3>
                                <h4><b>Percentage: </b>{rainPercentage} % </h4>
                            </div>
                        </div>
                        <div className="popup-info-part">
                            <img  alt="" src={cloudsIconDark} />
                            <div className="popup-info-part-text last-part">
                                <h3>Clouds</h3>
                                <h4><b>Percentage: </b>{props.currentWeatherOfDay?.clouds?.all} % </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {props.isShowPopup && <Shadow />}
        </>
    )
}
const mapStateToProps = state => {
    return{
        currentWeatherOfDay:state.currentWeatherOfDay,
        isToggle:state.isToggle,
        isShowPopup:state.isShowPopup
    }
}
export default connect(mapStateToProps,{hidePopup})(Popup)