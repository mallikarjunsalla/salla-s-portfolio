import { useState, useEffect } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Sync from localStorage or system preference
    const stored = localStorage.getItem('theme')
    if (stored === 'light') {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    } else {
      setIsDark(true)
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev
      if (next) {
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
        localStorage.setItem('theme', 'light')
      }
      return next
    })
  }

  return { isDark, toggleTheme }
}
