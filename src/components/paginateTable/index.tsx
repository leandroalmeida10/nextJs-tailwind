import React from 'react'
import { useQuery } from 'react-query'
import { getDataCosts } from '../../services'

export default function Paginate() {
  const { data, isLoading } = useQuery('getcosts', getDataCosts)

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Atual{data.atualPage}
        <span className="font-semibold text-gray-900 dark:text-white">
          {data.atualPage}
        </span>
        de{data.totalPages}
        <span className="font-semibold text-gray-900 dark:text-white">
          {data.totalPages}
        </span>
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Anterior
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Proximo
        </button>
      </div>
    </div>
  )
}
