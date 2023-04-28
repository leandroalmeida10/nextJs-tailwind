// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: {
    statusCode: 200
    message: 'Sucesso ao obter dados de utilização da API'
    content: {
      atualPage: 'number'
      totalRegisters: 'number'
      totalPages: 'number'
      registersPerPage: 'number'
      items: [
        {
          id: 'number'
          typeConsume: 'string'
          endpointConsumed: 'string'
          quantityConsultFree: 'number'
          quantityConsultPay: 'number'
          valueBase: 'number'
          valueRebate: 'number'
          valueTotal: 'number'
          createdAt: 'date'
        },
      ]
    }
  }
  totalQuantityConsultFree: 'number'
  totalQuantityConsultPay: 'number'
  totalValueBase: 'number'
  totalValueRebate: 'number'
  totalValueFinal: 'number'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({
    data: {
      statusCode: 200,
      message: 'Sucesso ao obter dados de utilização da API',
      content: {
        atualPage: 'number',
        totalRegisters: 'number',
        totalPages: 'number',
        registersPerPage: 'number',
        items: [
          {
            id: 'number',
            typeConsume: 'string',
            endpointConsumed: 'string',
            quantityConsultFree: 'number',
            quantityConsultPay: 'number',
            valueBase: 'number',
            valueRebate: 'number',
            valueTotal: 'number',
            createdAt: 'date',
          },
        ],
      },
    },
    totalQuantityConsultFree: 'number',
    totalQuantityConsultPay: 'number',
    totalValueBase: 'number',
    totalValueRebate: 'number',
    totalValueFinal: 'number',
  })
}
