'use client'

import { useContext } from 'react'

import { ThemeContext } from '@/contexts/ThemeContext'

export function ThemeToggle() {
    const { handleSetTheme } = useContext(ThemeContext)

    return (
        <button
            onClick={() => {
                handleSetTheme()
            }}
        >
            ThemeToggle
        </button>
    )
}
