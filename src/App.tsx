import { useState } from "react";
import axios from "axios";
import "./App.css";
import CitySearch from "./components/CitySearch";
import ForecastCurrent from "./components/ForecastCurrent";
import Forecast7Days from "./components/Forecast7Days";

const WEATHER_API_KEY = "gH9MnPxi72TolKeaAv0DxZhWVmzRqSV7";

export default function App() {
  const [weather, setWeather] = useState<any>(null);
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

  const fetchWeather = async (coordinates: { lat: number; lon: number }) => {
    setLoading(true);
    setError("");

    try {
      if (!coordinates.lat || !coordinates.lon) {
        setWeather(null);
        return;
      }

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
