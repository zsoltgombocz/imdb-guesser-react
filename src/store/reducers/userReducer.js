const initialState = {
    username: null,
    loggedIn: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'login':
            return {
                username: action.payload.username,
                loggedIn: true
            }
        case 'logout':
            return initialState;
        default: return state;
    }
}

export default reducer;