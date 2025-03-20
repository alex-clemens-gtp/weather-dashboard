export function getIconName(icon: string, basePath: string) {
  switch (icon) {
    case "clear-day":
      return `${basePath}clear-day.svg`;
    case "clear-night":
      return `${basePath}clear-night.svg`;
    case "rain":
      return `${basePath}rain.svg`;
    case "snow":
      return `${basePath}snow.svg`;
    case "sleet":
      return `${basePath}sleet.svg`;
    case "wind":
      return `${basePath}wind.svg`;
    case "fog":
      return `${basePath}fog.svg`;
    case "cloudy":
      return `${basePath}cloudy.svg`;
    case "partly-cloudy-day":
      return `${basePath}partly-cloudy-day.svg`;
    case "partly-cloudy-night":
      return `${basePath}partly-cloudy-night.svg`;
    default:
      return `${basePath}default.svg`;
  }
}
