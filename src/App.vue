<template>
<div id="app">
  <v-app id="inspire">
    <v-toolbar color="blue-grey" dark fixed app clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>binds.co</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer persistent v-model="drawer" enable-resize-watcher app>

      <v-list dense>

        <v-list-tile router to="/" exact>
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile router to="surveys" exact>
          <v-list-tile-action>
            <v-icon>mdi-emoticon-happy</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Surveys</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile router to="login">
          <v-list-tile-action>
            <v-icon>mdi-login-variant</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logout()">
          <v-list-tile-action >
            <v-icon>mdi-login-variant</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


      </v-list>
    </v-navigation-drawer>
    <main>
      <v-content>
        <v-container fluid fill-height>
          <v-layout>
            <transition name="fade">
              <keep-alive>
                <router-view />
              </keep-alive>
            </transition>
          </v-layout>
        </v-container>
      </v-content>
    </main>
    <v-footer color="blue-grey" class="white--text" app>
      <span>binds.co</span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>

</div>
</template>

<script>
import localStorage from './store/localStorage'

export default {
  name: 'app',
  data() {
    return {
      drawer: true,
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('LOGOUT');
    }
  }
}
</script>

<style lang="stylus">
#app {
}
 .fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
