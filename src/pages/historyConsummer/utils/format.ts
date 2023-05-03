export const formatDescription = (data?: string) => {
  switch (data) {
    case 'PF':
      return 'Pessoa Física'
    case 'PJ':
      return 'Pessoa Jurídica'
    case 'VEHICLE':
      return 'Veículo'
    case 'ADRESS':
      return 'Endereço'
    default:
      return data
  }
}
export const formatConsult = (data?: string) => {
  switch (data) {
    case 'PF':
      return 'Pessoa Física'
    case 'PJ':
      return 'Pessoa Jurídica'
    case 'VEHICLE':
      return 'Veículo'
    case 'ADRESS':
      return 'Endereço'
    default:
      return ''
  }
}
