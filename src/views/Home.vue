<template>
  <div>
    <v-container>
      <v-row v-for="i in 6" :key="i" class="d-flex justify-space-around mt-6">
        <v-chip v-for="j in 3" :key="j" color="primary" outlined link>
          <v-icon left> mdi-server-plus </v-icon>
          I am a chip
        </v-chip>
      </v-row>

      <v-row class="d-flex justify-center mx-4">
        <v-col sm="12">
          <v-alert
            type="success"
            :color="alertColor"
            text
            border="left"
            class="my-10"
          >
            Flying Forever is so hard to set things free<br />
            Flying Forever and this...<br /><br />

            Flying Forever I'm too far away to see<br />
            Flying Forever I wait while you fly free.
          </v-alert>
        </v-col>
      </v-row>

      <v-row class="mb-4"> Here we have a Parallax </v-row>
    </v-container>

    <v-row>
      <v-col sm="12">
        <v-parallax
          height="400"
          src="https://wallpapertag.com/wallpaper/full/4/d/0/354569-blur-background-1920x1200-desktop.jpg"
        ></v-parallax>
      </v-col>
    </v-row>

    <div class="pa-6 text-center">Scroll down</div>

    <v-responsive height="200vh" class="text-center pa-2">
      <v-responsive min-height="50vh"></v-responsive>
      <div class="text-center body-2 mb-12">
        The card will appear below:
      </div>

      <v-lazy min-height="200" transition="fade-transition">
        <v-card class="mx-auto" max-width="500">
          <v-card-title>Card title</v-card-title>

          <v-card-text>
            Phasellus magna. Quisque rutrum. Nunc egestas, augue at pellentesque
            laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.
            Aliquam lobortis. Quisque libero metus, condimentum nec, tempor a,
            commodo mollis, magna. In turpis. In dui magna, posuere eget,
            vestibulum et, tempor auctor, justo. In turpis. Pellentesque dapibus
            hendrerit tortor. Ut varius tincidunt libero.
          </v-card-text>
        </v-card>
      </v-lazy>
    </v-responsive>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Home extends Vue {
  colors = [
    "red",
    "pink",
    "purple",
    "deep-purple",
    "indigo",
    "blue",
    "light-blue",
    "cyan",
    "teal",
    "green",
    "light-green",
    "lime",
    "yellow",
    "amber",
    "orange",
    "deep-orange",
    "brown",
    "blue-grey"
  ];

  alertColor = "blue";

  mounted() {
    setInterval(() => {
      this.alertColor = this.colors[
        Math.floor(Math.random() * this.colors.length)
      ];
    }, 450);
  }
}
</script>
