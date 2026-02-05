"use client"

import { createContext, useContext, useState, useCallback } from "react"

const ThemeContext = createContext({
  isStealth: false,
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [isStealth, setIsStealth] = useState(false)

  const toggleTheme = useCallback(() => {
    setIsStealth((prev) => !prev)
  }, [])

  return (
    <ThemeContext.Provider value={{ isStealth, toggleTheme }}>
      <div className={isStealth ? "stealth" : ""}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
