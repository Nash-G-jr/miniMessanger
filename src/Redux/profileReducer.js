const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let inititialState = {
  posts: [
    { id: 1, message: "Hi I'm Budda", likeCount: 10 },
    { id: 2, message: 'How are u?', likeCount: 10 },
  ],
  newPostText: '',
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
    default:
      return state;
  }
};

export const addPost = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostText = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
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
