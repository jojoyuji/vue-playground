<template>
<div id="app">
  <v-app id="inspire">
    <v-toolbar color="blue-grey" dark fixed app clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>binds.co</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <SideNav :show="drawer"></SideNav>
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
    <!--<v-footer color="blue-grey" class="white--text" app>-->
      <!--<span>binds.co</span>-->
      <!--<v-spacer></v-spacer>-->
      <!--<span>&copy; 2017</span>-->
    <!--</v-footer>-->
  </v-app>

</div>
</template>

<script>
import localStorage from './store/localStorage'
import SideNav from '@/components/SideNav'

export default {
  name: 'app',
  data() {
    return {
      drawer: true,
    }
  },
  components: {SideNav}
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
