import { useState } from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Card from './components/Card';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const APIKey = '6a4ce2c1a5f3b6720fde60a7c83736f5';

  const [weatherData, setWeatherData] = useState();
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const searchHandler = async (enteredData) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${enteredData},&APPID=${APIKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setHasError(true);
        setErrorMsg('Location not found, Please enter valid location');
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      setHasError(false);
      setWeatherData(data);
    } catch (err) {
      setHasError(true);
      setErrorMsg('Location not found, Please enter valid location');
    }
  };

  return (
    <>
      <Header />
      <SearchInput onSearch={searchHandler} />
      {hasError ? (
        <ErrorMessage>{errorMsg}</ErrorMessage>
      ) : (
        <Card weatherData={weatherData} />
      )}
    </>
  );
}

export default App;
