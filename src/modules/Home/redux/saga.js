import { put, takeEvery, call } from 'redux-saga/effects';
import action from './action';
import homeServices from '../services';
import { requestStatus } from '@/common';
export function* getTVShow({ id }) {
  try {
    yield put({ type: action.set, payload: requestStatus.fetching() });
    const res = yield call(homeServices.getTVShow, id);
    yield put({ type: action.set, payload: { ...requestStatus.fulfilled(), data: res.data } });
  } catch (error) {
    yield put({ type: action.set, payload: requestStatus.fail(error.message) });
  }
}

export default function* watchTVShow() {
  yield takeEvery(action.get, getTVShow);
}
