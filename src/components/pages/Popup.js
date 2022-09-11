import React, { useEffect } from "react";
import { connect } from "react-redux";
import { hidePopup } from "../../redux/actions";
import Shadow from "../Main-homepage/Shadow";
import xIconDark from '../img/x-iconDark.png'
import xIconLight from '../img/x-iconLight.png'
import windIconDark from '../img/icon-windDark.png'
import rainIconDark from '../img/icon-rainDark.png'
import cloudsIconDark from '../img/icon-cloudsDark.png'

function Popup(props){

    
    
    const xIcon = props.isToggle ? xIconDark : xIconLight
    const theme = props.isToggle ? 'dark' : 'light'

    return (
        <>
            <div className={`popup ${theme}-modeSidebar`} style={{display: props.isShowPopup ? 'block':'none'}}>
                <div className="popup-header">
                    <p>Weather Info from <b>September 12th</b></p>
                    <img alt=""  className="btn" src={xIcon} onClick={() => props.hidePopup()}  />
                </div>
                <div className="popup-main">
                    <div className="cart popup-cart"></div>
                    <div className="popup-info">
                        <div className="popup-info-part">
                            <img  alt=""src={windIconDark} />
                            <div className="popup-info-part-text" >
                                <h3>Wind</h3>
                                <h4><b>Velocity: </b>2 km/h </h4>
                                <h4><b>Direction: </b>333°</h4>
                            </div>
                        </div>
                        <div className="popup-info-part">
                            <img  alt="" src={rainIconDark}/>
                            <div className="popup-info-part-text">
                                <h3>Rain</h3>
                                <h4><b>Percentage: </b>0 % </h4>
                            </div>
                        </div>
                        <div className="popup-info-part">
                            <img  alt="" src={cloudsIconDark} />
                            <div className="popup-info-part-text last-part">
                                <h3>Clouds</h3>
                                <h4><b>Percentage: </b>46 % </h4>
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