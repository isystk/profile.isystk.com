'use client';
import styles from './styles.module.scss';
import React, { useRef } from 'react';
import { Radar, Doughnut } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import { useInView } from '@/hooks/useInView';

type ChartType = 'radar' | 'doughnut';

interface SkillChartProps {
  title: string;
  type: ChartType;
  data: ChartData<'radar' | 'doughnut'>;
}

const SkillChart = ({ title, type, data }: SkillChartProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const commonOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
        labels: { color: '#fff', padding: 20 },
      },
    },
  };

  const radarOptions: ChartOptions<'radar'> = {
    ...(commonOptions as ChartOptions<'radar'>),
    layout: {
      padding: 10,
    },
    scales: {
      r: {
        angleLines: { color: '#444' },
        grid: { color: '#444' },
        pointLabels: {
          color: '#fff',
          font: { size: 11 },
          padding: 5,
          callback: (label: string) => {
            if (label.length > 6) return [label.slice(0, 6), label.slice(6)];
            return label;
          },
        },
        ticks: { display: false, count: 5 },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  const doughnutOptions: ChartOptions<'doughnut'> = {
    ...(commonOptions as ChartOptions<'doughnut'>),
    layout: {
      padding: 35,
    },
  };

  return (
    <div ref={ref} className={styles.chartCard}>
      <p className={styles.cardDescription}>{title}</p>
      <div className={styles.chartWrapper}>
        {isInView && (
          <>
            {type === 'radar' ? (
              <Radar data={data as ChartData<'radar'>} options={radarOptions} />
            ) : (
              <Doughnut data={data as ChartData<'doughnut'>} options={doughnutOptions} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SkillChart;
