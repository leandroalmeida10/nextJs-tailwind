import React from 'react'
import { THeadTableprops } from '../../../types/tableTypes'

export default function ThHeadTable({ children }: THeadTableprops) {
  return (
    <th className="pb-3 font-medium text-left" contentEditable="false">
      {children}
    </th>
  )
}
