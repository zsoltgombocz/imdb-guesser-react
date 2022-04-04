const initialState = {
    show: false,
    message: '',
    type: -1
}



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'alert_show':
            return {
                show: true,
                message: action.payload.message,
                type: action.payload.type
            }
        case 'alert_close': {
            return initialState;
        }
        default: return state;
            
    }
}

export default reducer;