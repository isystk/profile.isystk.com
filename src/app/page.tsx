import BasicLayout from '@/components/templates/BasicLayout';
import MainVisual from '@/components/molecules/MainVisual';
import News from '@/components/molecules/News';
import Features from '@/components/molecules/Features';
import Instroduction from '@/components/molecules/Instroduction';
import { Metadata } from 'next';
import Specialty from '@/components/molecules/Specialty';
import SkillSection from '@/components/molecules/SkillSection';
import ThanksMessage from '@/components/molecules/ThanksMessage';
import Circles from '@/components/interactions/Circles';

export const metadata: Metadata = {
  title: 'ポートフォリオ｜伊勢 功崇（いせ よしたか）',
};

const TopPage = () => {
  return (
    <BasicLayout>
      <MainVisual />
      <Circles>
        <Instroduction />
      </Circles>
      <div className="h-48"></div>
      <Specialty />
      <div className="h-48"></div>
      <SkillSection />
      <div className="h-48"></div>
      <Features />
      <div className="h-48"></div>
      <News />
      <ThanksMessage />
    </BasicLayout>
  );
};

export default TopPage;
