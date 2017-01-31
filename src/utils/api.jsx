var Fetch = require('whatwg-fetch');
var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiUrl = '&appid=9deb1490da7395429f58c27e7cf9746c';

module.exports = {
    get: function(place) {
        return fetch(rootUrl + place + apiUrl, {
            headers: {
                // No need for special headers
            }
        })
        .then(function(response) {
            return response.json();
        });
    }
};