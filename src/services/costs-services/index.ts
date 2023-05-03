import axios from 'axios'

export async function getDataCosts(page: number, description: string) {
  const params = {
    page,
    endpoint: description,
  }
  const response = await axios.get(
    'http://localhost:8003/v1/activity-logs/onboard/list-detailed?endpoint',
    {
      params,
      headers: {
        Authorization: 'Bearer 5870|jv3kkRnM29aau2KNuPeo3TqvRHHTjrKqyCNK4eY8',
        'Content-Type': 'application/json',
      },
    },
  )
  return response.data
}
export async function exportDataPDF() {
  const response = await axios.get(
    'http://localhost:8003/v1/activity-logs/onboard/export-pdf',
    {
      responseType: 'blob',
      headers: {
        Authorization: 'Bearer 5870|jv3kkRnM29aau2KNuPeo3TqvRHHTjrKqyCNK4eY8',
        'Content-Type': 'application/json',
      },
    },
  )
  const href = URL.createObjectURL(response.data)
  const link = document.createElement('a')
  link.href = href
  link.setAttribute('download', 'RelatorioOnboard.pdf')
  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
  URL.revokeObjectURL(href)
  return response.data
}
