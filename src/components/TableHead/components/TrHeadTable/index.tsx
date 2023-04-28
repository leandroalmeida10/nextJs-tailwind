import React from 'react'
import { THeadTableprops } from '../../../types/tableTypes'

export default function TrHeadTable({ children }: THeadTableprops) {
  return (
    <tr className="pb-3 font-medium" contentEditable="false">
      {children}
    </tr>
  )
}
