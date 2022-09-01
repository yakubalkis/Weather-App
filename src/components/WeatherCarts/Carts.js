import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getWeatherForecast,getPositionOfCity } from "../../redux/actions";
import Cart from "./Cart";

function Carts(props){
 
useEffect(() => {
    if(props.selectedCities.length <=1){
        props.getPositionOfCity(props.selectedCities[0])
        console.log('HElloo')
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

// useEffect(() =>  {
//     const lat = props.infoOfSelectedCities[0]?.lat
//     const lon = props.infoOfSelectedCities[0]?.lon
//     if(lat  !== undefined && lon!== undefined){
//         props.getWeatherForecast(props.infoOfSelectedCities[0]?.lat,props.infoOfSelectedCities[0]?.lon)
//     }
     
// },[props.isClickedBtnSave]) 
console.log(props.allWeatherForecasts)

return( 
    <div className="carts">
        <Cart />
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