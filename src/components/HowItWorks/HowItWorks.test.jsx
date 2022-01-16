import React from 'react';
import { render, screen } from '@testing-library/react';
import HowItWorks from './index';

test('Render HowItWorks Component', () => {
  render(<HowItWorks />);

  const title = screen.getByText(/Agil servicio de limpieza/i);
  expect(title).toBeInTheDocument();

  const ourPlans = screen.getByText(/1. nuestros planes/i);
  expect(ourPlans).toBeInTheDocument();

  const schedule = screen.getByText(/2. Agenda/i);
  expect(schedule).toBeInTheDocument();

  const rate = screen.getByText(/3. Califique/i);
  expect(rate).toBeInTheDocument();
});
