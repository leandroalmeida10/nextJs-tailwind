import React from 'react'
import { THeadTableprops } from '../../../types/tableTypes'

export default function Header({ children }: THeadTableprops) {
  return <thead>{children}</thead>
}
