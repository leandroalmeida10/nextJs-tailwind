import axios from 'axios'

export async function getDataCosts(
  page: number,
  typeConsumer?: string,
  initialDate?: string,
  endDate?: string,
) {
  const params = {
    page,
    endpoint: typeConsumer,
    dateInitial: initialDate,
    dateFinal: endDate,
  }
  const response = await axios.get(
    'http://localhost:8003/v1/activity-logs/onboard/list-detailed',
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
export async function exportDataPDF(
  dateInitial?: string,
  dateEnd?: string,
  typeConsume?: string,
) {
  const params = {
    dateInitial,
    dateFinal: dateEnd,
    endpoint: typeConsume,
  }
  const response = await axios.get(
    'http://localhost:8003/v1/activity-logs/onboard/export-pdf',
    {
      params,
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

export async function getCountEndpointsConsumed(
  dateInitial?: string,
  dateEnd?: string,
) {
  const params = {
    dateFinal: dateEnd,
    dateInitial,
  }
  const response = await axios.get(
    'http://localhost:8003/v1/activity-logs/onboard/count-per-type',
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
