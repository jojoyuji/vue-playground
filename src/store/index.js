import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';
import localStorage from './localStorage';

import login from '@/store/modules/login'
import surveys from '@/store/modules/surveys'

Vue.use(Vuex);

const state = {};
const mutations = {
  //login(state, {token}) {
    //localStorage.set('authToken', token);
  //},
  //logout(state) {
    //localStorage.set('authToken', false);
  //}
};
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const actions = {
  //[LOGIN]({commit}, payload) {
    //return api
      //.post('/login', payload)
      //.then(response => {
        //commit('login', response.data);
      //})
      //.catch(e => {});
  //},
  //[LOGOUT]({commit}) {
    //commit('logout');
  //}
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    login,
    surveys
  }
});
