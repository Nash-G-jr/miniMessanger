import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux/es/exports';
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
} from '../../Redux/profileReducer';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import withRouter from '../../withRouter/withRouter';

let ProfileContainer = ({
  profile,
  status,
  updateStatus,
  authorizedUserId,
  getUserProfile,
  getStatus,
  savePhoto,
}) => {
  let { userId } = useParams();

  if (!userId) {
    userId = authorizedUserId;
  }

  useEffect(() => {
    getUserProfile(userId);
  }, [getUserProfile, userId]);

  useEffect(() => {
    getStatus(userId);
    return () => {};
  }, [getStatus, userId]);

  return (
    <div>
      <Profile
        isOwner={userId === authorizedUserId}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
      />
    </div>
  );
};
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
  }),
  withAuthRedirect,
)(ProfileContainer);
