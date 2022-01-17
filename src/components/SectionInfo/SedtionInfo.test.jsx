import React from 'react';
import { render, screen } from '@testing-library/react';

import SectionInfo from './index';

test('render section info', () => {
  const titleProp = 'Title Component';
  const infoProp = 'Info Component';
  render(<SectionInfo title={titleProp} info={infoProp} />);

  const title = screen.getByText(titleProp);
  const info = screen.getByText(infoProp);

  expect(title).toBeInTheDocument();
  expect(info).toBeInTheDocument();
});
