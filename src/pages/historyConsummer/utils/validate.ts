export const isValidDateFormatBrazilian = (date?: string) => {
  if (!date) {
    return false
  }
  const regex = /^\d{2}\/\d{2}\/\d{4}$/
  return regex.test(date)
}
