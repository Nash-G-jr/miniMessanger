import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        //posts={props.profilePage.posts}
        //dispatch={props.dispatch}
        //newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
