import { profileApi } from '../API/API';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

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

export const getUserProfile = (userId) => async (dispatch) => {
  let data = await profileApi.getProfile(userId);
  dispatch(setUserProfile(data));
};

export default profileReducer;

//const profileReducer = (state = inititialState, action) => {
//  switch (action.type) {
//    case ADD_POST: {
//      let newPost = {
//       id: 5,
//       message: state.newPostText,
//       likeCount: 0,
//    };
//    let stateCopy = { ...state };
//   stateCopy.posts = [...state.posts];
//   stateCopy.posts.push(newPost);
//  stateCopy.newPostText = '';
//    return stateCopy;
//  }
// case UPDATE_NEW_POST_TEXT: {
//    let stateCopy = { ...state };
//   stateCopy.newPostText = [...state.newPostText];
//
//   stateCopy.newPostText = action.newText;
//   return stateCopy;
// }
//  default:
//   return state;
// }
//};
