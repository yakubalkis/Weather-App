import React from "react";
import { connect } from "react-redux";
import getDayData from "../CustomFunctions/getDayData";

import Cart from "../WeatherCarts/Cart";

function FirstWeatherCart(props){
   
    const currentDay = getDayData()[0]
    const weatherData = props.allWeatherForecasts[props.data[2]]

    const firstWeatherCart= 
                    <Cart 
                        key={weatherData.id}
                        idOfCity={props.viewedCityId}
                        index={props.data[2]}
                        city={props.data[1]}
                        country={props.viewedCountryName}
                        weatherState={weatherData.weather[0].description}
                        currentTemp={weatherData.main.temp}
                        feelsLike={weatherData.main.feels_like}
                        humidity={weatherData.main.humidity}
                        day={currentDay}
                   />
                   
    return (
        <>
         {firstWeatherCart}
        </>
    )

}
const mapStateToProps = state => {
    return{
        allWeatherForecasts:state.allWeatherForecasts,
        data:state.data,
        viewedCountryName:state.viewedCountryName,
        viewedCityId:state.viewedCityId
    }
}
export default connect(mapStateToProps)(FirstWeatherCart)