import React from 'react'
import TableConsummer from './components/TableConsumer'
import { useQuery } from 'react-query'
import { getDataCosts } from '../../services'
import { IRequestGetDataCosts } from '../../services/costs-services/types'

export default function HistoryConsummer() {
  const { data } = useQuery<IRequestGetDataCosts>('get-costs', getDataCosts)
  console.log(data)
  return (
    <>
      <section className="py-8">
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
                  {data?.totalQuantityConsultFree}
                </span>
              </p>
              <p className="pb-2  text-gray-900">
                Total de consultas pagas:
                <span className="font-bold pl-1">
                  {data?.totalQuantityConsultPay}
                </span>
              </p>
              <p className="pb-2  text-gray-900">
                Base total de valor:
                <span className="font-bold pl-1">{data?.totalValueBase}</span>
              </p>
              <p className="pb-2  text-gray-900">
                Total de consumo:
                <span className="font-bold pl-1">{data?.totalValueRebate}</span>
              </p>
              <p className="pb-2  text-gray-900">
                Total de valor final:
                <span className="font-bold pl-1">{data?.totalValueFinal}</span>
              </p>
            </div>
          </div>
        </div>
        <TableConsummer data={data?.data.content!} />
      </section>
    </>
  )
}
