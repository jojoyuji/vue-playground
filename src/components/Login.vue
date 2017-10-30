<template>
<div class="login">
  <v-card color="grey lighten-4" flat>
    <v-card-text>
      <v-container fluid>
        <v-layout column>
          <v-flex >
            <div class="pa-2">
              <v-text-field v-model="email" name="email" label="Email" type="email" id="email"></v-text-field>
              <v-text-field v-model="password" name="password" label="Password" type="password" id="password"></v-text-field>
            </div>
          </v-flex>
          <v-btn flat color="primary" @click="login()">Enviar</v-btn>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>

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
</style>
