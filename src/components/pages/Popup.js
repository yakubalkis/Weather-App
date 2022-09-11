import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cart from "../WeatherCarts/Cart";
import xIconDark from '../img/x-iconDark.png'
import xIconLight from '../img/x-iconLight.png'
import windIconDark from '../img/icon-windDark.png'
import rainIconDark from '../img/icon-rainDark.png'
import cloudsIconDark from '../img/icon-cloudsDark.png'

function Popup(props){

    useEffect(() => {
        console.log(props.currentWeatherOfDay)
    },[props.currentWeatherOfDay]) 
    
    const xIcon = props.isToggle ? xIconDark : xIconLight
    

    return (
        <div className="popup">
            <div className="popup-header">
                <p>Weather Info from <b>September 12th</b></p>
                <img alt=""  className="btn" src={xIcon} />
            </div>
            <div className="popup-main">
                <div className="cart popup-cart"></div>
                <div className="popup-info">
                    <div className="popup-info-part">
                        <img  alt=""src={windIconDark} />
                        <div>
                            <h3>Wind</h3>
                            <h4><b>Velocity:</b>2 km/h </h4>
                            <h4><b>Direction:</b>333*</h4>
                        </div>
                    </div>
                    <div className="popup-info-part">
                        <img  alt="" src={rainIconDark}/>
                        <div>
                            <h3>Rain</h3>
                            <h4><b>Percentage:</b>0 % </h4>
                        </div>
                    </div>
                    <div className="popup-info-part">
                        <img  alt="" src={cloudsIconDark} />
                        <div>
                            <h3>Clouds</h3>
                            <h4><b>Percentage:</b>46 % </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return{
        currentWeatherOfDay:state.currentWeatherOfDay,
        isToggle:state.isToggle
    }
}
export default connect(mapStateToProps)(Popup)