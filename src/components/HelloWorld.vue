<template>
<div class="hello">
  <md-list>
    <md-list-item @click="openDialog('dialog1')" v-for="survey in surveys" :key="survey._id">
      <span>{{survey.title}}</span>
      <md-divider></md-divider>
    </md-list-item>
  </md-list>
  <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog1">
    <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>

    <md-dialog-content>Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="closeDialog('dialog1')">Cancel</md-button>
      <md-button class="md-primary" @click="closeDialog('dialog1')">Ok</md-button>
    </md-dialog-actions>
  </md-dialog>


  <md-button class="md-primary md-raised"
    id="custom" @click="openDialog('dialog1')">Custom</md-button>
</div>
</template>

<script>
import api from '../api';
export default {
  name: 'HelloWorld',
  data() {
    return {
      surveys: []
    };
  },
  created() {
    this.loadSurveys();
  },
  methods: {
    loadSurveys() {
      return api.get('/surveys').then(function (doc) {
        this.surveys = doc.data;
      }.bind(this));
    },
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    }
  }
};
</script>

<style scoped>

</style>
