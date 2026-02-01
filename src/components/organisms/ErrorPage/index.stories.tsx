import React from 'react';
import ErrorPage from './index';
import { JSX } from 'react';

const meta = {
  title: 'Components/Organisms/ErrorPage',
  component: ErrorPage,
  tags: ['autodocs'],
};
export default meta;

export const Default500: { render: () => JSX.Element } = {
  render: () => <ErrorPage />,
};

export const NotFound404: { render: () => JSX.Element } = {
  render: () => <ErrorPage status={404} />,
};
