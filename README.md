# Weather App Test Task

1. Fetch Weather Data:
- Use the PirateWeather API (https://api.pirateweather.net) to fetch weather data based on user latitude and longitude.
- Use geo ip to fetch coordinates.
- Display current weather:
  - Temperature (°C).
  - Weather summary (e.g. Overcast, Clear, Rainy).
  - Wind Speed.
  - Humidity.
  - Icon.
- Display 7 day forecast.
  - Min temperature.
  - Max temperature.
  - Icon.
2. React Implementation:
- Use React and TypeScript.
- Use components
- Implement useState and useEffect for managing data fetching.
- Use Axios for API calls.
- Show a loading indicator while fetching data.
- Handle errors gracefully.
3. UI Requirements:
- Use UI library of your liking
- Show the fetched weather information in a card layout.
- Display an error message if the API call fails.
4. Bonus Challenges:
- Implement local storage caching to avoid unnecessary API calls.
- Allow users to toggle between Celsius and Fahrenheit.
