import React from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { hideSidebarDeleteCity, removeCity } from "../../redux/actions";
import Shadow from "../Main-homepage/Shadow";
import removeIcon from '../img/icon-remove.png'
import xIconDark from '../img/x-iconDark.png'
import xIconLight from '../img/x-iconLight.png'
import cancelIconDark from '../img/cancelDark.png'
import cancelIconLight from '../img/cancelLight.png'

function SideBarDeleteCity(props){

    const navigate = useNavigate()
    const theme = props.isToggle ? 'dark':'light'
    const xIcon = props.isToggle ? xIconDark : xIconLight
    const cancelIcon = props.isToggle ? cancelIconDark : cancelIconLight


    return (
        <>
        <div className={`sidebar ${theme}-modeSidebar`} style={{display: props.isShowSidebarDeleteCity ? 'block':'none'}} >
            <div className="sidebar-elements">
                <div className="sidebar-header">
                    <h3>Remove {props.viewedCityName} City</h3>
                    <img alt="" onClick={() => props.hideSidebarDeleteCity()} className="btn" src={xIcon} />
                </div>
                <div className="sidebar-mid">
                    <div className="sidebar-mid-text">
                        <p>You have sure you want to remove</p>
                        <p className="sidebar-mid-text-bold">{props.viewedCityName}?</p>
                    </div>
                </div>
                <div className="sidebar-footer delete-city-footer" >
                        <button 
                            className={`btn ${theme}-mode btn-cancel`}
                            onClick={() => props.hideSidebarDeleteCity()}
                                >
                                <img alt="" className="btn-img" src={cancelIcon} />
                                Cancel
                        </button>

                        <button 
                            className={`btn btn-remove`} 
                            onClick={() => {props.removeCity() ; props.hideSidebarDeleteCity() ;navigate('/')}}
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
        viewedCityName:state.viewedCityName
    }
}
export default connect(mapStateToProps,{hideSidebarDeleteCity,removeCity})(SideBarDeleteCity)