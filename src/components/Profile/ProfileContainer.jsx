import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux/es/exports';
import { setUserProfile } from '../../Redux/profileReducer';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

let ProfileContainer = (props) => {
  let { userId } = useParams();
  if (!userId) {
    userId = 2;
  }

  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        props.setUserProfile(response.data);
      });
  }, [userId]);

  return (
    <div>
      <Profile profile={props.profile} />
    </div>
  );
};
let mapStateToProps = (state) => ({ profile: state.profilePage.profile });

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
