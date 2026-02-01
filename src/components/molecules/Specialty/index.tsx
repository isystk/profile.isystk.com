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
import ScrollIn from '@/components/interactions/ScrollIn';
import Image from '@/components/atoms/Image';
import lineIconImage from '@/assets/images/icon_line.png';
import HorizontalRule from '@/components/atoms/HorizontalRule';
import useAppRoot from '@/states/useAppRoot';
import SkillChart from '@/components/molecules/SkillChart';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, ArcElement, Tooltip, Legend);

const Specialty = () => {
  const { state } = useAppRoot();
  const specialty = state?.portfolio?.specialty;
  const contacts = state?.portfolio?.contacts;

  if (!contacts || !specialty) return null;

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

  const lineUrl = contacts.find(c => c.name.toLowerCase() === 'line')?.linkUrl;

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
              <SkillChart title={specialty[0].title} type="radar" data={radarData} />
            </ScrollIn>
          </div>
          <div className={styles.chartBoxWrapperRight}>
            <ScrollIn className={styles.scrollCardRight}>
              <SkillChart title={specialty[1].title} type="doughnut" data={doughnutData} />
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
