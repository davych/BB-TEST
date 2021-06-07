import React from 'react';
import { render, screen } from '@testing-library/react';
import EpisodeListItem from './';
test('renders episode list item', () => {
  const app = render(<EpisodeListItem />);
  expect(app.asFragment()).toMatchSnapshot();
});
