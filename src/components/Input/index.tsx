/* eslint-disable no-undef */
import React from 'react'
import InputMask, { Props } from 'react-input-mask'

export default function CustomInput({ value, onChange, ...rest }: Props) {
  return (
    <InputMask
      className="block px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded-full"
      value={value}
      onChange={onChange}
      {...rest}
    />
  )
}
