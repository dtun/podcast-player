import * as React from 'react';
import { render, screen } from '@testing-library/react-native';

import Settings from '../settings';

test('Settings renders', () => {
  render(<Settings />);

  expect(screen.getByText('Settings')).toBeTruthy();
});
