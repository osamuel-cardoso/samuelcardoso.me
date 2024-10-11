import Link from 'next/link'

import { Details } from './Details/Details.component'
import { Header } from './Header/Header.component'

const expertise = [
    {
        place: 'UI/UX em O Cara do Notion',
        time: '2023/2024',
    },
    {
        place: 'Desenvolvedor em Marcados',
        time: '2023/2024',
    },
    {
        place: 'Product Designer em Mathux',
        time: '2024/presente',
    },
]

const skills = [
    'Product designer',
    'Webflow',
    'UI / UX',
    'Javascript',
    'Typescript',
    'React',
    'Next.js',
    'Figma',
    'Notion',
]

const contacts = [
    { name: 'Whatsapp', url: '' },
    { name: 'Github', url: '' },
    { name: 'Instagram', url: '' },
    { name: 'LinkedIn', url: '' },
]

export default function Sidebar() {
    return (
        <aside className="flex h-full flex-col justify-between rounded-[.5625rem] bg-neutral-50 p-4 dark:bg-neutral-975">
            <div className="flex flex-col gap-10">
                <Header />
                <Details />

                <div className="flex flex-col items-start gap-2">
                    <span className="rounded-full bg-neutral-75 px-[.5625rem] py-[.3125rem] font-display text-[.8125rem] font-medium leading-none text-neutral-400 dark:bg-neutral-950 dark:text-neutral-400">
                        Sobre mim
                    </span>
                    <div className="rounded-[.5625rem] bg-neutral-75 p-3 dark:bg-neutral-950">
                        <p className="text-[1.0625rem] text-neutral-900 dark:text-neutral-200">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam vel rhoncus tellus, quis facilisis
                            nunc. Quisque viverra dictum nulla, ut luctus ante
                            posuere aliquam. 
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {skills.map((content, i) => {
                        return (
                            <div
                                className="justify-between rounded-full bg-neutral-75 px-[.5625rem] py-[.4375rem] text-[.9375rem] leading-none text-neutral-500 dark:bg-neutral-950 dark:text-neutral-200"
                                key={i}
                            >
                                <span>{content}</span>
                            </div>
                        )
                    })}
                </div>

                <div className="flex flex-col items-start gap-2">
                    <span className="rounded-full bg-neutral-75 px-[.5625rem] py-[.3125rem] font-display text-[.8125rem] font-medium leading-none text-neutral-400 dark:bg-neutral-950 dark:text-neutral-400">
                        Experiências
                    </span>
                    <div className="flex w-full flex-col gap-2 rounded-[.5625rem] bg-neutral-75 p-3 dark:bg-neutral-950">
                        {expertise.map(({ place, time }, i) => {
                            return (
                                <div className="flex justify-between" key={i}>
                                    <span className="text-[.9375rem] text-neutral-900 dark:text-neutral-200">
                                        {place}
                                    </span>
                                    <span className="text-[.9375rem] text-neutral-400">
                                        {time}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="flex flex-col items-start gap-2">
                    <span className="rounded-full bg-neutral-75 px-[.5625rem] py-[.3125rem] font-display text-[.8125rem] font-medium leading-none text-neutral-400 dark:bg-neutral-950 dark:text-neutral-400">
                        Experiências
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {contacts.map(({ name, url }, i) => {
                            return (
                                <Link
                                    href={url}
                                    className="justify-between rounded-full bg-neutral-75 px-[.5625rem] py-[.4375rem] text-[.9375rem] leading-none text-neutral-500 dark:bg-neutral-950 dark:text-neutral-200"
                                    key={i}
                                >
                                    <span>{name}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>

            <span className="font-text text-[1.0625rem] leading-[140%]">
                Atualmente em João Pessoa, Paraíba. 🇧🇷
            </span>
        </aside>
    )
}
