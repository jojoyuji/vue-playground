<template>
  <v-layout column>
    <div xs12 class="pa-0 elevation-2">
      <transition name="fade">
        <v-progress-linear class="mt-0 mb-0" v-show="loading" v-bind:indeterminate="true"></v-progress-linear>
      </transition>
      <v-list fill class="pt-0">
        <transition-group name="fadeLeft" tag="div" v-on:before-enter="beforeEnter" v-on:enter="enter">
          <div v-for="(survey, index) in surveys" :key="survey._id">
            <v-list-tile ripple avatar @click="">
              <v-list-tile-content>
                <v-list-tile-title v-html="survey.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider v-if="index + 1 < surveys.length" :key="survey._id"></v-divider>
          </div>
        </transition-group>
      </v-list>
    </div>
  </v-layout>
</template>

<script>
import api from '../api';
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
      return api.get('/surveys').then(function (doc) {
        setTimeout(function () {
          this.loading = false;
          this.surveys = doc.data;
        }.bind(this), 0)
      }.bind(this));
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
