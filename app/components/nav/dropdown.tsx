import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {motion} from 'framer-motion'
import React from 'react'
import clsx from 'clsx'

function Item({children}: {children: string}) {
  return (
    <DropdownMenu.Item className="dark:focus-within:bg-sky-700 px-2 py-1.5 focus-within:bg-mm-300 rounded">
      {children}
    </DropdownMenu.Item>
  )
}

const turnLeft = {
  open: {
    marginBottom: '7px',
    marginTop: '10px',
    rotate: 45,
  },
  close: {
    backgroundColor: 'var(--mm-100)',
    rotate: 0,
  },
}
const turnRight = {
  open: {
    marginTop: '-11px',
    rotate: -45,
  },
  close: {
    backgroundColor: 'var(--mm-100)',
    rotate: 0,
  },
}
const fade = {
  open: {
    opacity: 0,
  },
  close: {
    opacity: 1,
  },
}

export default function DropDown() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <DropdownMenu.Root onOpenChange={() => setIsOpen(state => !state)}>
      <DropdownMenu.Trigger className="mx-auto px-3 py-1.5 border-4 border-blueGray-600 border-opacity-100 rounded-lg shadow-inner">
        <motion.div
          className={clsx('mb-1 w-5 h-1 rounded-sm', {
            'bg-red-400': isOpen,
            'bg-blueGray-600': !isOpen,
          })}
          animate={isOpen ? 'open' : 'closed'}
          variants={turnLeft}
        ></motion.div>
        <motion.div
          className={clsx('mb-1 w-5 h-1 rounded-sm', {
            'bg-red-400': isOpen,
            'bg-blueGray-600': !isOpen,
          })}
          animate={isOpen ? 'open' : 'closed'}
          variants={turnRight}
        ></motion.div>
        <motion.div
          className="w-5 h-1 bg-blueGray-600 rounded-sm"
          animate={isOpen ? 'open' : 'closed'}
          variants={fade}
        ></motion.div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="flex flex-col gap-2 items-center justify-center p-4 text-my-100 bg-mm-100 rounded">
        <Item>Some Value</Item>
        <Item>Some Value</Item>
        <Item>Some Value</Item>
        <DropdownMenu.Arrow className="text-center" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
