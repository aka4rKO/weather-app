const request = require('request');

//Normal callback
let geocodeAddress = (address, call) => {
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=zBieWrjVUdAsMqtQfU7b0p814jcXWYnW&location=${encodeURIComponent(address)}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            call("Error in the machine.");
        }else if(body.info.statuscode == 400) {
            call("Invalid address.");
        }else{
            call(undefined, {
                longitude: body.results[0].locations[0].latLng.lng,
                latitude: body.results[0].locations[0].latLng.lat
            });
        }
        
    });
}

//Promise
let geocodeAddressPromise = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=zBieWrjVUdAsMqtQfU7b0p814jcXWYnW&location=${encodeURIComponent(address)}`,
            json: true
        }, (error, response, body) => {
            if(error) {
                reject("Error in the machine.");
            }else if(body.info.statuscode == 400) {
                reject("Invalid address.");
            }else{
                resolve({
                    longitude: body.results[0].locations[0].latLng.lng,
                    latitude: body.results[0].locations[0].latLng.lat
                });
            }
            
        });
    });
}

module.exports.geocodeAddress = geocodeAddress;
module.exports.geocodeAddressPromise = geocodeAddressPromise;