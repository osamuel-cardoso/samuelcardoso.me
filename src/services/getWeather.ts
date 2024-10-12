import { WeatherResponse } from '@/@types/weather'

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=Santa Rita, Paraíba&appid=2c9cb9dd5a93cb5c989980c52a4ecfec`

export async function getWeather() {
    const response = await fetch(WEATHER_URL)
    const data: WeatherResponse = await response.json()

    return data
}
