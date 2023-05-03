import React from 'react'
import { formatCurrency } from '../../../../utils/format'
interface propsHistoryConsummer {
  totalQuantityConsultFree?: string
  totalQuantityConsultPay?: string
  totalValueBase?: string
  totalValueRebate?: string
  totalValueFinal?: string
}
export default function HistoryConsummer({
  totalQuantityConsultFree,
  totalQuantityConsultPay,
  totalValueBase,
  totalValueFinal,
  totalValueRebate,
}: propsHistoryConsummer) {
  return (
    <>
      <section className="pb-8">
        <div className="container px-4 mx-auto">
          <div className="pt-4 bg-white shadow rounded">
            <div className="flex px-6 pb-3 border-b">
              <h3 className="text-xl font-bold  text-gray-900">
                Histórico de consumos
              </h3>
            </div>
            <div className="block px-6 pb-4 border-b pt-2 ">
              <p className="pb-2  text-gray-900">
                Total de consultas gratuitas:
                <span className="font-bold pl-1">
                  {totalQuantityConsultFree}
                </span>
              </p>
              <p className="pb-2  text-gray-900">
                Total de consultas pagas:
                <span className="font-bold pl-1">
                  {totalQuantityConsultPay}
                </span>
              </p>
              <p className="pb-2  text-gray-900">
                Base total de valor:
                <span className="font-bold pl-1">
                  {formatCurrency(totalValueBase)}
                </span>
              </p>
              <p className="pb-2  text-gray-900">
                Total de consumo:
                <span className="font-bold pl-1">
                  {formatCurrency(totalValueRebate)}
                </span>
              </p>
              <p className="pb-2  text-gray-900">
                Total de valor final:
                <span className="font-bold pl-1">
                  {formatCurrency(totalValueFinal)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
