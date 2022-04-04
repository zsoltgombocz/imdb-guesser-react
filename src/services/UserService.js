const API = require('../services/API');
const cookies = require('js-cookie');

const checkCookie = () => {
    return cookies.get('auth') !== null && cookies.get('auth') !== undefined && cookies.get('auth') !== '';
}

exports.recoverUser = async () => {
    if(checkCookie()) {
        try {
            let response = await API.POST('user/checktoken');
            console.log(response.data.username);
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
        API.POST('user/checktoken')
        .then(() => {
            return true;
        })
        .catch(() => {
            return false
        });
    }else return false;
}