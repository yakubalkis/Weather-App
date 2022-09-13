const INITIAL_STATE = {
    isToggle: false,
    isShowSidebarAddCity:false,
    isShowSidebarDeleteCity:false,
    countries:[],
    selectedCountry:'',
    selectedCity:'',
    selectedCities:['Berlin'],
    infoOfSelectedCities:[],
    allWeatherForecasts:[],
    isTakenPositionFromApi:false,
    data:[],
    isSituationDeletingCity:false,
    isSituationRemovingBrokenData:false,
    viewedCityName:'',
    viewedCountryName:'',
    viewedCityId:1,
    isCameBackHomePage:false,
    isShowMessageRemoved:false,
    weeklyWeatherForecast:[],
    isTakenWeeklyWeatherForecast:false,
    currentWeatherOfDay:{},
    isShowPopup:false
}

export const reducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'TOGGLE':
            return {...state, isToggle:!state.isToggle}

        case 'SHOW_SIDEBAR_ADD_CITY':
            return {...state, isShowSidebarAddCity:true}

        case 'HIDE_SIDEBAR_ADD_CITY':
            return {...state, isShowSidebarAddCity:false}

        case 'SHOW_SIDEBAR_DELETE_CITY':
            return {...state, isShowSidebarDeleteCity:true}

        case 'HIDE_SIDEBAR_DELETE_CITY':
            return {...state, isShowSidebarDeleteCity:false}

        case 'GET_COUNTRIES_SUCCESS':
            return {...state, countries:action.payload}

        case 'GET_POSITION_OF_CITY':
            return {...state, infoOfSelectedCities:[...state.infoOfSelectedCities,action.payload], isTakenPositionFromApi:true}
        case 'SET_IS_TAKEN_POSITION_FROM_API':
            return {...state, isTakenPositionFromApi:false}
        case 'GET_WEATHER_FORECAST':
            return {...state, allWeatherForecasts:[...state.allWeatherForecasts, action.payload]}
        case 'REMOVE_BROKEN_DATA':
            return{...state,
                    isSituationRemovingBrokenData:true,
                    selectedCities:state.selectedCities.slice(0,-1),
                    infoOfSelectedCities:state.infoOfSelectedCities.slice(0,-1)
                }
        case 'GET_COUNTRY':
            return {...state, selectedCountry:action.payload}

        case 'GET_CITY':
            return {...state, selectedCity:action.payload}

        case 'ADD_CITY':
            return {...state, selectedCities:[...state.selectedCities, action.payload], isCameBackHomePage:false, isSituationRemovingBrokenData:false}

        case 'GET_REMOVED_CITY_DATA':
            return {...state, data:action.payload}

        case 'REMOVE_CITY':
            return {...state,
                    isCameBackHomePage:false,
                    isSituationDeletingCity:true,
                    allWeatherForecasts:state.allWeatherForecasts.filter(item => item.id !== state.data[0]),
                    selectedCities:state.selectedCities.filter(city => city!==state.data[1]),
                    infoOfSelectedCities:state.infoOfSelectedCities.filter((item,i ) => i !== state.data[2]),
                    isShowMessageRemoved:true
            }
        case 'SET_IS_DELETING_CITY':
            return {...state, isSituationDeletingCity:false}
            
        case 'GET_VIEWED_CITY_AND_COUNTRY_NAME':
            return {...state, viewedCityName:action.payload[0],viewedCountryName:action.payload[1],viewedCityId:action.payload[2]}
     
        case 'COME_BACK_HOMEPAGE':
            return {...state, isCameBackHomePage:true}
        case 'SET_IS_SHOW_MESSAGE_REMOVED':
            return {...state, isShowMessageRemoved:false}
        case 'GET_WEEKLY_WEATHER_FORECAST_START':
            return {...state, isTakenWeeklyWeatherForecast:false}
        case 'GET_WEEKLY_WEATHER_FORECAST':
            return {...state, weeklyWeatherForecast: action.payload,isTakenWeeklyWeatherForecast:true }
        case 'GET_CURRENT_WEATHER_OF_DAY':
            return {...state, currentWeatherOfDay:action.payload}
        case 'SHOW_POPUP':
            return {...state, isShowPopup:true}
        case 'HIDE_POPUP':
            return {...state, isShowPopup:false}
        default:
            return state
    }
}