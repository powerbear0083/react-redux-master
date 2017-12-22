import React from 'react';

class Weather extends React.Component {

  constructor() {
    super (...arguments);
    this.state = {weather: null}
  }

  render() {

    if(!this.state.weather) {
      return <div>無數據</div>
    }

    const {city, weather, temp1, temp2} = this.state.weather;

    return (
      <div>
        {city} {weather} 最低氣溫 {temp1} 最高氣溫 {temp2}
      </div>
    );

  }
}

export default Weather;
