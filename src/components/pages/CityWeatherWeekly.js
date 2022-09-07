import React from "react"
import { connect } from "react-redux"
import Cart from "../WeatherCarts/Cart"

function CityWeatherWeekly(){

    return(
            <div className="carts">
                HELLLOOO
            </div>
    )
    
}
const mapStateToProps = state => {
    return {
        allWeatherForecasts:state.allWeatherForecasts
    }
}
export default connect(mapStateToProps)(CityWeatherWeekly)