const request = require('request');

let getForecast = (lat, lng, call) => {
    request({
        url: `https://api.darksky.net/forecast/7805815ef92decfc3516d8957ed4d69b/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            call("Cannot get weather.");
        }else{
            call(undefined, body.currently.summary);
        }
    });
}

module.exports.getForecast = getForecast;