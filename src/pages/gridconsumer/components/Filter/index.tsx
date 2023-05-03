import React from 'react'
import CustomInput from '../../../../components/Input'
import ButtonCustom from '../../../../components/Button'

interface propsFilterGridConsumer {
  onChangeDateInitial: React.ChangeEventHandler<HTMLInputElement>
  onChangeDateEnd: React.ChangeEventHandler<HTMLInputElement>
  onClickButtonClear: React.MouseEventHandler<HTMLButtonElement>
  valueDateInitial: string
  valueDateEnd: string
}

export default function FilterGridConsumer({
  onChangeDateEnd,
  onChangeDateInitial,
  onClickButtonClear,
  valueDateInitial,
  valueDateEnd,
}: propsFilterGridConsumer) {
  return (
    <div>
      <div className="inline-block mb-6">
        <label className="block text-sm font-medium mb-2 ml-4">De:</label>
        <CustomInput
          value={valueDateInitial}
          mask="99/99/9999"
          placeholder="dd/mm/aaaa"
          onChange={onChangeDateInitial}
        />
      </div>

      <div className="inline-block mb-6 ml-3">
        <label className="block text-sm font-medium mb-2 ml-4">Até:</label>
        <CustomInput
          value={valueDateEnd}
          mask="99/99/9999"
          placeholder="dd/mm/aaaa"
          onChange={onChangeDateEnd}
        />
      </div>
      <div className="inline-block mb-6 ml-3">
        <ButtonCustom onClick={onClickButtonClear} label="Limpar" />
      </div>
    </div>
  )
}
