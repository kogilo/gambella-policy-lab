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
import { Candidate } from '@/types/candidate'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title)

type Props = {
  candidates: Candidate[]
  selectedTheme: string
}

function getThemeScore(candidate: Candidate, selectedTheme: string) {
  if (selectedTheme === 'Overall') return candidate.globalScore

  const match = candidate.thematicScores?.find(
    (item) => item.theme.toLowerCase() === selectedTheme.toLowerCase()
  )

  return match?.score ?? 0
}

export default function ScoreBarChart({ candidates, selectedTheme }: Props) {
  const data = {
    labels: candidates.map((c) =>
      c.name.length > 18 ? c.name.slice(0, 18) + '…' : c.name
    ),
    datasets: [
      {
        label: selectedTheme === 'Overall' ? 'Overall Score' : `${selectedTheme} Score`,
        data: candidates.map((c) => getThemeScore(c, selectedTheme)),
        backgroundColor: candidates.map((c) => c.politicalColor || '#15803d'),
        borderRadius: 10,
        barThickness: 28,
      },
    ],
  }

  const options: any = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text:
          selectedTheme === 'Overall'
            ? 'Gambella Governance Profile Scores'
            : `${selectedTheme} Theme Comparison`,
        color: '#0f172a',
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: '#0f172a',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 10,
        cornerRadius: 6,
        callbacks: {
          label: function (context: any) {
            return `Score: ${context.raw}/10`
          },
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#64748b',
          font: { size: 12 },
        },
      },
      x: {
        beginAtZero: true,
        max: 10,
        ticks: {
          stepSize: 1,
          color: '#64748b',
        },
        grid: {
          color: 'rgba(100, 116, 139, 0.15)',
        },
      },
    },
  }

  return (
    <div className="h-[420px] w-full">
      <Bar data={data} options={options} />
    </div>
  )
}