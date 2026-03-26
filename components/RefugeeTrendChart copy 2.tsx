'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

export type RefugeeTrendPoint = {
  year: number
  refugees: number
  residents: number
}

interface RefugeeTrendChartProps {
  data: RefugeeTrendPoint[]
}

export default function RefugeeTrendChart({ data }: RefugeeTrendChartProps) {
  const chartData = {
    labels: data.map((d) => d.year),
    datasets: [
      {
        label: 'Refugees',
        data: data.map((d) => d.refugees),
        borderColor: '#dc2626',
        backgroundColor: '#dc2626',
      },
      {
        label: 'Local Residents',
        data: data.map((d) => d.residents),
        borderColor: '#2563eb',
        backgroundColor: '#2563eb',
      },
      {
        label: 'Refugee Ratio (%)',
        data: data.map((d) => (d.residents > 0 ? (d.refugees / d.residents) * 100 : 0)),
        borderColor: '#16a34a',
        backgroundColor: '#16a34a',
        borderDash: [5, 5],
        yAxisID: 'y1',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: {
        display: true,
        text: 'Refugee vs Resident Population Over Time',
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.dataset.label || ''
            const value = Number(context.raw)

            if (label === 'Refugee Ratio (%)') {
              return `${label}: ${value.toFixed(1)}%`
            }

            return `${label}: ${value.toLocaleString()}`
          },
        },
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Population',
        },
      },
      y1: {
        type: 'linear' as const,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Ratio (%)',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  }

  return (
    <div className="h-[400px] w-full">
      <Line data={chartData} options={options} />
    </div>
  )
}