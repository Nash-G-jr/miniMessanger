import React from 'react';
import { addPost, updateNewPostText } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux/es/exports';

let mapStateToprops = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
// let dispatchStateToprops = (dispatch) => {
//   return {
//     addPost: () => {
//       dispatch(addPostActionCreator());
//     },
//     updateOnPostChange: (text) => {
//       let action = updateNewPostTextActionCreator(text);
//       dispatch(action);
//     },
//   };
// };

// const MyPostsContainer = connect(
//   mapStateToprops,
//   dispatchStateToprops,
// )(MyPosts);

// export default MyPostsContainer;

export default connect(mapStateToprops, { addPost, updateNewPostText })(
  MyPosts,
);
