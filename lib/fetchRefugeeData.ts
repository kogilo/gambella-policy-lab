export async function fetchUnhcrPopulationData() {
  const url =
    'https://api.unhcr.org/population/v1/population/?yearFrom=1991&yearTo=2024&coa=ETH&coo=SSD'

  const res = await fetch(url, { next: { revalidate: 86400 } })
  if (!res.ok) throw new Error('UNHCR request failed')

  return await res.json()
}