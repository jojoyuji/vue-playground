// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store';

//VueMaterial
//
//import VueMaterial from 'vue-material';
//import 'vue-material/dist/vue-material.css';
//Vue.use(VueMaterial);

//Vuetify
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify);

import 'mdi/css/materialdesignicons.css'


//import 'vue2-animate/dist/vue2-animate.min.css';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
