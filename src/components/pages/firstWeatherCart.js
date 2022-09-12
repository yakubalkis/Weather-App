import React from "react";
import { connect } from "react-redux";
import getDayData from "../CustomFunctions/getDayData";
import getPopupData from "../CustomFunctions/getPopupData";
import Cart from "../WeatherCarts/Cart";

function FirstWeatherCart(props){
   
    const currentDay = getDayData()[0]
    const currentWeatherData = getPopupData(props.weeklyWeatherForecast,currentDay)
    
    const firstWeatherCart= 
                    <Cart 
                        key={currentWeatherData.dt}
                        idOfCity={props.viewedCityId}
                        index={props.data[2]}
                        city={props.data[1]}
                        country={props.viewedCountryName}
                        weatherState={currentWeatherData.weather[0].description}
                        currentTemp={currentWeatherData.main.temp}
                        feelsLike={currentWeatherData.main.feels_like}
                        humidity={currentWeatherData.main.humidity}
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
        weeklyWeatherForecast:state.weeklyWeatherForecast,
        viewedCountryName:state.viewedCountryName,
        viewedCityId:state.viewedCityId
    }
}
export default connect(mapStateToProps)(FirstWeatherCart)