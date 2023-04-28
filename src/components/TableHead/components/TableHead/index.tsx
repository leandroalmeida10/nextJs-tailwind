import React from 'react'
import { THeadTableprops } from '../../../types/tableTypes'

export default function Table({ children }: THeadTableprops) {
  return (
    <>
      <table className="table-auto w-full">{children}</table>
    </>
  )
}
