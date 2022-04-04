const axios = require('axios');
const cookies = require('js-cookie');
const api_url = process.env.APP_URL || 'http://localhost:4444/';

axios.defaults.headers.common['authorization'] = 'Bearer ' + (cookies.get('auth') || '');

const GET = async (url, payload=null) => {
    return await axios.get(api_url + url, payload=null);
}

const POST = async (url, payload=null) => {
    return await axios.post(api_url + url, payload);
}

module.exports = {
    GET,
    POST
}