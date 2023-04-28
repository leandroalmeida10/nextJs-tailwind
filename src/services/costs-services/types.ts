export interface Item {
  id: string
  typeConsume: string
  endpointConsumed: string
  quantityConsultFree: string
  quantityConsultPay: string
  valueBase: string
  valueRebate: string
  valueTotal: string
  createdAt: string
}
export interface Content {
  atualPage: string
  totalRegisters: string
  totalPages: string
  registersPerPage: string
  items: Item[]
}
export interface Data {
  statusCode: number
  message: string
  content: Content
}
export interface IRequestGetDataCosts {
  data: Data
  totalQuantityConsultFree: string
  totalQuantityConsultPay: string
  totalValueBase: string
  totalValueRebate: string
  totalValueFinal: string
}
