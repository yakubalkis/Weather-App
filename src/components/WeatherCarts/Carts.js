import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getWeatherForecast,getPositionOfCity } from "../../redux/actions";
import Cart from "./Cart";

function Carts(props){

useEffect(() => {
    if(props.selectedCities.length <=1){
        props.getPositionOfCity(props.selectedCities[0])
    }else {
        props.getPositionOfCity(props.selectedCities[props.selectedCities.length-1])
    }
},[props.selectedCities])
  
console.log(props.selectedCities)
console.log(props.infoOfSelectedCities)

useEffect(() => {
    if(props.isTakenPositionFromApi===true){
        const lat = props.infoOfSelectedCities[props.infoOfSelectedCities.length-1]?.lat
        const lon = props.infoOfSelectedCities[props.infoOfSelectedCities.length-1]?.lon
        props.getWeatherForecast(lat,lon)
    }
},[props.isTakenPositionFromApi])

const weatherCarts = props.allWeatherForecasts.map((city,i) => {
    return <Cart 
                 key={i}
                 city={props.selectedCities[i]}
                 country={city.sys.country}
                 weatherState={city.weather[0].description}
                 currentTemp={city.main.temp}
                 feelsLike={city.main.feels_like}
                 humidity={city.main.humidity}
            />
})
console.log(props.allWeatherForecasts)

return( 
    <div className="carts">
        {weatherCarts}
    </div>
)
}
const mapStateToProps  = state => {
    return {
        infoOfSelectedCities:state.infoOfSelectedCities,
        allWeatherForecasts:state.allWeatherForecasts,
        selectedCities:state.selectedCities,
        isTakenPositionFromApi:state.isTakenPositionFromApi
    }
}
export default connect(mapStateToProps,{getWeatherForecast,getPositionOfCity})(Carts)