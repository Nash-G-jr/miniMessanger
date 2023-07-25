import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux/es/exports';
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from '../../Redux/profileReducer';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

let ProfileContainer = (props) => {
  let { userId } = useParams();
  if (!userId) {
    userId = props.authorizedUserId;
  }

  useEffect(() => {
    props.getUserProfile(userId);
  }, [userId]);

  useEffect(() => {
    props.getStatus(userId);
  }, [userId]);

  return (
    <div>
      <Profile
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
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
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withAuthRedirect,
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// export default connect(mapStateToProps, { getUserProfile })(
//   AuthRedirectComponent,
// );
