import React from 'react'
import TableContainer from '../../../../components/TableHead/components/TableContainer'
import Table from '../../../../components/TableHead/components/TableHead'
import TrHeadTable from '../../../../components/TableHead/components/TrHeadTable'
import ThHeadTable from '../../../../components/TableHead/components/ThHeadTable'
import Body from '../../../../components/TableBody/components/Body'
import Tr from '../../../../components/TableBody/components/Tr'
import Td from '../../../../components/TableBody/components/Td'
import ExportTable from '../../../../components/ExportTable'
import Paginate from '../../../../components/paginateTable'
import { Content } from '../../../../services/costs-services/types'
import { exportDataPDF } from '../../../../services/costs-services'

interface propsTable {
  data: Content
}

export default function TableConsummer({ data }: propsTable) {
  console.log(data)
  return (
    <>
      {data.items.length === 0 ? (
        <>
          <div>
            <h1>Não existem dados</h1>
          </div>
        </>
      ) : (
        <>
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
                {data.items.map((element) => (
                  <Tr key={element.id}>
                    <Td>{element.createdAt}</Td>
                    <Td>{element.typeConsume}</Td>
                    <Td>{element.quantityConsultFree}</Td>
                    <Td>{element.quantityConsultPay}</Td>
                    <Td>{element.valueBase}</Td>
                    <Td>{element.valueRebate}</Td>
                    <Td>{element.valueTotal}</Td>
                  </Tr>
                ))}
              </Body>
            </Table>
            <ExportTable onClick={() => exportDataPDF()} />
          </TableContainer>
          <Paginate />
        </>
      )}
    </>
  )
}
