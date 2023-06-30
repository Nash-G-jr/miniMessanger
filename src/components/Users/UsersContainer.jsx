import React from 'react';
import Users from './Users';
import { connect } from 'react-redux/es/exports';
import { followAC, setUsersAC, unfollowAC } from '../../Redux/usersReducer';
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
let dispatchStateToProps = (dispatch) => {
  return {
    follow: (usersId) => {
      dispatch(followAC(usersId));
    },
    unfollow: (usersId) => {
      dispatch(unfollowAC(usersId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, dispatchStateToProps)(Users);

export default UsersContainer;
