import * as React from 'react';
import { render, screen } from '@testing-library/react-native';

import Home from '../index';

test('Home renders', () => {
  render(<Home />);

  expect(screen.getByText('Home')).toBeTruthy();
});
