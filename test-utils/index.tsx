import { render } from '@testing-library/react-native';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const client = new QueryClient();

const AllTheProviders = ({ children }: { children: React.ReactElement }) => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </ApplicationProvider>
  );
};

const customRender = (ui: React.ReactElement) =>
  render(ui, { wrapper: AllTheProviders });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
