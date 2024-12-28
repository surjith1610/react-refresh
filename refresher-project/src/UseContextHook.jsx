import React from 'react'
import Container from './Container'
import { useState, createContext } from 'react'

export const ThemeContext = createContext();

function UseContextHook() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')

  }

  return (
   
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>UseContextHook</p>
    <Container />
    </ThemeContext.Provider>
  )
}

export default UseContextHook