import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weathInfo, setWeatherInfo] = useState({
    city: "Tansen",
    temp: 20,
    tempMin: 15,
    tempMax: 22,
    humidity: 20,
    feelsLike: 19,
    weather: "clear-sky",
  });

  let funcUpdateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Basic Weather App</h2>
      <SearchBox updateInfo={funcUpdateInfo} />
      <InfoBox weatherInfo={weathInfo} />
    </div>
  );
}
