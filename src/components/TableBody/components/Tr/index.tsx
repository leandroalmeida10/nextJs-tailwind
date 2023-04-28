import React from 'react'
import { THeadTableprops } from '../../../types/tableTypes'

export default function Tr({ children }: THeadTableprops) {
  return <tr className="tr-table">{children}</tr>
}
