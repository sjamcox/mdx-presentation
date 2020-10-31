import React, { useState } from 'react'

const ThemeContext = React.createContext(null)

const ThemeContextProvider = ({ children }) => {

  const [ isBoxed, setIsBoxed ] = useState(false)

  const toggleBoxed = () => {
    setIsBoxed(!isBoxed)
  }

  return (
      <ThemeContext.Provider value={{isBoxed, toggleBoxed}}>
          {children}
      </ThemeContext.Provider>
  )
}

export {ThemeContextProvider, ThemeContext}