export async function getDataCosts() {
  const response = await fetch(
    'http://localhost:8003/v1/activity-logs/onboard/list-detailed',
  )
  const data = await response.json()
  return data
}
