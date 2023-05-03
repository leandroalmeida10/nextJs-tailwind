const maskCurrency = (
  valor: any | number | bigint,
  locale = 'pt-BR',
  currency = 'BRL',
) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(valor)

export const formatCurrency = (value?: string) => {
  if (!value) {
    return value
  }
  const valueMoneyFormat = value
    .split('')
    .filter((s) => /\d/.test(s))
    .join('')
    .padStart(2, '0')
  const digitsFloat = `${valueMoneyFormat.slice(
    0,
    -2,
  )}.${valueMoneyFormat.slice(-2)}`
  const Masked = maskCurrency(digitsFloat)
  return Masked
}
