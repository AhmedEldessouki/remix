import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const DropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger> Settings</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Some Value </DropdownMenu.Item>
        <DropdownMenu.Arrow />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default DropDown
