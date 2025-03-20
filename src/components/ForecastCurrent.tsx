import { getIconName } from "../utils";

export default function ForecastCurrent({ weather }: { weather: any }) {
  return (
    <div className="current">
      <p>Temperature: {weather.currently.temperature}°C</p>
      <p>Condition: {weather.currently.summary}</p>
      <p>Wind Speed: {weather.currently.windSpeed} km/h</p>
      <p>Humidity: {weather.currently.humidity}%</p>
      <img
        src={getIconName(weather.currently.icon, "/icons/")}
        alt={weather.currently.icon}
        width={32}
        height={32}
      />
    </div>
  );
}
