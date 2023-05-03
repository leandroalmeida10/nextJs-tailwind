import React, { MouseEventHandler } from 'react'

interface propsPaginate {
  actualPage?: number
  totalPages?: number
  onClickPrevious: MouseEventHandler<HTMLButtonElement>
  onClickNext: MouseEventHandler<HTMLButtonElement>
}

export default function Paginate({
  actualPage,
  totalPages,
  onClickNext,
  onClickPrevious,
}: propsPaginate) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-gray-700 dark:text-gray-400">
        Atual
        <span className="font-semibold text-gray-900 ms-1 mr-1">
          {actualPage ?? 0}
        </span>
        de
        <span className="font-semibold text-gray-900 ms-1 mr-1">
          {totalPages ?? 0}
        </span>
        Páginas
      </p>
      {totalPages !== undefined && totalPages! > 1 && (
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            disabled={actualPage === 1}
            onClick={onClickPrevious}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Anterior
          </button>
          <button
            disabled={actualPage === totalPages}
            onClick={onClickNext}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Proximo
          </button>
        </div>
      )}
    </div>
  )
}
