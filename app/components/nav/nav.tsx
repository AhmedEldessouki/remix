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
    <nav className="min-h-sm gap-2.5 items-center px-2.5 w-full">
      <div className="prose">
        <h1 className="prose-sky text-left">Ahmed Eldessouki</h1>
      </div>
      <button
        className="mx-auto w-14 h-9 bg-trans border-4 border-blueGray-600 rounded-3xl drop-shadow-sm"
        onClick={() => {
          setTheme(previousTheme =>
            previousTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK,
          )
        }}
      >
        <motion.div
          className={'w-6 h-6 bg-blueGray-600 rounded-full shadow-sm '}
          style={{x, rotate: 180, margin: '0.12rem'}}
          transition={{duration: 0.5}}
          animate={theme !== null && theme}
          variants={variants}
          aria-label={`Theme Switch from ${
            theme === Theme.DARK ? 'Dark' : 'Light'
          } to ${theme === Theme.LIGHT ? 'Light' : 'Dark'}`}
        />
      </button>
      <DropDown />
    </nav>
  )
}

export default Nav
