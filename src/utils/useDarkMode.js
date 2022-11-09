import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.theme || 'dark')
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    if (localStorage.theme === 'undefined') {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)

    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  return [theme, setTheme]
}

export default useDarkMode
