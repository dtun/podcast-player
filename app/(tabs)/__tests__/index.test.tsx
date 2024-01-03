import * as React from 'react';
import { render, screen } from '@testing-library/react-native';

import TabOneScreen from '../index';

test('TabOneScreen renders', () => {
  render(<TabOneScreen />);

  expect(screen.getByText('Tab One')).toBeTruthy();
});
