const INITIAL_STATE = {
    isToggle: false,
    isShow:false,
    countries:[],
    selectedCountry:'',
    selectedCity:''
}

export const reducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'TOGGLE':
            return {...state, isToggle:!state.isToggle}
        case 'SHOW_SIDEBAR':
            return {...state, isShow:!state.isShow}
        case 'GET_COUNTRIES_SUCCESS':
            return {...state, countries:action.payload}
        case 'GET_COUNTRY':
            return {...state, selectedCountry:action.payload}
        case 'GET_CITY':
            return {...state, selectedCity:action.payload}
        default:
            return state
    }
}