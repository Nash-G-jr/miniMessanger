import React from 'react';
import Users from './Users';
import { connect } from 'react-redux/es/exports';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from '../../Redux/usersReducer';
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    getCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, dispatchStateToProps)(Users);

export default UsersContainer;
