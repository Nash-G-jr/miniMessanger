import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../../src/assets/images/user.jpg';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.getCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize,
    );

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    debugger;
    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && s.pageName}
                onClick={(e) => this.onPageChanged(p)}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={s.photo}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;

// [
//   {
//     id: 1,
//     followed: false,
//     fullName: 'Luka',
//     photoUrl:
//       'https://avatars.mds.yandex.net/i?id=ab2cb806998d8b78e4e3ec3a469226af628859a6-9147032-images-thumbs&n=13',
//     status: 'Rifler/UGL',
//     location: { city: 'Tbilisi', country: 'Georgia' },
//   },
//   {
//     id: 2,
//     followed: true,
//     fullName: 'Kostya',
//     photoUrl:
//       'https://avatars.mds.yandex.net/i?id=ab2cb806998d8b78e4e3ec3a469226af628859a6-9147032-images-thumbs&n=13',
//     status: 'Sniper',
//     location: { city: 'Saint-Petersburg', country: 'Russia' },
//   },
//   {
//     id: 3,
//     followed: false,
//     fullName: 'Andrew',
//     photoUrl:
//       'https://avatars.mds.yandex.net/i?id=ab2cb806998d8b78e4e3ec3a469226af628859a6-9147032-images-thumbs&n=13',
//     status: 'Support/IGL',
//     location: { city: 'Saint-Petersburg', country: 'Russia' },
//   },
// ];
