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
    axios
    .get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=504192fcd7519634ad8589d58391b7c4`)
    .then(response => dispatch({type:'GET_POSITION_OF_CITY', payload:response.data[0]}) )
}
export const setIsTakenPositionFromApi = () => dispatch => {
    dispatch({type:'SET_IS_TAKEN_POSITION_FROM_API'})
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
export const removeBrokenData = () => dispatch => {
    dispatch({type:'REMOVE_BROKEN_DATA'})
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
export const getViewedCityAndCountryName = (cityName,countryName,cityId) => dispatch => {
    dispatch({type: 'GET_VIEWED_CITY_AND_COUNTRY_NAME', payload:[cityName, countryName,cityId]})
}
export const isUserComeBackHomePage = () => dispatch => {
    dispatch({type:'COME_BACK_HOMEPAGE'})
}
export const setIsShowMessageRemoved = () => dispatch => {
    dispatch({type:'SET_IS_SHOW_MESSAGE_REMOVED'})
}
export const getWeeklyWeatherForecast = (idOfCity) => dispatch => {
    dispatch({type:'GET_WEEKLY_WEATHER_FORECAST_START'})
    axios
    .get(`https://api.openweathermap.org/data/2.5/forecast?id=${idOfCity}&units=metric&appid=b074f4fee50925ca01787fc6c59090d6`)
    .then(response => dispatch({type: 'GET_WEEKLY_WEATHER_FORECAST', payload:response.data.list}))
}
export const getCurrentWeatherOfDay = (data) => dispatch => {
    dispatch({type:'GET_CURRENT_WEATHER_OF_DAY',payload: data})
}
export const showPopup = () => dispatch => {
    dispatch({type:'SHOW_POPUP'})
}
export const hidePopup = () => dispatch => {
    dispatch({type:'HIDE_POPUP'})
}