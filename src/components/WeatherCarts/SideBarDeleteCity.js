import React, {useRef, useEffect} from "react";
import { connect } from "react-redux";
import Shadow from "../Main-homepage/Shadow";
import { hideSidebarDeleteCity, removeCity } from "../../redux/actions";
import removeIcon from '../img/icon-remove.png'
import xIconDark from '../img/x-iconDark.png'
import xIconLight from '../img/x-iconLight.png'
import cancelIconDark from '../img/cancelDark.png'
import cancelIconLight from '../img/cancelLight.png'

function SideBarDeleteCity(props){

    const theme = props.isToggle ? 'dark':'light'
    const xIcon = props.isToggle ? xIconDark : xIconLight
    const cancelIcon = props.isToggle ? cancelIconDark : cancelIconLight


    return (
        <>
        <div className={`sidebar ${theme}-modeSidebar`} style={{display: props.isShowSidebarDeleteCity ? 'block':'none'}} >
            <div className="sidebar-elements">
                <div className="sidebar-header">
                    <h3>Remove {props.removedCityName} City</h3>
                    <img alt="" onClick={() => props.hideSidebarDeleteCity()} className="btn" src={xIcon} />
                </div>
                <div className="sidebar-mid">
                    <div className="sidebar-mid-text">
                        <p>You have sure you want to remove</p>
                        <p className="sidebar-mid-text-bold">{props.removedCityName}?</p>
                    </div>
                </div>
                <div className="sidebar-footer" >
                        <button 
                            className={`btn ${theme}-mode`}
                            onClick={() => props.hideSidebarDeleteCity()}
                                >
                                <img alt="" className="btn-img" src={cancelIcon} />
                                Cancel
                        </button>

                        <button 
                            className={`btn btn-remove`} 
                            onClick={() => {props.removeCity();props.hideSidebarDeleteCity()}}
                            >
                                <img alt=""  className="btn-img" src={removeIcon} />
                                Remove
                        </button>
                </div>
            </div>
        </div>
        {props.isShowSidebarDeleteCity && <Shadow />}
        </>
    )
}
const mapStateToProps = state => {
    return {
        isToggle:state.isToggle,
        isShowSidebarDeleteCity:state.isShowSidebarDeleteCity,
        removedCityName:state.removedCityName
    }
}
export default connect(mapStateToProps,{hideSidebarDeleteCity,removeCity})(SideBarDeleteCity)