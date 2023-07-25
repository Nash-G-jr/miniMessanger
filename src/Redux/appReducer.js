import { authenticactionThunk } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let inititialState = {
  initialized: false,
};

const appReducer = (state = inititialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(authenticactionThunk());

  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
