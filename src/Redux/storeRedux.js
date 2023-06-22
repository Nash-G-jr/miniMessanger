import { legacy_createStore, combineReducers } from 'redux';
import dialogsReducer from './dialogsReducer';
import girlfriendsReducer from './girlfriendsReducer';
import profileReducer from './profileReducer';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  girlfriends: girlfriendsReducer,
  profilePage: profileReducer,
});

let store = legacy_createStore(reducers);

export default store;
