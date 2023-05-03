import React, { ChangeEventHandler } from 'react'
import CustomInput from '../../../../components/Input'
import DropdownCustom from '../../../../components/Dropdown'
import { ItemsDropdown } from './utils/itemsDropdown'
import ButtonCustom from '../../../../components/Button'

interface PropsFilter {
  onChangeDescription: ChangeEventHandler<HTMLSelectElement>
  setDateEnd: React.Dispatch<React.SetStateAction<string>>
  setDateStart: React.Dispatch<React.SetStateAction<string>>
  onClickButtonClear: React.MouseEventHandler<HTMLButtonElement>
  valueDateInitial: string
  valueDateEnd: string
  valueDescription: string
  pageWithDetailsCost: boolean
}
export default function Filters({
  onChangeDescription,
  setDateEnd,
  setDateStart,
  onClickButtonClear,
  valueDateInitial,
  valueDateEnd,
  valueDescription,
  pageWithDetailsCost,
}: PropsFilter) {
  return (
    <section className=" my-10">
      <div className="container px-4 mx-auto">
        <div className="inline-block">
          <label className="block text-sm font-medium mb-2 ml-3">De:</label>
          <CustomInput
            value={valueDateInitial}
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
            value={valueDateEnd}
            placeholder="dd/mm/aaaa"
            mask="99/99/9999"
            onChange={(v) => {
              setDateStart(v.target.value)
            }}
          />
        </div>
        {pageWithDetailsCost && (
          <div className="inline-block ml-4">
            <label className="block text-sm font-medium mb-2 ml-3">
              Descrição
            </label>
            <DropdownCustom
              value={valueDescription}
              items={ItemsDropdown}
              onChange={onChangeDescription}
            />
          </div>
        )}
        <div className="inline-block mb-6 ml-3">
          <ButtonCustom label="Limpar" onClick={onClickButtonClear} />
        </div>
      </div>
    </section>
  )
}
