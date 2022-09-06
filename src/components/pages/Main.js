import React from "react";
import { connect } from "react-redux";
import { showSidebarDeleteCity } from "../../redux/actions";
import SideBarDeleteCity from "../WeatherCarts/SideBarDeleteCity";

function Main(props){

    const theme = props.isToggle ? 'dark':'light'

    return (
            <>
                <main className={"main"} >
                    <div className={"main-elements"}>
                        <h1>{props.viewedCityName}</h1>
                        <h2>Weather for the next <b>7 days</b></h2>
                        <button onClick={() => {props.showSidebarDeleteCity()}} className={`${theme}-modeForBtnAdd remove-btn btn`} >Remove City</button>
                    </div>
                </main>
                <SideBarDeleteCity />
            </>
    )
    
}
const mapStateToProps = state => {
    return {
        isToggle:state.isToggle,
        viewedCityName:state.viewedCityName
    }
}
export default connect(mapStateToProps, {showSidebarDeleteCity})(Main)