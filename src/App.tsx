import { useState } from "react";
import axios from "axios";
import "./App.css";
import CitySearch from "./components/CitySearch";
import ForecastCurrent from "./components/ForecastCurrent";
import Forecast7Days from "./components/Forecast7Days";

const WEATHER_API_KEY = "gH9MnPxi72TolKeaAv0DxZhWVmzRqSV7";

type Weather = {
  currently: {
    time: number;
    summary: string;
    icon: string;
    precipIntensity: number;
    precipProbability: number;
    precipIntensityError: number;
    precipAccumulation: number;
    precipType: string;
    temperature: number;
    apparentTemperature: number;
    dewPoint: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windGust: number;
    windBearing: number;
    cloudCover: number;
    uvIndex: number;
    visibility: number;
    ozone: number;
  };
  daily: {
    summary: string;
    icon: string;
    data: {
      time: number;
      summary: string;
      icon: string;
      sunriseTime: number;
      sunsetTime: number;
      moonPhase: number;
      precipIntensity: number;
      precipIntensityMax: number;
      precipIntensityMaxTime: number;
      precipProbability: number;
      precipAccumulation: number;
      precipType: string;
      temperatureHigh: number;
      temperatureHighTime: number;
      temperatureLow: number;
      temperatureLowTime: number;
      apparentTemperatureHigh: number;
      apparentTemperatureHighTime: number;
      apparentTemperatureLow: number;
      apparentTemperatureLowTime: number;
      dewPoint: number;
      humidity: number;
      pressure: number;
      windSpeed: number;
      windGust: number;
      windGustTime: number;
      windBearing: number;
      cloudCover: number;
      uvIndex: number;
      uvIndexTime: number;
      visibility: number;
      temperatureMin: number;
      temperatureMinTime: number;
      temperatureMax: number;
      temperatureMaxTime: number;
      apparentTemperatureMin: number;
      apparentTemperatureMinTime: number;
      apparentTemperatureMax: number;
      apparentTemperatureMaxTime: number;
    }[];
  };
};

type Coordinates = {
  lat: number;
  lon: number;
};

export default function App() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");

  const handleCoordinatesChange = (lat: number, lon: number, city: string) => {
    if (!lat || !lon) {
      setWeather(null);
      return;
    }
    setCity(city);
    fetchWeather({ lat, lon });
  };

  const fetchWeather = async (coordinates: Coordinates) => {
    setLoading(true);
    setError("");
    if (!coordinates.lat || !coordinates.lon) {
      setWeather(null);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.pirateweather.net/forecast/${WEATHER_API_KEY}/${coordinates.lat},${coordinates.lon}`
      );
      setWeather(response.data);
    } catch (err) {
      setError("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Weather Dashboard</h1>
      <CitySearch onCoordinatesChange={handleCoordinatesChange} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && (
        <>
          <h2>{city}</h2>
          <h2>Weather Today</h2>
          <ForecastCurrent weather={weather} />
          <h2>7 Days Forecast</h2>
          <Forecast7Days weather={weather} />
        </>
      )}
    </>
  );
}
