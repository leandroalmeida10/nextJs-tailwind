export async function getDataCosts() {
  const response = await fetch('http://localhost:8003')
  const data = await response.json()
  return data
}
