<template>
<div id="app">
  <md-toolbar>
    <h1 class="md-title">app test</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
  </md-toolbar>

  <div class="main-content">
    <router-view />
  </div>
</div>
</template>

<script>
import localStorage from './localStorage'
export default {
  name: 'app',
  data() {
    return {
      isLoggedIn: false
    }
  }
}
</script>

<style lang="stylus">
#app {
}
</style>
