import React from "react"
import { connect } from "react-redux"
import Cart from "../WeatherCarts/Cart"
import DetailedSmallCart from "./DetailedSmallCart"

function CityWeatherWeekly(props){

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
    return(
            <div className="carts">
                {firstWeatherCart}
                <div className="carts-6days">
                   <DetailedSmallCart/>
                </div>
            </div>
    )
    
}
const mapStateToProps = state => {
    return {
        allWeatherForecasts:state.allWeatherForecasts,
        data:state.data
    }
}
export default connect(mapStateToProps)(CityWeatherWeekly)