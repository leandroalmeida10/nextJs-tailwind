import React from 'react'
import { THeadTableprops } from '../../../types/tableTypes'

export default function Body({ children }: THeadTableprops) {
  return <tbody>{children}</tbody>
}
