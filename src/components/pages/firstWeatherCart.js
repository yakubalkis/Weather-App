import React from "react";
import { connect } from "react-redux";
import Cart from "../WeatherCarts/Cart";

function FirstWeatherCart(props){

    const firstWeatherCart= props.allWeatherForecasts.map((city,i) => {
        if(props.data[2] === i){
            return <Cart 
                        key={i}
                        idOfCity={city.id}
                        index={i}
                        city={props.data[1]}
                        country={city.sys.country}
                        weatherState={city.weather[0].description}
                        currentTemp={city.main.temp}
                        feelsLike={city.main.feels_like}
                        humidity={city.main.humidity}
                   />
        }
        else return false
    })

    return (
        <>
            {firstWeatherCart}
        </>
    )

}
const mapStateToProps = state => {
    return{
        allWeatherForecasts:state.allWeatherForecasts,
        data:state.data
    }
}
export default connect(mapStateToProps)(FirstWeatherCart)