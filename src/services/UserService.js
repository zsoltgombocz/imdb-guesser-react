const API = require('../services/API');
const cookies = require('js-cookie');

const checkCookie = () => {
    return cookies.get('auth') !== null && cookies.get('auth') !== undefined && cookies.get('auth') !== '';
}
exports.isCookieSet = () => {
    return checkCookie();
}
exports.recoverUser = async () => {
    if(checkCookie()) {
        try {
            let response = await API.POST('user/checktoken');
            return response.data.username;
        } catch (error) {
            console.log(error)
            return false;
        }
    }else return false;
}

exports.Login = async (username, password) => {
    try {
        let response = await API.POST('user/login', {username, password});
        cookies.set('auth', response.headers?.authorization?.split('Bearer ')[1], { expires: new Date(Date.now() + 12 * 3600000)});
        API.setToken(response.headers?.authorization?.split('Bearer ')[1]);
        let status = response.status;
        let data = response.data;
        return {data, status};
    } catch (error) {
        throw error.response || error;
    }
}

exports.Register = async (username, password) => {
    try {
        let response = await API.POST('user/register', {username, password});
        let status = response.status;
        let data = response.data;
        return {data, status};
    } catch (error) {
        throw error.response || error;
    } 
}

exports.isLoggedIn = async () => {
    if(checkCookie()) {
        try {
           await API.POST('user/checktoken');
           return true;
        } catch (error) {
            return false;
        }
    }else return false;
}

exports.clearCookies = () => {
    return cookies.remove('auth');
}