import { getIconName } from "../utils";

export default function Forecast7Days({ weather }: { weather: any }) {
  return (
    <div className="forecast">
      <table>
        <tbody>
          <tr>
            {weather.daily.data.map((day: any) => (
              <td key={day.time}>
                <p>{new Date(day.time * 1000).toDateString()}</p>
                <hr />
                <p>
                  {day.temperatureHigh}°F / {day.temperatureLow}°F
                </p>
                <img
                  src={getIconName(day.icon, "/icons/")}
                  alt={day.icon}
                  width={16}
                  height={16}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
