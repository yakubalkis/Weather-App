import axios from "axios"

export const toggle = () => dispatch => {
    dispatch({type: 'TOGGLE'})
}
export const showSideBar = () => dispatch => {
    dispatch({type: 'SHOW_SIDEBAR'})
}
export const getCountries = () => dispatch => {
    axios
    .get("https://countriesnow.space/api/v0.1/countries")
    .then(response => dispatch({type: 'GET_COUNTRIES_SUCCESS', payload:response.data}))
}
export const getCountry = (country) => dispatch => {
    dispatch({type: 'GET_COUNTRY', payload:country})
}
export const getCity = (city) => dispatch => {
    dispatch({type: 'GET_CITY', payload:city})
} 