import { WeatherResponse } from '@/@types/weather'

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=Santa Rita, Paraíba&appid=${process.env.NEXT_WEATHER_SECRET_KEY}`

export async function getWeather() {
    const response = await fetch(WEATHER_URL, {
        cache: 'no-store',
    })
    const data: WeatherResponse = await response.json()

    return data
}
