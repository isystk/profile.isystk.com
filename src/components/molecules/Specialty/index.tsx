'use client';
import styles from './styles.module.scss';
import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Radar, Doughnut } from 'react-chartjs-2';
import ScrollIn from '@/components/interactions/ScrollIn';
import Image from '@/components/atoms/Image';
import lineIconImage from '@/assets/images/icon_line.png';
import HorizontalRule from '@/components/atoms/HorizontalRule';
import useAppRoot from '@/states/useAppRoot';

// Chart.js のプラグイン登録
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, ArcElement, Tooltip, Legend);

const Specialty = () => {
  const { state } = useAppRoot();
  const specialty = state?.portfolio?.specialty;
  const contacts = state?.portfolio?.contacts;

  if (!contacts) return null;
  if (!specialty) return null;

  // レーダーチャート用データ整形
  const radarData = {
    labels: specialty[0].items.map(i => i.label),
    datasets: [
      {
        label: specialty[0].title,
        data: specialty[0].items.map(i => i.data),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  // ドーナツチャート用データ整形
  const doughnutData = {
    labels: specialty[1].items.map(i => i.label),
    datasets: [
      {
        data: specialty[1].items.map(i => i.data),
        backgroundColor: specialty[1].items.map(i => i.color),
        borderWidth: 1,
      },
    ],
  };

  // リンクURLを取り出す
  const lineContact = contacts?.find(contact => contact.name.toLowerCase() === 'line');
  const lineUrl = lineContact?.linkUrl;

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
        labels: { color: '#fff' },
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartInner}>
        <ScrollIn>
          <>
            <h2 className={styles.title}>SPECIALTY</h2>
            <HorizontalRule />
          </>
        </ScrollIn>
        <div className={styles.chartBoxes}>
          <div className={styles.chartBoxWrapperLeft}>
            <ScrollIn className={styles.scrollCardLeft}>
              <div className={styles.chartCard}>
                <p className={styles.cardDescription}>{specialty[0].title}</p>
                <div className={styles.chartWrapper}>
                  <Radar
                    data={radarData}
                    options={{
                      ...commonOptions,
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
                    }}
                  />
                </div>
              </div>
            </ScrollIn>
          </div>
          <div className={styles.chartBoxWrapperRight}>
            <ScrollIn className={styles.scrollCardRight}>
              <div className={styles.chartCard}>
                <p className={styles.cardDescription}>{specialty[1].title}</p>
                <div className={styles.chartWrapper}>
                  <Doughnut data={doughnutData} options={commonOptions} />
                </div>
              </div>
            </ScrollIn>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <a href={lineUrl} className={styles.lineButton} target="_blank" rel="noopener noreferrer">
            <Image src={lineIconImage.src} width={40} height={40} alt="LINE icon" />
            <span className={styles.lineButtonText}>お問い合わせはこちら</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Specialty;
