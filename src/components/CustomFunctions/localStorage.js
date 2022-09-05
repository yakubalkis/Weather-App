import {useEffect} from "react"
import { connect } from "react-redux"
function LocalStorage(props){

    useEffect(() => {
        console.log('helloo')
        localStorage.setItem('positionData', JSON.stringify([...props.infoOfSelectedCities]))
        localStorage.setItem('selectedCities',JSON.stringify([...props.selectedCities])) 
        localStorage.setItem('weatherData',JSON.stringify([...props.allWeatherForecasts]))
        props.getDataFromLocalStorage()
    },[props.allWeatherForecasts])
}
const mapStateToProps = state => {
    return {
        allWeatherForecasts:state.allWeatherForecasts,
        infoOfSelectedCities:state.infoOfSelectedCities,
        selectedCities:state.selectedCities
    }
}
export default connect(mapStateToProps)(LocalStorage)