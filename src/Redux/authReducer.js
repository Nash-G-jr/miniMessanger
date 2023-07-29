import { stopSubmit } from 'redux-form';
import { headerApi } from '../API/API';

const SET_USER_DATA = 'auth/SET_USER_DATA';

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

export const authenticationThunk = () => async (dispatch) => {
  let data = await headerApi.authentication();

  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await headerApi.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(authenticationThunk());
  } else {
    let messages =
      response.data.messages.length > 0 ? response.data.messages[0] : 'Ошибка';
    dispatch(stopSubmit('login', { _error: messages }));
  }
};
export const logout = () => async (dispatch) => {
  let resultCode = await headerApi.logout();

  if (resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
    window.location = '/login';
  }
};
export default authReducer;
