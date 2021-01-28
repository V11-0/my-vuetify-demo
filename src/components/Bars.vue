<template>
  <v-app-bar
    app
    dense
    max-height="48"
    :color="`grey ${$vuetify.theme.dark ? 'darken-4' : 'lighten-4'}`"
  >
    <v-app-bar-nav-icon @click="$emit('drawer')"></v-app-bar-nav-icon>

    <v-toolbar-title> {{ currentRoute }} </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon color="orange" @click="toggleDarkMode">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Bars extends Vue {
  toggleDarkMode() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  }

  get currentRoute() {
    return this.$route.name;
  }
}
</script>
