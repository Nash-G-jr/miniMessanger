import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './authReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';
import { compose } from 'redux';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);
window.__store__ = store;
// let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
