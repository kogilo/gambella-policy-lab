import { NextResponse } from 'next/server'
import { fetchUnhcrPopulationData } from '@/lib/fetchUnhcrData'

export async function GET() {
  try {
    const data = await fetchUnhcrPopulationData()
    return NextResponse.json({ ok: true, data })
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}