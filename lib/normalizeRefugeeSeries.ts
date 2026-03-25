import { refugeeData as fallbackRefugeeData } from '@/lib/refugeeData'

export interface RefugeeSeriesPoint {
  year: number
  refugees: number
  residents: number
}

export function normalizeRefugeeSeries(
  unhcrData: any,
  worldBankData: any
): RefugeeSeriesPoint[] {
  try {
    const wbMap = new Map<number, number>()

    for (const row of worldBankData ?? []) {
      const year = Number(row?.date)
      const value = Number(row?.value)
      if (!Number.isNaN(year) && !Number.isNaN(value)) {
        wbMap.set(year, value)
      }
    }

    const unhcrRows = Array.isArray(unhcrData?.items)
      ? unhcrData.items
      : Array.isArray(unhcrData)
      ? unhcrData
      : []

    const refugeeMap = new Map<number, number>()

    for (const row of unhcrRows) {
      const year = Number(row?.year)
      const value =
        Number(row?.refugees) ||
        Number(row?.population) ||
        Number(row?.value) ||
        0

      if (!Number.isNaN(year)) {
        refugeeMap.set(year, value)
      }
    }

    const years = Array.from(
      new Set([...Array.from(wbMap.keys()), ...Array.from(refugeeMap.keys())])
    ).sort((a, b) => a - b)

    if (years.length === 0) return fallbackRefugeeData

    return years.map((year) => ({
      year,
      refugees: refugeeMap.get(year) ?? 0,
      residents: wbMap.get(year) ?? 0,
    }))
  } catch {
    return fallbackRefugeeData
  }
}