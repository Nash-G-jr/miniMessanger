import React from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.jpg';
import { useState } from 'react';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        {editMode ? (
          <ProfileDataForm profile={profile} />
        ) : (
          <ProfileData profile={profile} />
        )}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

const ProfileDataForm = ({ profile }) => {
  return (
    <div>
      <div>
        <b>Full Name: </b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills:</b>
          {profile.lookingForAJobDescription}
        </div>
      )}

      <div>
        <b>About me: </b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacnts: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contacts contactTitle={key} contactValue={profile.contacts[key]} />
          );
        })}
      </div>
    </div>
  );
};

const ProfileData = ({ profile }) => {
  return (
    <div>
      <div>
        <b>Full Name: </b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills:</b>
          {profile.lookingForAJobDescription}
        </div>
      )}

      <div>
        <b>About me: </b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacnts: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contacts contactTitle={key} contactValue={profile.contacts[key]} />
          );
        })}
      </div>
    </div>
  );
};
const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}: </b>
      {contactValue}
    </div>
  );
};

export default ProfileInfo;
