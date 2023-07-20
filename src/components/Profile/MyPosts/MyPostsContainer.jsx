import React from 'react';
import { addPost } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux/es/exports';

let mapStateToprops = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPost(newPostText));
    },
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(MyPosts);
