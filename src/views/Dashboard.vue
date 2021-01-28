<template>
  <div class="dashboard">
    <v-container>
      <Graphs />
    </v-container>

    <v-divider class="ma-4"></v-divider>

    <v-container v-if="loading">
      <v-skeleton-loader
        class="mx-auto"
        type="article, card"
      ></v-skeleton-loader>
    </v-container>

    <v-carousel v-else v-model="model" height="325">
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-banner v-model="showBanner" single-line transition="slide-y-transition">
      <v-icon slot="icon" color="warning" size="36"> mdi-alert </v-icon>
      This is a banner
      <template v-slot:actions="{ dismiss }">
        <v-btn text color="primary" @click="dismiss"> Dismiss </v-btn>
      </template>
    </v-banner>

    <v-container>
      <v-timeline>
        <v-timeline-item
          v-for="(tli, i) in years"
          :key="tli.year"
          small
          :color="tli.color"
        >
          <template v-slot:opposite>
            <span
              :class="`headline ${tli.color}--text`"
              v-text="tli.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${tli.color}--text`">
              Lorem ipsum dolor sit amet
            </h2>
            <div>
              <v-card elevation="2" class="pa-2 rounded-xl">
                <v-card-title
                  >I'm the card nº {{ i }} from the year
                  {{ tli.year }}</v-card-title
                >
                <v-card-subtitle
                  >He's card nº {{ i }} from the year
                  {{ tli.year }}</v-card-subtitle
                >
                <v-card-text>
                  "Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum."
                </v-card-text>
              </v-card>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>

      <h2 class="headline font-weight-light mb-4 red--text text-center">
        Ende
      </h2>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { TimelineItem } from "@/models/TimelineItem.ts";
import Graphs from "@/components/Graphs.vue";

@Component({
  components: {
    Graphs
  }
})
export default class Dashboard extends Vue {
  model = 0;
  colors = [
    "green",
    "blue",
    "red",
    "orange",
    "pink",
    "purple",
    "indigo",
    "deep-purple",
    "lime",
    "yellow",
    "amber",
    "blue-grey",
    "deep-orange"
  ];

  loading = true;
  showBanner = true;

  years = new Array<TimelineItem>();

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }

  created() {
    for (let i = 0; i <= 20; i++) {
      const tli = new TimelineItem(
        2021 - i,
        this.colors[this.getRandomInt(this.colors.length)]
      );
      this.years[i] = tli;
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
</script>
