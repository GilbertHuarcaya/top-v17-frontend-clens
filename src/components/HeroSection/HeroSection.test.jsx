import React from 'react';
import { render, screen } from '@testing-library/react';

import HeroSection from './index';

test('render component', () => {
  render(<HeroSection />);
  const buttonSeePlans = screen.getByText(/Mira los planes/i);
  expect(buttonSeePlans).toBeInTheDocument();
});
