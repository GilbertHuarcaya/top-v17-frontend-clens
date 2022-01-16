import React from 'react';
import { render, screen } from '@testing-library/react';

import HeroSection from './index';

test('render HeroSection and title,information and button', () => {
  render(<HeroSection />);
  // encontrar el titulo
  const title = screen.getByText(/el mejor servicio, al mejor precio/i);
  expect(title).toBeInTheDocument();
  // encontrar el texto informacion
  const information = screen.getByText(
    /Personal experimentado. Todo gestionado online. Un servicio de limpieza que sí funciona./i,
  );
  expect(information).toBeInTheDocument();
  // encontrar el boton ver los planes
  const buttonSeePlans = screen.getByRole('button', {
    name: /Mira los planes/i,
  });
  expect(buttonSeePlans).toBeInTheDocument();
});
