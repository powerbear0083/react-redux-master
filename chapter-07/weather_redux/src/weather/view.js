import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as Status from './status.js';

const Weather = ({status, cityName, weather, lowestTemp, highestTemp}) => {
  switch (status) {
    case Status.LOADING: {
      return <div>天氣訊息載入中...</div>
    }
    case Status.SUCCESS: {
      return (
        <div>
          {cityName} {weather} 最低氣溫 {lowestTemp} 最高氣溫 {highestTemp}
        </div>
      )
    }
    case Status.FAILURE: {
      return <div>天氣訊息載入失敗</div>
    }
    default: {
      throw new Error('unexpected status ' + status);
    }
  }
}

Weather.propTypes = {
  status: PropTypes.string.isRequired,
  cityName: PropTypes.string,
  weather: PropTypes.string,
  lowestTemp: PropTypes.string,
  highestTemp: PropTypes.string
}

const mapStateTopProps = (state) => {
  const weatherData = state.weather;

  return {
    status: weatherData.status,
    cityName: weatherData.city,
    weather: weatherData.weather,
    lowestTemp: weatherData.temp1,
    highestTemp: weatherData.temp2
  }

}


export default connect(mapStateTopProps)(Weather);
