import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getWeatherForecast,getPositionOfCity } from "../../redux/actions";
import Cart from "./Cart";
import SideBarDeleteCity from "./SideBarDeleteCity";

function Carts(props){

console.log(props.selectedCities)


useEffect(() => {
    if(props.isSituationDeletingCity===false){
        if(props.selectedCities.length <=1){
            props.getPositionOfCity(props.selectedCities[0])
        }else {
            props.getPositionOfCity(props.selectedCities[props.selectedCities.length-1])
        }
    }
},[props.selectedCities])
  

useEffect(() => {
    const index = props.infoOfSelectedCities.length-1

    if(props.isTakenPositionFromApi===true && props.infoOfSelectedCities[index]  !== undefined){
        const lat = props.infoOfSelectedCities[index]?.lat
        const lon = props.infoOfSelectedCities[index]?.lon
        props.getWeatherForecast(lat,lon)
    }
},[props.isTakenPositionFromApi])


const weatherCarts = props.allWeatherForecasts.map((city,i) => {
   
    console.log(props.allWeatherForecasts)
    console.log(props.infoOfSelectedCities)

    return <Cart 
                key={i}
                idOfCity={city.id}
                index={i}
                city={props.selectedCities[i]}
                country={city.sys.country}
                weatherState={city.weather[0].description}
                currentTemp={city.main.temp}
                feelsLike={city.main.feels_like}
                humidity={city.main.humidity}
        />
})

return( 
    <>
    
        <div className="carts">
            {weatherCarts}
        </div>
        <SideBarDeleteCity />
    </>
    
)
}
const mapStateToProps  = state => {
    return {
        infoOfSelectedCities:state.infoOfSelectedCities,
        allWeatherForecasts:state.allWeatherForecasts,
        selectedCities:state.selectedCities,
        isTakenPositionFromApi:state.isTakenPositionFromApi,
        removedCitiesId:state.removedCitiesId,
        idOfSelectedCities:state.idOfSelectedCities,
        data:state.data,
        isSituationDeletingCity:state.isSituationDeletingCity
    }
}
export default connect(mapStateToProps,{getWeatherForecast,getPositionOfCity})(Carts)