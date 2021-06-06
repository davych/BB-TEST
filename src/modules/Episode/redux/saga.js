import { put, takeEvery, call } from 'redux-saga/effects';
import action from './action';
import * as episodeServices from '../services';
import { requestStatus } from '@/common';
function* getEpisode({ id }) {
  try {
    yield put({ type: action.set, payload: requestStatus.fetching() });
    const res = yield call(episodeServices.getEpisode, id);
    yield put({ type: action.set, payload: { ...requestStatus.fulfilled(), data: res.data } });
  } catch (error) {
    yield put({ type: action.set, payload: requestStatus.fail(error.message) });
  }
}

export default function* watchEpisode() {
  yield takeEvery(action.get, getEpisode);
}
