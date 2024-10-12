import Image from 'next/image'

import profileImage from '@/images/profile.png'

export function Header() {
    return (
        <header className="flex justify-between md:items-center">
            <div className="flex items-center gap-4">
                <Image
                    src={profileImage}
                    quality={100}
                    alt="Foto de Samuel Cardoso"
                />

                <div>
                    <h3 className="text-[.9375rem] font-medium leading-none">
                        Samuel Cardoso
                    </h3>
                    <span className="text-[.8125rem] leading-none text-neutral-400">
                        Product Designer
                    </span>
                </div>
            </div>

            <div className="hidden items-center gap-2 md:flex">
                <span className="text-[.8125rem] leading-none text-neutral-400">
                    Disponível para projetos
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="none"
                    viewBox="0 0 12 12"
                >
                    <rect
                        width="12"
                        height="12"
                        fill="#28C840"
                        fillOpacity="0.4"
                        rx="6"
                    ></rect>
                    <circle cx="6" cy="6" r="3" fill="#28C840"></circle>
                </svg>
            </div>
        </header>
    )
}
