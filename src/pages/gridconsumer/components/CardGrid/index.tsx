import React, { MouseEventHandler } from 'react'

interface propsCardGrid {
  IconCard: any
  value: number
  label: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

export default function CardGrid({
  IconCard,
  label,
  value,
  onClick,
}: propsCardGrid) {
  return (
    <div
      className="w-full md:w-1/2 p-4 hover:cursor-pointer hover:scale-105 ease-in-out transition duration-75"
      onClick={onClick}
    >
      <div className="p-6 text-center bg-white rounded shadow">
        <span className="inline-block mx-auto">{IconCard}</span>
        <h3 className="mt-3 mb-1 text-3xl font-bold">{value}</h3>
        <p className="text-sm text-gray-600 font-medium">{label}</p>
      </div>
    </div>
  )
}
