import React, { useContext } from "react"
import { CircularProgress } from '@material-ui/core';
import { ThemeContext } from '../context/ThemeContext'
import "./layout.css"


const Layout = ({ children, progress }) => {

  const { isBoxed } = useContext(ThemeContext)

  return (
    <div class={isBoxed ? 'boxed' : 'layout'}>
      {children}
      {progress &&
        <footer>
          <CircularProgress value={progress} variant='static' color='secondary'/>
        </footer>
      }
    </div>
  )
}

export default Layout