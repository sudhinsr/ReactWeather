var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        THis is a weather application build on react. I have built this
         for THe Complete React Web App Developer Course
       </p>
       <p>
         Here are some of the tools I used:
       </p>
       <ul>
         <li>
           <a href="https://facebook.github.io/react">React</a> - This was the
             JavaScript framework used.
         </li>
         <li>
           <a href="https://openweathermap.org">Open Weather Map</a> - I used
             OPen Weather Map to search for weather data by city name.
         </li>
       </ul>
    </div>
  );
};

module.exports = About;
