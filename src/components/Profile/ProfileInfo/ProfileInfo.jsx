import React from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div>
        <img src="https://img3.goodfon.com/original/640x480/5/c8/zima-sneg-derevya-iney-nebo.jpg" />
      </div> */}

      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div> {props.profile.aboutMe}</div>
        <div>{props.profile.contacts.facebook}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
