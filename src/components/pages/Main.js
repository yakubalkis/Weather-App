import React from "react";
import { connect } from "react-redux";
import { showSidebarDeleteCity,getDataOfWillBeRemovedCity } from "../../redux/actions";
import Popup from "./Popup";
import CityWeatherWeekly from "./CityWeatherWeekly";


import SideBarDeleteCity from "../WeatherCarts/SideBarDeleteCity";

function Main(props){

    const theme = props.isToggle ? 'dark':'light'
    
   
    return (
            <>
                <main className={"main"} >
                    <div className={"main-elements"}>
                        <h1>{props.viewedCityName}</h1>
                        <h2>Weather for the next <b>6 days</b></h2>
                        <button onClick={() => {props.showSidebarDeleteCity()}} 
                                className={`${theme}-modeForBtnAdd remove-btn btn`} >Remove City
                        </button>
                    </div>
                </main> 
                <CityWeatherWeekly/>
                <SideBarDeleteCity />
                <Popup/>
            </>
    )
    
}
const mapStateToProps = state => {
    return {
        isToggle:state.isToggle,
        viewedCityName:state.viewedCityName,
        allWeatherForecasts:state.allWeatherForecasts,
        infoOfSelectedCities:state.infoOfSelectedCities
    }
}
export default connect(mapStateToProps, {showSidebarDeleteCity,getDataOfWillBeRemovedCity})(Main)