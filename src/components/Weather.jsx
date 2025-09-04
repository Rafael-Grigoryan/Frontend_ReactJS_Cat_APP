import { useState, useEffect } from "react"

export function Weather() {
    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/public/weather.json")
            const data = await res.json()
            setWeatherData(data)
            console.log(data)
        }

        fetchData()
    }, [])
    return (
        <>
            <div>
                <select>
                    {weatherData.map((el) => {
                        <option>{el.city}</option>
                    })}
                </select>
            </div>


            {weatherData.length > 0 && weatherData.map((elem) => (
                <div key={elem.city}>
                    <div>{elem.city}</div>
                    <div>{elem.weather.temperature.current}</div>
                    <div>{elem.weather.condition}</div>
                </div>
            ))}
        </>
    )
}
