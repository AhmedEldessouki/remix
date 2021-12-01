import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {motion} from 'framer-motion'
import React from 'react'
import clsx from 'clsx'
import {Link} from 'remix'
import {useId} from '@radix-ui/react-id'

function Item({children}: {children: React.ReactNode}) {
  return (
    <DropdownMenu.Item className="dark:focus-within:bg-sky-700 focus-within:bg-shadow-300 px-2 py-1.5 rounded">
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
    backgroundColor: 'var(--shadow-100)',
    rotate: 0,
  },
}
const turnRight = {
  open: {
    marginTop: '-11px',
    rotate: -45,
  },
  close: {
    backgroundColor: 'var(--shadow-100)',
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
  const id = useId()
  return (
    <DropdownMenu.Root key={id} onOpenChange={() => setIsOpen(state => !state)}>
      <DropdownMenu.Trigger className="mx-auto px-3 py-1.5 border-4 border-blueGray-600 border-opacity-100 rounded-lg shadow-inner">
        <motion.div
          className={clsx('app-block', {
            'bg-red-400': isOpen,
            'bg-blueGray-600': !isOpen,
          })}
          animate={isOpen ? 'open' : 'closed'}
          variants={turnLeft}
        />
        <motion.div
          className={clsx('app-block', {
            'bg-red-400': isOpen,
            'bg-blueGray-600': !isOpen,
          })}
          animate={isOpen ? 'open' : 'closed'}
          variants={turnRight}
        />
        <motion.div
          className="app-block bg-blueGray-600"
          animate={isOpen ? 'open' : 'closed'}
          variants={fade}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="slide-down-app bg-shadow-100 flex flex-col gap-2 items-center justify-center p-4 text-my-100 rounded">
        <Item>
          {' '}
          <Link to="/users">Users</Link>
        </Item>
        <Item>Some Value</Item>
        <Item>Some Value</Item>
        <DropdownMenu.Arrow />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
