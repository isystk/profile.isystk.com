import React from 'react';
import Footer from './index';
import { JSX } from 'react';

const meta = {
  title: 'Components/Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
};
export default meta;

export const Default: { render: () => JSX.Element } = {
  render: () => <Footer />,
};
