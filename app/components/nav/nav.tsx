import React from 'react'
import DropDown from './dropdown'

function Nav() {
  return (
    <nav className="gap-2.5 items-center px-2.5 w-full min-h-sm">
      <div className="prose">
        <h1 className="prose text-left">Ahmed Eldessouki</h1>
      </div>
      <DropDown />
    </nav>
  )
}

export default Nav
