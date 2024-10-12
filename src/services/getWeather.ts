import { WeatherResponse } from '@/@types/weather'

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=Santa Rita, Paraíba&appid=02eb2d0a404434a29b7a821b2fae1589`

export async function getWeather() {
    const response = await fetch(WEATHER_URL, {
        cache: 'no-store',
    })
    const data: WeatherResponse = await response.json()

    return data
}
