import * as types from '../mutation-types'
import api from '../api';
import localStorage from '../localStorage';
const state = {
};

const getters = { };

const mutations = { };
const actions = {
  [types.LOGIN]({commit}, payload) {
    return api
      .post('/login', payload)
      .then(response => {
        localStorage.set('authToken', response.data.token);
      })
      .catch(e => {});
  },
  [types.LOGOUT]({commit}) {
    //TODO learn a way to remove the key from localStorage
    localStorage.set('authToken', false);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
