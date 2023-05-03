import React, { ChangeEventHandler } from 'react'
import CustomInput from '../../../../components/Input'
import DropdownCustom from '../../../../components/Dropdown'
import { ItemsDropdown } from './utils/itemsDropdown'

interface PropsFilter {
  onChangeDescription: ChangeEventHandler<HTMLSelectElement>
  setDateEnd: React.Dispatch<React.SetStateAction<string>>
  setDateStart: React.Dispatch<React.SetStateAction<string>>
}
export default function Filters({
  onChangeDescription,
  setDateEnd,
  setDateStart,
}: PropsFilter) {
  return (
    <section className=" my-10">
      <div className="container px-4 mx-auto">
        <div className="inline-block">
          <label className="block text-sm font-medium mb-2 ml-3">De:</label>
          <CustomInput
            placeholder="dd/mm/aaaa"
            mask="99/99/9999"
            onChange={(v) => {
              setDateEnd(v.target.value)
            }}
          />
        </div>

        <div className="inline-block ml-4">
          <label className="block text-sm font-medium mb-2 ml-3">Até:</label>
          <CustomInput
            placeholder="dd/mm/aaaa"
            mask="99/99/9999"
            onChange={(v) => {
              setDateStart(v.target.value)
            }}
          />
        </div>
        <div className="inline-block ml-4">
          <label className="block text-sm font-medium mb-2 ml-3">
            Descrição
          </label>
          <DropdownCustom
            items={ItemsDropdown}
            onChange={onChangeDescription}
          />
        </div>
      </div>
    </section>
  )
}
