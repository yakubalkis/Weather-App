import React from "react";
import { connect } from "react-redux";
import SideBarAddCity from "./SideBarAddCity";
import RemovedMessage from "../messages/Removed";
import { showSidebarAddCity} from "../../redux/actions";


function Main(props){
    const theme = props.isToggle ? 'dark' : 'light'
    
    return(
        <>
        <main className={"main"} >
            <div className={"main-elements"}>
                <h1>Tracked Cities</h1>
                <h2>All the cities you are saved to see the weather!</h2>
                <button onClick={() => props.showSidebarAddCity()} className={`${theme}-modeForBtnAdd add-btn btn`} ><span className="plus" >+</span>Add City</button>
            </div>
        </main>
        <SideBarAddCity />
        <RemovedMessage />
        </>
        
    )
}
const mapStateToProps = state => {
    return {
        isToggle:state.isToggle,
        allWeatherForecasts:state.allWeatherForecasts
    }
}

export default connect(mapStateToProps, {showSidebarAddCity})(Main)