import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto flex min-h-[50vh] max-w-2xl items-center justify-center px-6">
          <div className="rounded-3xl border border-red-400/20 bg-red-500/10 p-8 text-center text-sm text-red-300">
            <h2 className="text-xl font-semibold">Something went wrong.</h2>
            <p className="mt-3">The page could not be rendered. Please refresh and try again.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
