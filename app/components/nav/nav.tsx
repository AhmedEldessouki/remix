import {motion, useMotionValue} from 'framer-motion'
import React from 'react'
import {useFetcher} from 'remix'
import {getThemeSession} from '~/sessions'
import {useTheme} from '~/utils/themeProvider'
import type {Theme, HomeLoaderData} from '../../../types'
import DropDown from './dropdown'

const variants = {
  light: {x: 0},
  dark: {x: 20},
}

function Nav() {
  const {theme, setTheme} = useTheme()
  const x = useMotionValue(
    // eslint-disable-next-line no-negated-condition
    !theme ? 10 : theme === 'dark' ? 20 : 0,
  )

  return (
    <nav className="gap-2.5 items-center px-2.5 w-full min-h-sm">
      <div className="prose">
        <h1 className="prose text-left">Ahmed Eldessouki</h1>
      </div>
      <button
        className="mx-auto w-14 h-9 bg-trans border-4 border-blueGray-600 rounded-3xl drop-shadow-sm"
        onClick={() => {
          console.log(theme)
          setTheme(theme === 'light' ? 'dark' : 'light')
          x.set(theme === 'dark' ? 20 : 0)
          console.log(theme)
        }}
      >
        <motion.div
          className="w-6 h-6 bg-blueGray-600 rounded-full shadow-sm"
          style={{x, rotate: 180, margin: '0.12rem'}}
          transition={{duration: 0.5}}
          animate={theme && theme}
          variants={variants}
          aria-label={`Theme Switch from ${
            theme === 'dark' ? 'dark' : 'Light'
          } to ${theme === 'light' ? 'light' : 'dark'}`}
        />
      </button>
      <DropDown />
    </nav>
  )
}

export default Nav
