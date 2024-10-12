import { getWeather } from '@/services/getWeather'

export default async function Weather() {
    const data = await getWeather()
    return <span>{String(data.main?.temp.toFixed()).slice(0, 2)}°</span>
}
