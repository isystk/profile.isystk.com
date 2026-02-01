import React from 'react';
import ErrorPage from '@/components/organisms/ErrorPage';

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error', error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage status={500} />;
    }

    return this.props.children;
  }
}
