import React from 'react'
import { THeadTableprops } from '../../../types/tableTypes'

export default function TableContainer({ children }: THeadTableprops) {
  return (
    <section className="py-8">
      <div className="container px-4 mx-auto">
        <div className="pt-4 bg-white shadow rounded">
          <div className="p-4 overflow-x-auto">{children}</div>
        </div>
      </div>
    </section>
  )
}
