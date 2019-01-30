const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const forecast = require('./forecast/forecast');

const request = require('request');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv.a);

// geocode.geocodeAddress(argv.a, (errMsg, result) => {
//     if(errMsg) {
//         console.log(errMsg);
//     }else{
//         console.log(JSON.stringify(result, undefined, 2));
//         forecast.getForecast(result.latitude, result.longitude, (errMsg, result) => {
//             if(errMsg) {
//                 console.log(errMsg);
//             }else{
//                 console.log(result);
//             }
//         });
//     }
// });

geocode.geocodeAddressPromise(argv.a).then((geocode) => {
    console.log('done');
    console.log(JSON.stringify(geocode, undefined, 2));
    forecast.getForecast(geocode.latitude, geocode.longitude, (errMsg, result) => {
        if(errMsg) {
            console.log(errMsg);
        }else{
            console.log(result);
        }
    });
}, (err) => {
    console.log(err);
});



