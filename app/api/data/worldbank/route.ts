import { NextResponse } from 'next/server'
import { fetchWorldBankPopulation } from '@/lib/fetchWorldBankData'

export async function GET() {
  try {
    const data = await fetchWorldBankPopulation()
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