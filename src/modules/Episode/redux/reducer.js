import action from './action';
import { requestStatus } from '@/common';
const store = {
  data: {},
  ...requestStatus.none,
};

const Episode = (state = store, { type, payload }) => {
  switch (type) {
    case action.set:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default Episode;
