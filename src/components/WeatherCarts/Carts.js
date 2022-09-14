import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getWeatherForecast,getPositionOfCity,setIsTakenPositionFromApi,removeBrokenData} from "../../redux/actions";
import Cart from "./Cart";
import SideBarDeleteCity from "./SideBarDeleteCity";


function Carts(props){



useEffect(() => {
    if(props.isSituationDeletingCity===false && props.isCameBackHomePage===false && props.isSituationRemovingBrokenData===false){
        if(props.selectedCities.length <=1){
            props.getPositionOfCity(props.selectedCities[0])
          
        }else{
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
        props.setIsTakenPositionFromApi()
    }
    else if(props.isTakenPositionFromApi===true && props.infoOfSelectedCities[index]  === undefined){
        alert('Data Not Found For City You Selected')
        props.removeBrokenData()
        props.setIsTakenPositionFromApi()
    }
},[props.isTakenPositionFromApi]) 
 


const weatherCarts = props.allWeatherForecasts.map((city,i) => {
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
        data:state.data,
        isSituationDeletingCity:state.isSituationDeletingCity,
        isCameBackHomePage:state.isCameBackHomePage,
        isSituationRemovingBrokenData:state.isSituationRemovingBrokenData
    }
}
export default connect(mapStateToProps,{getWeatherForecast,getPositionOfCity,setIsTakenPositionFromApi,removeBrokenData})(Carts)