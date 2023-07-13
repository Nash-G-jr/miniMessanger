import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux/es/exports';
import { getUserProfile } from '../../Redux/profileReducer';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

let ProfileContainer = (props) => {
  let { userId } = useParams();
  if (!userId) {
    userId = 2;
  }

  useEffect(() => {
    props.getUserProfile(userId);
  }, [userId]);

  return (
    <div>
      <Profile profile={props.profile} />
    </div>
  );
};
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
  AuthRedirectComponent,
);
