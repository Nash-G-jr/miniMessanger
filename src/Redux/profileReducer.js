import { stopSubmit } from 'redux-form';
import { profileApi } from '../API/API';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTOSUCCESS = 'SAVE_PHOTOSUCCESS';
const SAVE_PROFILESUCCESS = 'SAVE_PROFILESUCCESS';

let inititialState = {
  posts: [
    { id: 1, message: "Hi I'm Budda", likeCount: 10 },
    { id: 2, message: 'How are u?', likeCount: 10 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = inititialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter((p) => p.id !== action.id)],
      };

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SAVE_PHOTOSUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    case SAVE_PROFILESUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (userId) => ({ type: DELETE_POST, userId });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTOSUCCESS,
  photos,
});
export const saveProfileSuccess = (profile) => ({
  type: SAVE_PROFILESUCCESS,
  profile,
});

export const getStatus = (userId) => async (dispatch) => {
  let data = await profileApi.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
  let data = await profileApi.updateStatus(status);

  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let data = await profileApi.savePhoto(file);

  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};

export const getUserProfile = (userId) => async (dispatch) => {
  let data = await profileApi.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  let response = await profileApi.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit('edit-profile', { _error: response.data.message[0] }));
    return Promise.reject(response.data.message[0]);
  }
};

export default profileReducer;
