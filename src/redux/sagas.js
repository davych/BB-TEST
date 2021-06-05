import { all } from 'redux-saga/effects';
import watchTVShow from '@/modules/Home/redux/saga';

export default function* rootSaga() {
  yield all([watchTVShow()]);
}
