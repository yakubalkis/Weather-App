const INITIAL_STATE = {
    isToggle: false,
    isShow:false,
    countries:[],
    selectedCountry:'',
    selectedCity:'',
    selectedCities:['Berlin'],
    infoOfSelectedCity:[]
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
        case 'GET_POSITION_OF_CITY':
            return {...state, infoOfSelectedCity:action.payload}
        case 'GET_COUNTRY':
            return {...state, selectedCountry:action.payload}
        case 'GET_CITY':
            return {...state, selectedCity:action.payload}
        case 'ADD_CITY':
            return{...state, selectedCities:[...state.selectedCities, action.payload]}
        default:
            return state
    }
}