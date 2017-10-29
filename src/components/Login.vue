<template>
<div class="login">
  <md-theme md-name="purple">
    <md-whiteframe md-elevation="2">
      <md-toolbar>
        <h1 class="md-title"> Login</h1>
      </md-toolbar>
      <form novalidate @submit.stop.prevent="submit">
        <div class="wrapper">
          <md-input-container>
            <label>Email</label>
            <md-input v-model="email"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Password</label>
            <md-input v-model="password" type="password"></md-input>
          </md-input-container>
        </div>
        <md-button @click="login()" class="md-primary">Login</md-button>
      </form>
    </md-whiteframe>
  </md-theme>

</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: 'jonatas+admin@binds.co',
      password: ''
    };
  },
  methods: {
    login() {
      this.$store.dispatch('LOGIN', {
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push("/")
      });
    }
  }
};
</script>

<style scoped>
.login-card {}

.login .md-whiteframe {
  width: 500px;
  margin: -16px auto;
  background: white;
}

.wrapper {
  padding: 16px;
}
</style>
