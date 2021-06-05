import action from './action';
import { requestStatus } from '@/common';
const store = {
  data: {},
  ...requestStatus.none,
};

const TVShow = (state = store, { type, payload }) => {
  switch (type) {
    case action.set:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default TVShow;
