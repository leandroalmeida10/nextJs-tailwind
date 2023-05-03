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

export const formatDateBrazilToAmerican = (date: string) => {
  const [day, month, year] = date.split('/')
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}
