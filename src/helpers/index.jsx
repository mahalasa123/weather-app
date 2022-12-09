const CELSIUS_VAL = 273.15;

export const convertTimeStamp = (time) => {
  let date = new Date(time * 1000);
  return date.toLocaleTimeString('default');
};

export const convertToCelsius = (temperature) => {
  return temperature - CELSIUS_VAL;
};
