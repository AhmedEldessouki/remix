import {motion, useMotionValue} from 'framer-motion'
import React from 'react'
import DropDown from './dropdown'

const variants = {
  light: {x: 0},
  dark: {x: 20},
}

function Nav() {
  let theme: string = 'dark'
  const x = useMotionValue(theme === 'dark' ? 20 : 0)

  React.useEffect(() => {
    //  theme = window.matchMedia('prefers-color-scheme')
    if (typeof window === 'undefined') return
    x.set(theme === 'dark' ? 20 : 0)
  }, [theme, x])

  return (
    <nav className="gap-2.5 items-center px-2.5 w-full min-h-sm">
      <div className="prose">
        <h1 className="prose xxx-fa-safmb text-left">Ahmed Eldessouki</h1>
      </div>
      <button
        className="mx-auto w-14 h-9 bg-trans border-4 border-blueGray-600 rounded-3xl drop-shadow-sm"
        onClick={() => {
          // setTheme(previousTheme =>
          //   previousTheme == 'DARK' ? 'LIGHT' : 'DARK',
          // )
        }}
      >
        <motion.div
          className="w-6 h-6 bg-blueGray-600 rounded-full shadow-sm"
          style={{x, rotate: 180, margin: '0.12rem'}}
          transition={{duration: 0.5}}
          animate={theme !== '' && theme}
          variants={variants}
          aria-label={`Theme Switch from ${
            theme == 'DARK' ? 'Dark' : 'Light'
          } to ${theme == 'LIGHT' ? 'Light' : 'Dark'}`}
        />
      </button>
      <DropDown />
    </nav>
  )
}

export default Nav
