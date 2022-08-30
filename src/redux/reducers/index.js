const INITIAL_STATE = {
    isToggle: false,
    isShow:false
}

export const reducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'TOGGLE':
            return{...state, isToggle:!state.isToggle}
        case 'SHOW_SIDEBAR':
            return{...state, isShow:!state.isShow}
        default:
            return state
    }
}