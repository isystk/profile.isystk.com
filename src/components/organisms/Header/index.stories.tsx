import React from 'react';
import Header from './index';
import { JSX } from 'react';

const meta = {
  title: 'Components/Organisms/Header',
  component: Header,
  tags: ['autodocs'],
};
export default meta;

export const Default: { render: () => JSX.Element } = {
  render: () => <Header />,
};
