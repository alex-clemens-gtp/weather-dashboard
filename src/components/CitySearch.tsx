import axios from "axios";
import { useState } from "react";

const MAPS_API_KEY = "66133c6b97c68881283499kcn082424";

export default function CitySearch({
  onCoordinatesChange,
}: {
  onCoordinatesChange: (lat: number, lon: number, city: string) => void;
}) {
  const [city] = useState("");
  const [error, setError] = useState("");

  const fetchCoordinates = async () => {
    setError("");
    try {
      const response = await axios.get(
        `https://geocode.maps.co/search?q=${city}&api_key=${MAPS_API_KEY}`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        onCoordinatesChange(lat, lon, response.data[0].display_name);
      } else {
        setError("City not found.");
      }
    } catch (err) {
      setError("Failed to fetch coordinates.");
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchCoordinates();
    }
  };

  return (
    <div className="city-search">
      <input
        type="text"
        placeholder="Enter city name"
        onKeyUp={handleKeyUp}
      />
      <button onClick={fetchCoordinates}>Get Weather</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
