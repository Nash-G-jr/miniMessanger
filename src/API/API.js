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
    return instance.get(`auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const profileApi = {
  getProfile(userId) {
    return instance
      .get(`profile/` + userId, {})
      .then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/` + userId, {})
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then((response) => response.data);
  },
  savePhoto(photoFile) {
    var formData = new FormData();
    formData.append('image', photoFile);
    return instance
      .put(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data);
  },
};
