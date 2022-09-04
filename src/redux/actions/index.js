import axios from "axios"

export const toggle = () => dispatch => {
    dispatch({type: 'TOGGLE'})
}
export const showSidebarAddCity = () => dispatch => {
    dispatch({type: 'SHOW_SIDEBAR_ADD_CITY'})
}
export const hideSidebarAddCity = () => dispatch => {
    dispatch({type: 'HIDE_SIDEBAR_ADD_CITY'})
}
export const showSidebarDeleteCity = ()  => dispatch => {
    dispatch({type: 'SHOW_SIDEBAR_DELETE_CITY'})
}
export const hideSidebarDeleteCity = () => dispatch => {
    dispatch({type: 'HIDE_SIDEBAR_DELETE_CITY'})
}
export const getCountries = () => dispatch => {
    axios
    .get("https://countriesnow.space/api/v0.1/countries")
    .then(response => dispatch({type: 'GET_COUNTRIES_SUCCESS', payload:response.data}))
}
export const getPositionOfCity = (city) => dispatch => {
    dispatch({type:'GET_POSITION_OF_CITY_START'})
    axios
    .get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=504192fcd7519634ad8589d58391b7c4`)
    .then(response => dispatch({type:'GET_POSITION_OF_CITY', payload:response.data[0]}) )
}
export const getCountry = (country) => dispatch => {
    dispatch({type: 'GET_COUNTRY', payload:country})
}
export const getCity = (city) => dispatch => {
    dispatch({type: 'GET_CITY', payload:city})
} 
export const addCity = (city) => dispatch => {
    dispatch({type:'ADD_CITY', payload:city})
}
export const getWeatherForecast = (lat,lon)  => dispatch => {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=504192fcd7519634ad8589d58391b7c4`)
    .then(response => dispatch({type:'GET_WEATHER_FORECAST', payload:response.data}))
}
export const getRemovedCityId = (cityID) => dispatch => {
    dispatch({type: 'GET_REMOVED_CITY_ID', payload:cityID})
}
export const getRemovedCityName = (cityName) => dispatch => {
    dispatch({type: 'GET_REMOVED_CITY_NAME', payload:cityName})
}
export const getDataOfWillBeRemovedCity = (idOfCity, cityName, index) => dispatch => {
    dispatch({type: 'GET_REMOVED_CITY_DATA', payload:[idOfCity,cityName,index]})
}
export const removeCity = ()  => dispatch => {
    dispatch({type: 'REMOVE_CITY'})
}
export const setIsSituationDeletingCity = () =>  dispatch => {
    dispatch({type: 'SET_IS_DELETING_CITY'})
}

