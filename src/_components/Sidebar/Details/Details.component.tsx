import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Time } from '../Time/Time.component'
import Weather from '../Weather/Weather.component'

export function Details() {
    return (
        <div className="font-text text-[.9375rem] leading-[140%] md:text-[1.0625rem]">
            <div className="flex gap-3">
                <Time />
                <span>7° 6′ 55″, 34° 51′ 40″</span>
                <Weather />
            </div>

            <span>
                <span className="capitalize">
                    {format(new Date(), "EEEE',' dd 'de' MMMM", {
                        locale: ptBR,
                    })}
                </span>
                <span>, João Pessoa, Paraíba</span>
            </span>
        </div>
    )
}
