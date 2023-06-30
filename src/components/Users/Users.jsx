import React from 'react';
import s from './Users.module.css';
let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        fullName: 'Luka',
        photoUrl:
          'https://avatars.mds.yandex.net/i?id=ab2cb806998d8b78e4e3ec3a469226af628859a6-9147032-images-thumbs&n=13',
        status: 'Rifler/UGL',
        location: { city: 'Tbilisi', country: 'Georgia' },
      },
      {
        id: 2,
        followed: true,
        fullName: 'Kostya',
        photoUrl:
          'https://avatars.mds.yandex.net/i?id=ab2cb806998d8b78e4e3ec3a469226af628859a6-9147032-images-thumbs&n=13',
        status: 'Sniper',
        location: { city: 'Saint-Petersburg', country: 'Russia' },
      },
      {
        id: 3,
        followed: false,
        fullName: 'Andrew',
        photoUrl:
          'https://avatars.mds.yandex.net/i?id=ab2cb806998d8b78e4e3ec3a469226af628859a6-9147032-images-thumbs&n=13',
        status: 'Support/IGL',
        location: { city: 'Saint-Petersburg', country: 'Russia' },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={s.photo} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
