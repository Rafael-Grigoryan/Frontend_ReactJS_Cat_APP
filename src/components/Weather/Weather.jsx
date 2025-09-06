import { useState, useEffect } from "react";
import { Card } from "./Card";

export function Weather() {
  const [weatherData, setWeatherData] = useState([]);
  const [selectCity, setSelectCity] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("weather.json");
      const data = await res.json();
      setWeatherData(data);
      console.log(data);
    }

    fetchData();
  }, []);
  return (
    <>
      <div>
        <select
          value={selectCity}
          onChange={(evt) => setSelectCity(evt.target.value)}
        >
          {weatherData.map((el) => {
            return (
            
              <option key={el.city} value={el.city}>
                {el.city}
              </option>
            );
          })}
        </select>
      </div>

      {weatherData.length > 0 &&
        weatherData
          .filter((elem) => elem.city === selectCity)
          .map((elem) => (
            <Card data={elem}/>
          ))}
    </>
  );
}
