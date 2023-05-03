import React from 'react'

interface ItemsDropdown {
  value: string
  label: string
}
interface propsDropdownCustom
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  items: ItemsDropdown[]
}
export default function DropdownCustom({
  items,
  ...rest
}: propsDropdownCustom) {
  return (
    <>
      <select
        className="block px-5 py-3 text-sm bg-white border rounded-full"
        {...rest}
      >
        {items.map((element, index) => (
          <option selected={index === 0} value={element.value} key={index}>
            {element.label}
          </option>
        ))}
      </select>
    </>
  )
}
