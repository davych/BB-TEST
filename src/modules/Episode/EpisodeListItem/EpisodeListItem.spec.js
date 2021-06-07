import React from 'react';
import { render, screen } from '@testing-library/react';
import EpisodeListItem from './';
test('renders episode list item with width 599', () => {
  const app = render(<EpisodeListItem data={mockEpisode} width="xs" />);
  expect(app.asFragment()).toMatchSnapshot();
});

// test('renders episode list item with width 601', () => {
//   const app = render(<EpisodeListItem data={mockEpisode} width="md" />);
//   expect(app.asFragment()).toMatchSnapshot();
// });

const mockEpisode = {
  image: {
    original: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
    medium: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
  },
  name: 'name',
  summary: '<div>hi</div>hi',
};
