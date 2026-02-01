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

  // 1. 基本となる共通オプションを定義
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
        position: 'bottom' as const, // リテラル型を明示
        labels: { color: '#fff' },
      },
    },
  };

  // 2. Radar専用のオプションを合成
  // commonOptions を一旦 unknown にしてから目的の型へキャスト
  const radarOptions: ChartOptions<'radar'> = {
    ...(commonOptions as unknown as ChartOptions<'radar'>),
    scales: {
      r: {
        angleLines: { color: '#444' },
        grid: { color: '#444' },
        pointLabels: { color: '#fff', font: { size: 12 } },
        ticks: { display: false, count: 5 },
        suggestedMin: 0,
        suggestedMax: 100,
      },
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
              <Doughnut
                data={data as ChartData<'doughnut'>}
                options={commonOptions as unknown as ChartOptions<'doughnut'>}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SkillChart;
