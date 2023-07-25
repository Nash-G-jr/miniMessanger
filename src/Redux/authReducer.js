import { stopSubmit } from 'redux-form';
import { headerApi } from '../API/API';

const SET_USER_DATA = 'SET_USER_DATA';

let inititialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = inititialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
});

export const authenticactionThunk = () => (dispatch) => {
  headerApi.authentication().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login, isAuth } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};
export const login = (email, password, rememberMe) => (dispatch) => {
  headerApi.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(authenticactionThunk());
    } else {
      let messages =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : 'Ошибка';
      dispatch(stopSubmit('login', { _error: messages }));
    }
  });
};
export const logout = () => (dispatch) => {
  headerApi.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};
export default authReducer;
