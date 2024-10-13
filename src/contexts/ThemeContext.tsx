'use client'

import { createContext, ReactNode, useEffect, useState } from 'react'

interface IThemeContext {
    theme: string
    handleSetTheme(): void
}

export const ThemeContext = createContext({} as IThemeContext)

function getFromLocalStorage() {
    if (typeof window !== 'undefined') {
        const value = localStorage.getItem('theme')

        if (!value) {
            const preferredTheme = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches

            return preferredTheme ? 'dark' : 'light'
        }

        return value || 'light'
    }
}

export function ThemeContextProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage()
    })

    function handleSetTheme() {
        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
        localStorage.setItem('theme', theme!)
        document.documentElement.classList.toggle('dark')
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        }

        localStorage.setItem('theme', theme!)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme: theme!, handleSetTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
