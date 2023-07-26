import React from 'react';
import { connect } from 'react-redux/es/exports';
import {
  followSuccess,
  setCurrentPage,
  unfollowSuccess,
  toggleFollowingProgress,
  getUsers,
} from '../../Redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';
import {
  getUsersFromBLL,
  getCurrentPage,
  getPageSize,
  getTotalUsersCount,
  getIsFetching,
  getFollowingProgress,
} from '../../Redux/usersSelector';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingProgress={this.props.followingProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersFromBLL(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow: followSuccess,
    unfollow: unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  }),
)(UsersContainer);
