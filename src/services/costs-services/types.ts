export interface Item {
  id: number
  typeConsume: string
  endpointConsumed: string
  quantityConsultFree: number
  quantityConsultPay: number
  valueBase: number
  valueRebate: number
  valueTotal: number
  createdAt: string
}
export interface Content {
  atualPage?: number
  items?: Item[]
  registersPerPage?: number
  totalPages?: number
  totalRegisters?: number
}
export interface Data {
  statusCode: number
  message: string
  content: Content
}
export interface IRequestGetDataCosts {
  data?: Data
  totalQuantityConsultFree?: string
  totalQuantityConsultPay?: string
  totalValueBase?: string
  totalValueRebate?: string
  totalValueFinal?: string
}

export interface IResponseContentGetCountPerType {
  quantityPF: number
  quantityPj: number
  quantityAdress: number
  quantityVehicle: number
}

export interface IResponseGetCountPerType {
  statusCode: number
  message: string
  content: IResponseContentGetCountPerType
}
