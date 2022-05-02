const API = require('./API');
const cookies = require('js-cookie');

exports.startGame = async () => {
    //getQuestions
    //clear local
    localStorage.removeItem('game');
    localStorage.removeItem('questions');

    return [];
}