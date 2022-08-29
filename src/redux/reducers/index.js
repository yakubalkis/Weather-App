const INITIAL_STATE = {
    isToggle: false
}

export const reducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'TOGGLE':
            return{...state, isToggle:!state.isToggle}
        default:
            return state
    }
}