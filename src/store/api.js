import axios from 'axios';
import localStorage from './localStorage';
import store from './index.js';

const instance = axios.create({
  baseURL: 'https://app.binds.co/api',
  timeout: 10000,
  headers: {'Content-Type': 'application/json'}
});

axios.interceptors.request.use = instance.interceptors.request.use;
instance.interceptors.request.use(
  config => {
    if (localStorage.get('authToken')) {
      config.headers.Authorization = `Bearer ${localStorage.getToken()}`.replace(
        /(^\")|(\"$)/g,
        ''
      );
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (401 === err.response.status) {
      store.dispatch('LOGOUT');
      window.location = '/login';
    } else {
    return Promise.reject(err);
    }
  }
);

export default instance;
