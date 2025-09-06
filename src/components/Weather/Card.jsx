import "./CardStyle.css";

export function Card({ data }) {
  return (
    <>
      <div key={data.city} className="card">
        <h2>{data.city}</h2>
        <div>{data.weather.temperature.current}°C</div>
        <div>{data.weather.condition}</div>
      </div>
    </>
  );
}
