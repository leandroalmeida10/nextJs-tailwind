import React from 'react'

interface propsCardGrid {
  IconCard: React.SVGProps<SVGSVGElement>
  value: number
  label: string
}

export default function CardGrid({ IconCard, label, value }: propsCardGrid) {
  return (
    <div className="w-full md:w-1/2 p-4 hover:cursor-pointer hover:scale-110 ease-in-out transition duration-75">
      <div className="p-6 text-center bg-white rounded shadow">
        <span className="inline-block mx-auto"></span>
        <h3 className="mt-3 mb-1 text-3xl font-bold">{value}</h3>
        <p className="text-sm text-gray-600 font-medium">{label}</p>
      </div>
    </div>
  )
}
