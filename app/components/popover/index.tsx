import React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

function PopOver({
  triggerStr,
  children,
}: {
  triggerStr: string
  children: React.ReactChild
}) {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger>{triggerStr}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content>{children}</PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  )
}

export default PopOver
