import cookie from "js-cookie";

export const loginUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: 'login',
            payload: user
        });
    }
}

export const logoutUser = () => {
    cookie.remove('auth');
    return (dispatch) => {
        dispatch({
            type: 'logout',
            payload: null
        });
    }
}

export const showAlert = (alert) => {
    return (dispatch) => {
        dispatch({
            type: 'alert_show',
            payload: alert
        });
    }
}

export const closeAlert = () => {
    return (dispatch) => {
        dispatch({
            type: 'alert_close',
            payload: null
        });
    }
}

export const showLoader = () => {
    return (dispatch) => {
        dispatch({
            type: 'loader_show',
            payload: null
        });
    }
}

export const hideLoader = () => {
    return (dispatch) => {
        dispatch({
            type: 'loader_hide',
            payload: null
        });
    }
}