'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useState } from 'react'
import { zoneRefugeeData } from '@/lib/zoneRefugeeData'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title)

const zoneOptions = [
  { key: 'anywaa', label: 'Anywaa Zone' },
  { key: 'nuer', label: 'Nuer Zone' },
  { key: 'mejang', label: 'Mejang Zone' },
] as const

export default function ZoneBreakdownChart() {
  const [selectedZone, setSelectedZone] = useState<'anywaa' | 'nuer' | 'mejang'>('anywaa')

 
    const data = {
  labels: zoneRefugeeData.map((d) => d.year),
  datasets: [
    {
      label: 'Refugees',
      data: zoneRefugeeData.map((d) => d[selectedZone].refugees),
      backgroundColor: '#dc2626',   // red
      borderColor: '#dc2626',
      borderWidth: 1,
    },
    {
      label: 'Residents',
      data: zoneRefugeeData.map((d) => d[selectedZone].residents),
      backgroundColor: '#2563eb',   // blue
      borderColor: '#2563eb',
      borderWidth: 1,
    },
  ],
}
  

  const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#334155',
        font: {
          weight: 'bold' as const,
        },
      },
    },
    title: {
      display: true,
      text: `${zoneOptions.find((z) => z.key === selectedZone)?.label} Population Breakdown`,
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          return `${context.dataset.label}: ${Number(context.raw).toLocaleString()}`
        },
      },
    },
  },
}

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {zoneOptions.map((zone) => (
          <button
            key={zone.key}
            onClick={() => setSelectedZone(zone.key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedZone === zone.key
                ? 'bg-green-800 text-white'
                : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {zone.label}
          </button>
        ))}
      </div>

      <div className="h-[420px] w-full">
        <Bar data={data} options={options} />
      </div>

      <p className="mt-4 text-xs text-slate-500">
        This chart shows refugee and resident population trends by zone. In this model, refugee camp concentration is represented in Anywaa Zone.
      </p>
    </div>
  )
}