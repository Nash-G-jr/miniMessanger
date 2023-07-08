const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let inititialState = {
  posts: [
    { id: 1, message: "Hi I'm Budda", likeCount: 10 },
    { id: 2, message: 'How are u?', likeCount: 10 },
  ],
  newPostText: '',
  profile: null,
};

const profileReducer = (state = inititialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: [action.newText],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

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
