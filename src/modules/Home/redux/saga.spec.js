import { getTVShow } from './saga';
import actions from './action';
import { put, call } from 'redux-saga/effects';
import { requestStatus } from '@/common';
import homeServices from '../services';
test('getTVShow Saga test', () => {
  const gen = getTVShow({ id: 1 });
  const setLoading = gen.next().value;
  expect(setLoading).toEqual(put({ type: actions.set, payload: requestStatus.fetching() }));
  const getTVFunc = gen.next().value;
  expect(getTVFunc).toEqual(call(homeServices.getTVShow, 1));
  const success = gen.next().value;
  expect(gen.next().done).toBeTruthy();
});
