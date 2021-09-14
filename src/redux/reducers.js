import { combineReducers } from 'redux';
import TVShow from '@/modules/Home/redux/reducer';
import Episode from '@/modules/Episode/redux/reducer';

export default combineReducers({
  TVShow,
  Episode,
});
