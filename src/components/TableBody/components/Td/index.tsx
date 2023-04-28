import React from 'react'
import { THeadTableprops } from '../../../types/tableTypes'

export default function Td({ children }: THeadTableprops) {
  return <td className="py-5 font-medium">{children}</td>
}
