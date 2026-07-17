import React from 'react';
import { JSX } from 'react';
import GoogleTagManager from './index';

const meta = {
  title: 'Components/Atoms/GoogleTagManager',
  component: GoogleTagManager,
  tags: ['autodocs'],
};
export default meta;

export const Default: { render: () => JSX.Element } = {
  render: () => <GoogleTagManager />,
};
