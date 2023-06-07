import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://img3.goodfon.com/original/640x480/5/c8/zima-sneg-derevya-iney-nebo.jpg" />
      </div>
      <div className={s.descriptionBlock}>Ava + description</div>
    </div>
  );
};

export default ProfileInfo;
