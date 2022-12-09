import PropTypes from 'prop-types';
import { Wrapper, Tile } from './styles';
import { convertTimeStamp, convertToCelsius } from '../../helpers';

const Card = ({ weatherData }) => {
  const weather = weatherData?.weather[0].description;
  const temperature = convertToCelsius(weatherData?.main?.temp);
  const sunriseTime = convertTimeStamp(weatherData?.sys?.sunrise);
  const sunsetTime = convertTimeStamp(weatherData?.sys?.sunset);
  const visibility = weatherData?.visibility;
  const wind = weatherData?.wind?.speed;
  const humidity = weatherData?.main?.humidity;

  return (
    <>
      {weatherData ? (
        <Wrapper>
          <Tile tabIndex="0" role="listitem">
            Current weather : {weather}
          </Tile>
          <Tile tabIndex="0" role="listitem">
            Temperature : {temperature} celsuis
          </Tile>
          <Tile tabIndex="0" role="listitem">
            Sunrise : {sunriseTime}
          </Tile>
          <Tile tabIndex="0" role="listitem">
            Sunset : {sunsetTime}
          </Tile>
          <Tile tabIndex="0" role="listitem">
            Visibility : {visibility}
          </Tile>
          <Tile tabIndex="0" role="listitem">
            Wind : {wind}
          </Tile>
          <Tile tabIndex="0" role="listitem">
            Humidity : {humidity}
          </Tile>
        </Wrapper>
      ) : null}
    </>
  );
};

Card.propTypes = {
  weatherData: PropTypes.object,
};

export default Card;
