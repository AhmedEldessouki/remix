import React from 'react'
import {useFetcher} from 'remix'
import type {Theme} from '../../types'

type Context = {
  theme: Theme | undefined
  setTheme: React.Dispatch<React.SetStateAction<Theme | undefined>>
}

const ThemeContext = React.createContext<Context>({
  theme: undefined,
  setTheme: () => {},
})
ThemeContext.displayName = 'ThemeContext'

const ThemeProvider = ({
  children,
  cachedTheme,
}: {
  children: React.ReactNode
  cachedTheme?: Theme
}) => {
  const [theme, setTheme] = React.useState<Theme | undefined>(cachedTheme)
  const themeRef = React.useRef(theme)

  const fetched = useFetcher()
  const fetchedRef = React.useRef(fetched)

  React.useEffect(() => {
    if (theme !== themeRef.current) {
      themeRef.current = theme
      // fetchedRef.current.submit(
      //   {theme: theme === 'light' ? 'dark' : 'light'},
      //   {action: '/action/theme', method: 'post'},
      // )
    }
  }, [theme])

  React.useEffect(() => {
    if (theme) return
    if (typeof window !== 'undefined') {
      // themeRef.current = res.sessions.theme
      console.log(window.matchMedia('(prefers-color-scheme: dark)'))
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        fetchedRef.current.submit(
          {theme: 'dark'},
          {action: '/action/theme', method: 'post'},
        )
      } else {
        fetchedRef.current.submit(
          {theme: 'light'},
          {action: '/action/theme', method: 'post'},
        )
      }
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const {theme, setTheme} = React.useContext(ThemeContext)
  if (typeof setTheme === 'undefined') {
    throw new Error('[useTheme]: Should Be Used Inside Of ThemeProvider')
  }
  return {theme, setTheme}
}

export default ThemeProvider
export {useTheme}
