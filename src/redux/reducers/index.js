const INITIAL_STATE = {
    isToggle: false,
    isShow:false,
    countries:[],
    selectedCountry:'',
    selectedCity:'',
    selectedCities:['Berlin'],
    infoOfSelectedCities:[],
    allWeatherForecasts:[],
    isTakenPositionFromApi:false,
    removedCityId:5,
    removedCitiesNames:'',
    idOfSelectedCities:[],
    data:[],
    isSituationDeletingCity:false
}

export const reducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'TOGGLE':
            return {...state, isToggle:!state.isToggle}
        case 'SHOW_SIDEBAR':
            return {...state, isShow:true}
        case 'HIDE_SIDEBAR':
            return {...state, isShow:false}
        case 'GET_COUNTRIES_SUCCESS':
            return {...state, countries:action.payload}
        case 'GET_POSITION_OF_CITY_START':
            return {...state, isTakenPositionFromApi:false} 
        case 'GET_POSITION_OF_CITY':
            return {...state, infoOfSelectedCities:[...state.infoOfSelectedCities,action.payload], isTakenPositionFromApi:true}
        case 'GET_WEATHER_FORECAST':
            return {...state, allWeatherForecasts:[...state.allWeatherForecasts, action.payload]}
        case 'GET_COUNTRY':
            return {...state, selectedCountry:action.payload}
        case 'GET_CITY':
            return {...state, selectedCity:action.payload}
        case 'ADD_CITY':
            return {...state, selectedCities:[...state.selectedCities, action.payload]}
        case 'GET_REMOVED_CITY_ID':
            return {...state, removedCityId:action.payload}
        case 'GET_REMOVED_CITY_NAME':
            return {...state, removedCityName:action.payload}
        case 'DELETE_REMOVED_CITY_DATA':
            return {...state,
                    data:action.payload, 
                    isSituationDeletingCity:true,
                    allWeatherForecasts:state.allWeatherForecasts.filter(item => item.id !== state.data[0]),
                    selectedCities:state.selectedCities.filter(city => city!==state.data[1]),
                    infoOfSelectedCities:state.infoOfSelectedCities.splice(state.data[2],1)
                }
        case 'SET_IS_DELETING_CITY':
            return {...state, isSituationDeletingCity:false}
        default:
            return state
    }
}