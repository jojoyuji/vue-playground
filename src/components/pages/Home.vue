<template>
  <v-layout column>
    <h1>Home here</h1>
  </v-layout>
</template>

<script>
import api from '@/store/api';
import Velocity from 'velocity-animate';
export default {
  name: 'Home',
  data() {
    return {
      loading: true,
      surveys: []
    };
  },
  activated() {
    this.loadSurveys();
  },
  methods: {
    loadSurveys() {
      this.loading = true;
      return api.get('/surveys').then((doc) => {
        setTimeout(() => {
          this.loading = false;
          this.surveys = doc.data;
        }, 0)
      });
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el, { height: '56px' }, { complete: done }
        )
      }, delay)
      setTimeout(function () {
        Velocity(
          el, { opacity: 1 }, { complete: done }
        )
      }, delay)
    },
    leave(el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el, { opacity: 0, height: 0 }, { complete: done }
        )
      }, delay)
    }
  },
};
</script>

<style scoped>

</style>
