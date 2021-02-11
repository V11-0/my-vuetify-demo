<style scoped>
.opacity36 {
  background-color: rgba(0, 0, 0, 0.36);
}
</style>
<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <h1 class="ma-8">This is an about page</h1>
      <v-spacer></v-spacer>
    </v-row>

    <v-row class="ma-8">
      <v-spacer></v-spacer>
      <p>Thanks</p>
      <v-spacer></v-spacer>
    </v-row>

    <v-row>
      <v-divider></v-divider>
    </v-row>

    <v-row>
      <v-col v-for="i in 3" :key="i">
        <v-hover close-delay="200" v-slot="{ hover }">
          <v-sheet
            class="d-flex ma-8"
            :color="`${sheetColors[i - 1]}`"
            height="250"
          >
            <v-expand-transition mode="in-out">
              <v-sheet
                v-if="hover"
                class="mt-auto align-center justify-center d-flex px-2 opacity36"
                height="50"
                width="100%"
              >
                {{ sheetColors[i - 1] }}
              </v-sheet>
            </v-expand-transition>
          </v-sheet>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class About extends Vue {
  sheetColors = ["orange", "blue", "purple"];
}
</script>
