import { render } from '@testing-library/react-native';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const client = new QueryClient();

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

const customRender = (ui: React.ReactElement) =>
  render(ui, { wrapper: AllTheProviders });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
