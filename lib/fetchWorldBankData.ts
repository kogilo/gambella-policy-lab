export async function fetchWorldBankPopulation() {
  const url =
    'https://api.worldbank.org/v2/country/ETH/indicator/SP.POP.TOTL?format=json&per_page=100'

  const res = await fetch(url, {
    next: { revalidate: 86400 },
  })

  if (!res.ok) {
    throw new Error('World Bank request failed')
  }

  const json = await res.json()
  return json?.[1] ?? []
}