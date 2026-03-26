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
import { refugeeData } from '@/lib/refugeeData'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

export default function RefugeeTrendChart() {
  
  const data = {
    labels: refugeeData.map((d) => d.year),
    datasets: [
      {
        label: 'Refugees',
        data: refugeeData.map((d) => d.refugees),
        borderColor: '#dc2626',
      },
      {
        label: 'Local Residents',
        data: refugeeData.map((d) => d.residents),
        borderColor: '#2563eb',
      },
      {
        label: 'Refugee Ratio (%)',
        data: refugeeData.map((d) => (d.refugees / d.residents) * 100),
        borderColor: '#16a34a',
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
    },
    scales: {
      y: {
        type: 'linear' as const,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  }

  // 👇 THIS IS WHERE IT GOES
  return (
    <div className="h-[400px] w-full">
      <Line data={data} options={options} />
    </div>
  )
}