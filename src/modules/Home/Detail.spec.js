import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from './Detail';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { requestStatus } from '@/common';
const mockStore = configureMockStore();
const store = mockStore({
  TVShow: {
    data: {},
    ...requestStatus.none,
  },
});

test('renders home detail', () => {
  const app = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/1']} initialIndex={1}>
        <Detail />
      </MemoryRouter>
    </Provider>,
  );
  expect(app.asFragment()).toMatchSnapshot();
});
