import * as types from '../mutation-types';
import api from '../api';
const state = {
  surveyList: [],
  loading: false
};

const getters = {
  getSurveys: state => state.surveyList
};

const actions = {
  loadSurveys({commit}) {
    commit('LOADING_SURVEYS', {value: true});
    return api.get('/surveys').then(doc => {
      setTimeout(() => {
        commit('LOADING_SURVEYS', {value: false});
        commit('SURVEYS_LIST', doc);
      }, 10);
    });
  }
};

const mutations = {
  ['SURVEYS_LIST'](state, {data}) {
    state.surveyList = data;
  },
  ['LOADING_SURVEYS'](state, {value}) {
    state.loading = value;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
