import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const DropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="px-2 py-3 border-2">
        Settings
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="p-2 text-gray-100 bg-gray-900">
        <DropdownMenu.Item className="px-2 py-1">Some Value</DropdownMenu.Item>
        <DropdownMenu.Arrow className="text-gray-900" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default DropDown
