'use client'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { Candidate } from '@/types/candidate'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
)

type Props = {
  candidates: Candidate[]
}

const criteria = [
  { key: 'coherence', label: 'Coherence' },
  { key: 'solidite', label: 'Institutional Strength' },
  { key: 'robustesse', label: 'Resilience' },
  { key: 'pragmatisme', label: 'Practicality' },
  { key: 'detail', label: 'Detail' },
] as const

function hexToRgba(hex: string, alpha: number) {
  const cleanHex = hex.replace('#', '')
  const bigint = parseInt(cleanHex, 16)

  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export default function ScoreRadarChart({ candidates }: Props) {
  const topCandidates = candidates.slice(0, 5)

  const data = {
    labels: criteria.map((c) => c.label),
    datasets: topCandidates.map((candidate) => {
      const color = candidate.politicalColor || '#15803d'

      return {
        label: candidate.name,
        data: criteria.map((criterion) => candidate.scores?.[criterion.key] ?? 0),
        borderColor: color,
        backgroundColor: hexToRgba(color, 0.18),
        pointBackgroundColor: color,
        pointBorderColor: '#ffffff',
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: color,
        borderWidth: 2,
      }
    }),
  }

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#475569',
          font: {
            size: 12,
          },
          boxWidth: 14,
        },
      },
      title: {
        display: true,
        text: 'Gambella policy profile comparison',
        color: '#0f172a',
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: {
          bottom: 16,
        },
      },
      tooltip: {
        backgroundColor: '#0f172a',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        padding: 10,
        cornerRadius: 8,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
          backdropColor: 'transparent',
          color: '#64748b',
        },
        grid: {
          color: 'rgba(100, 116, 139, 0.18)',
        },
        angleLines: {
          color: 'rgba(100, 116, 139, 0.18)',
        },
        pointLabels: {
          color: '#334155',
          font: {
            size: 12,
          },
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 3,
        hoverRadius: 5,
      },
    },
  }

  return (
    <div className="h-[520px] w-full">
      <Radar data={data} options={options} />
    </div>
  )
}