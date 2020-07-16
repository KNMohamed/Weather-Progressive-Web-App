import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_WEATHER_KEY = "088131a200f7335f09caccc9200f74e6"

export const fetchWeather = async(query) => {
  const { data } = await axios.get(URL, {
    params : {
      q : query,
      units: 'metric',
      APPID: API_WEATHER_KEY
    }
  });

  return data;
}