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
    cityId:1,
    data:[],
    isSituationDeletingCity:false,
    viewedCityName:'',
    weatherData:[],
    positionData:[],
    selectedCitiesData:[],
    isCameBackHomePage:false,
    isShowMessageRemoved:false
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

        case 'GET_COUNTRY':
            return {...state, selectedCountry:action.payload}

        case 'GET_CITY':
            return {...state, selectedCity:action.payload}

        case 'ADD_CITY':
            return {...state, selectedCities:[...state.selectedCities, action.payload], isCameBackHomePage:false}

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
            
        case 'GET_VIEWED_CITY_NAME':
            return {...state, viewedCityName:action.payload}
        case 'GET_DATA_FROM_LOCAL_STORAGE':
            return {...state, 
                    weatherData:JSON.parse(localStorage.getItem('weatherData')),
                    positionData:JSON.parse(localStorage.getItem('positionData')),
                    selectedCitiesData:JSON.parse(localStorage.getItem('selectedCities'))
            }
        case 'COME_BACK_HOMEPAGE':
            return {...state, isCameBackHomePage:true}
        case 'SET_IS_SHOW_MESSAGE_REMOVED':
            return {...state, isShowMessageRemoved:false}
        default:
            return state
    }
}