import './globals.css'

import type { Metadata } from 'next'

import { ThemeContextProvider } from '@/contexts/ThemeContext'

import { helveticaNowDisplay, helveticaNowText } from './fonts'

export const metadata: Metadata = {
    authors: {
        name: 'Samuel Cardoso',
        url: 'https://www.instagram.com/samuelcardoso.cc/',
    },
    title: 'Samuel Cardoso | Product Designer',
    description:
        'Aprenda a criar aplicativos de alta performance com Next.js. Este guia cobre desde os conceitos básicos até técnicas avançadas de otimização.',

    keywords: [
        'design de produto',
        'UX design',
        'UI design',
        'prototipagem',
        'design centrado no usuário',
        'pesquisa de usuário',
        'ferramentas de design',
        'Adobe XD',
        'Figma',
        'Sketch',
        'design de interação',
        'wireframing',
        'testes de usabilidade',
        'design responsivo',
        'design thinking',
        'estratégia de design',
        'design de interface',
        'experiência do usuário',
        'arquitetura da informação',
        'design de aplicativos',
        'visual design',
        'design de serviços',
        'design gráfico',
        'design de sistemas',
        'design de experiência',
        'design de inovação',
        'Vieses cognitivos',
    ],

    robots: 'index, follow',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ThemeContextProvider>
            <html
                className={`${helveticaNowDisplay.variable} ${helveticaNowText.variable} bg-neutral-25 antialiased dark:bg-neutral-1000 dark:text-neutral-25`}
            >
                <body>{children}</body>
            </html>
        </ThemeContextProvider>
    )
}
