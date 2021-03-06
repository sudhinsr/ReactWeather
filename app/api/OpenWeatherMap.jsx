var axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=daa458e956522b7a796b12ef546fe237&units=metric';
module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function (res) {
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }
      else {
        return res.data;
      }
    }, function (res) {
      throw new Error(res.message);
    });
  }
}
