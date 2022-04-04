const initialState = {
    show: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'loader_show':
            return {
                show: true,
            }
        case 'loader_hide': {
            return initialState;
        }
        default: return state;
            
    }
}

export default reducer;