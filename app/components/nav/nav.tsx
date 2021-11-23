import {motion, useMotionValue} from 'framer-motion'
import React from 'react'
import {Theme, useTheme} from '~/utils/theme-provider'
import DropDown from './dropdown'

const variants = {
  light: {x: 0},
  dark: {x: 20},
}

function Nav() {
  const [theme, setTheme] = useTheme()
  const x = useMotionValue(theme === 'dark' ? 20 : 0)

  React.useEffect(() => {
    if (typeof window === 'undefined') return
    x.set(theme === 'dark' ? 20 : 0)
  }, [theme])

  return (
    <nav>
      <button
        className="flex m-4 w-14 h-9 bg-mm-100 border-4 border-mm-300 rounded-3xl drop-shadow-sm"
        onClick={() => {
          setTheme(previousTheme =>
            previousTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK,
          )
        }}
      >
        <motion.div
          className={'w-6 h-6 bg-mm-100 rounded-full shadow-sm '}
          style={{x, rotate: 180, margin: '0.12rem'}}
          transition={{duration: 0.5}}
          animate={theme !== null && theme}
          variants={variants}
        />
      </button>

      <DropDown />
    </nav>
  )
}

export default Nav
