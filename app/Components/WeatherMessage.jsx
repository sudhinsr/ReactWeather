var React = require('react');

var WeatherMessage = ({ location,temp }) => {
  return(
    <div>
      <h3>It's {temp} in {location}</h3>
    </div>
  );
}

module.exports = WeatherMessage;
