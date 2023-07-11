import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': 'f3a6556b-d0ee-4283-81df-1394923779fa',
  },
});

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {})
      .then((response) => response.data);
  },
  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data.resultCode);
  },
  follow(userId) {
    return instance
      .post(`follow/${userId}`, {})
      .then((response) => response.data.resultCode);
  },
};

export const headerApi = {
  authentication() {
    return instance
    .get(`/auth/me`)
    .then((response) => response.data);
  },
};
