<template>
  <v-app>
    <v-system-bar app>
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>

    <Drawer />

    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Demo</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-alert border="left" color="indigo" dark>
        I'm an alert with a border left type info
      </v-alert>

      <router-link />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Drawer from '@/components/Drawer.vue';

@Component({
  components: {
    Drawer,
  }
})
export default class App extends Vue {
  created() {
    console.log("A");
  }
}
</script>
