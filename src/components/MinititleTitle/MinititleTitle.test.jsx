import React from 'react';
import { render, screen } from '@testing-library/react';

import MinititleTitle from './index';

test('Render Minititle component', () => {
  const titleProp = 'Title Prop';
  const miniTitleProp = 'Minititle Prop';
  render(<MinititleTitle title={titleProp} minititle={miniTitleProp} />);
  const title = screen.getByText(titleProp);
  const miniTitle = screen.getByText(miniTitleProp);

  expect(title).toBeInTheDocument();
  expect(miniTitle).toBeInTheDocument();
});
