import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {motion} from 'framer-motion'
import React from 'react'

const turnLeft = {
  open: {
    marginBottom: '7px',
    marginTop: '10px',
    rotate: 45,
    backgroundColor: 'rgba(255,90,90,0.45)',
  },
  close: {
    backgroundColor: 'none',
    rotate: 0,
  },
}
const turnRight = {
  open: {
    marginTop: '-11px',
    rotate: -45,
    backgroundColor: 'rgba(255,90,90,0.45)',
  },
  close: {
    backgroundColor: 'none',
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
      <DropdownMenu.Trigger className="mx-4 p-3 py-1 border-4 border-blueGray-600 border-opacity-30 rounded-lg shadow-inner">
        <motion.div
          className="mb-1 w-5 h-1 bg-mm-100 rounded-sm"
          animate={isOpen ? 'open' : 'closed'}
          variants={turnLeft}
        ></motion.div>
        <motion.div
          className="mb-1 w-5 h-1 bg-mm-100 rounded-sm"
          animate={isOpen ? 'open' : 'closed'}
          variants={turnRight}
        ></motion.div>
        <motion.div
          className="w-5 h-1 bg-mm-100 rounded-sm"
          animate={isOpen ? 'open' : 'closed'}
          variants={fade}
        ></motion.div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="text-gray-100 bg-gray-900 flex flex-col gap-2 items-center justify-center p-4">
        <DropdownMenu.Item className="">Some Value</DropdownMenu.Item>
        <DropdownMenu.Item className="">Some Value</DropdownMenu.Item>
        <DropdownMenu.Item className="">Some Value</DropdownMenu.Item>
        <DropdownMenu.Arrow className="text-center" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
