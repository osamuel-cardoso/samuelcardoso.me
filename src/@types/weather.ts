export interface WeatherResponse {
    coord: Coordinate
    weather: Weather[]
    base: string
    main: Main
    visibility: number
    dt: number
    timezone: number
    id: number
    name: string
    cod: number
}

interface Coordinate {
    lon: number
    lat: number
}

interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
}
