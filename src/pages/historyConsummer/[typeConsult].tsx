import React, { useState } from 'react'
import TableContainer from '../../components/TableHead/components/TableContainer'
import Table from '../../components/TableHead/components/TableHead'
import TrHeadTable from '../../components/TableHead/components/TrHeadTable'
import ThHeadTable from '../../components/TableHead/components/ThHeadTable'
import Body from '../../components/TableBody/components/Body'
import Tr from '../../components/TableBody/components/Tr'
import Td from '../../components/TableBody/components/Td'
import ExportTable from '../../components/ExportTable'
import Paginate from '../../components/paginateTable'
import { IRequestGetDataCosts } from '../../services/costs-services/types'
import { exportDataPDF, getDataCosts } from '../../services/costs-services'
import { useQuery } from 'react-query'
import Loading from '../../components/Loading'
import HistoryConsummer from './components/CardConsumer'
import { formatConsult, formatDescription } from './utils/format'
import Filters from './components/Filters'
import { formatCurrency } from '../../utils/format'
import { useRouter } from 'next/router'

export default function TableConsummer() {
  const router = useRouter()
  const { typeConsult } = router.query
  const pageWithOutDetailsCost = formatConsult(typeConsult?.toString()) === ''
  const [page, setPage] = useState(1)
  const [dateInitial, setDateInitial] = useState('')
  const [dateEnd, setDateEnd] = useState('')
  const [description, setDescription] = useState('')
  const { data, isLoading } = useQuery<IRequestGetDataCosts>(
    [
      'get-costs',
      page,
      pageWithOutDetailsCost
        ? description
        : formatConsult(typeConsult?.toString()),
    ],
    () => getDataCosts(page, description),
  )

  return (
    <>
      <Loading isVisible={isLoading} />
      <Filters
        onChangeDescription={(v) => setDescription(v.target.value)}
        setDateEnd={setDateInitial}
        setDateStart={setDateEnd}
      />
      {pageWithOutDetailsCost && (
        <HistoryConsummer
          totalQuantityConsultFree={data?.totalQuantityConsultFree ?? '0'}
          totalQuantityConsultPay={data?.totalQuantityConsultPay ?? '0'}
          totalValueBase={data?.totalValueBase ?? '0'}
          totalValueFinal={data?.totalValueFinal ?? '0'}
          totalValueRebate={data?.totalValueRebate ?? '0'}
        />
      )}
      <TableContainer>
        <Table>
          <TrHeadTable>
            <ThHeadTable>Data de consumo</ThHeadTable>
            <ThHeadTable>Descrição</ThHeadTable>
            <ThHeadTable>Consultas Gratuitas</ThHeadTable>
            <ThHeadTable>Consultas pagas</ThHeadTable>
            <ThHeadTable>Base de valor</ThHeadTable>
            <ThHeadTable>Desconto consumo</ThHeadTable>
            <ThHeadTable>Valor final</ThHeadTable>
          </TrHeadTable>
          <Body>
            {data! !== undefined &&
              data!.data!.content!.items!.length > 0 &&
              data!.data?.content!.items!.map((element) => (
                <Tr key={element.id}>
                  <Td>{element.createdAt}</Td>
                  <Td>{formatDescription(element.typeConsume)}</Td>
                  <Td>{element.quantityConsultFree}</Td>
                  <Td>{element.quantityConsultPay}</Td>
                  <Td>
                    {element.valueBase
                      ? formatCurrency(element.valueBase.toString())
                      : 'R$ 0,00'}
                  </Td>
                  <Td>
                    {element.valueRebate
                      ? formatCurrency(element.valueRebate.toString())
                      : 'R$ 0,00'}
                  </Td>
                  <Td>
                    {element.valueTotal
                      ? formatCurrency(element.valueTotal.toString())
                      : 'R$ 0,00'}
                  </Td>
                </Tr>
              ))}
            {data === undefined ||
              (data!.data!.content!.items!.length === 0 && (
                <tr className="text-center">
                  <td colSpan={7}>Não há dados</td>
                </tr>
              ))}
          </Body>
        </Table>
        <ExportTable onClick={() => exportDataPDF()} />
      </TableContainer>
      <Paginate
        actualPage={data !== undefined ? data!.data?.content.atualPage : 0}
        totalPages={data !== undefined ? data!.data?.content.totalPages : 0}
        onClickNext={() => setPage(data!.data?.content.atualPage! + 1)}
        onClickPrevious={() => setPage(data!.data?.content.atualPage! - 1)}
      />
    </>
  )
}
