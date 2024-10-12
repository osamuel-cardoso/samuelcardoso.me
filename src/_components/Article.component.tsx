import Image, { StaticImageData } from 'next/image'

export function Article({ src }: { src: StaticImageData | string }) {
    return (
        <article className="flex w-full flex-col gap-4">
            <div className="flex-x items-start gap-3">
                <span className="rounded-full bg-neutral-1000 px-[.5625rem] py-1 pt-[.375rem] font-display text-[.8125rem] font-medium leading-none text-neutral-25 transition hover:bg-neutral-1000 hover:text-neutral-25 dark:bg-neutral-25 dark:text-neutral-1000">
                    2024
                </span>

                <div className="h-[21rem] w-full overflow-hidden rounded-[.5625rem]">
                    <Image
                        src={src}
                        className="h-full w-full bg-neutral-975 object-cover"
                        alt="Imagem do projeto."
                        placeholder="blur"
                        quality={100}
                    />
                </div>
            </div>
            <div className="flex-x items-start">
                <h3 className="font-display text-[.9375rem] font-medium">
                    Lorem ipsum dolor sit
                </h3>
                <p className="rounded-full text-[.9375rem] leading-tight text-neutral-400">
                    Bringing hyperscaler agility to the mainstream enterprise.
                </p>
            </div>
        </article>
    )
}
