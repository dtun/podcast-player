import * as React from 'react';
import { render, screen } from '@testing-library/react-native';

import Add from '../add';

test('Add renders', () => {
  render(<Add />);

  expect(screen.getByText('Add')).toBeTruthy();
});
