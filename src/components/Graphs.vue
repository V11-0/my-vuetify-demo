<template>
  <div>
    <v-card
      elevation="8"
      shaped
      light
      class="mb-8"
      :loading="this.$parent.loading"
    >
      <v-card-title>Charts</v-card-title>
      <v-row>
        <v-col sm="8">
          <GChart
            :settings="{ packages: ['annotationchart'] }"
            type="AnnotationChart"
            :data="chartData"
            :options="chartOptions"
          />
        </v-col>
        <v-col sm="4">
          <GChart
            type="PieChart"
            :data="pieChartData"
            :options="pieChartOptions"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="6">
          <GChart
            type="ColumnChart"
            :data="columnChartData"
            :options="columnChartOptions"
          />
        </v-col>
        <v-col sm="6">
          <GChart
            :settings="{ packages: ['gauge'] }"
            type="Gauge"
            :data="gaugeData"
            :options="gaugeOptions"
          />
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col sm="8" offset-sm="2">
        <GChart
          :settings="{ packages: ['wordtree'] }"
          type="WordTree"
          :data="wordData"
          :options="wordOptions"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12">
        <GChart
          :settings="{ packages: ['sankey'] }"
          type="Sankey"
          :data="sankeyData"
          :options="sankeyOptions"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { GChart } from "vue-google-charts";

@Component({
  components: {
    GChart
  }
})
export default class Graph extends Vue {
  chartData = [] as any;
  chartOptions = {
    title: "Gráfico Teste",
    subtitle: "Using Vue",
    animation: {
      startup: true,
      duration: 500,
      easing: "out"
    }
  };

  pieChartData = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7]
  ];
  pieChartOptions = {
    title: "Gráfico de Pizza",
    backgroundColor: { fill: "transparent" }
  };

  columnChartData = [] as any;
  columnChartOptions = {
    backgroundColor: { fill: "transparent" }
  };

  gaugeData = [
    ["Label", "Value"],
    ["Memory", 69],
    ["CPU", 86],
    ["Network", 97]
  ];

  gaugeOptions = {
    animation: {
      startup: true,
      duration: 800,
      easing: "linear"
    },
    width: 600,
    height: 180,
    redFrom: 85,
    redTo: 100,
    yellowFrom: 75,
    yellowTo: 85,
    greenFrom: 0,
    greenTo: 75,
    minorTicks: 5
  };

  wordData = [
    ["Phrases", "size", "value"],
    ["It is an example", 1, 8],
    ["It is cool", 1, 10],
    ["It is Vue with TypeScript", 1, 6],
    ["It is Vue with Vuetify", 1, 8],
    ["It is Vuetify", 1, 10],
    ["It is TypeScript", 1, 4],
    ["It was JavaScript", 1, 3],
    ["It was Python", 1, 8],
    ["It was not Vue", 1, 10],
    ["It is web", 1, 10],
    ["It is Windu", 1, 1],
    ["It is sadly not a penguin", 1, 10],
    ["It is a test", 1, 10],
    ["It is a nice language", 1, 2],
    ["It is a nice framework", 1, 10],
    ["It is an admirable framework", 1, 10],
    ["It is very cool", 1, 10],
    ["It is very nice", 1, 3],
    ["It will be nice", 1, 7],
    ["It will be worked on 'til next 15 days", 1, 10],
    ["It will be beautiful", 1, 3],
    ["It will be an example", 1, 3]
  ];

  wordOptions = {
    wordtree: {
      format: "implicit",
      word: "It",
      colors: ["#FF0000", "#FFFFFF", "#00FF00"]
    },
    backgroundColor: "transparent"
  };

  sankeyData = [
    ["From", "To", "Weight"],
    ["Linux", "Debian", 6],
    ["Linux", "Arch", 1],
    ["Linux", "Android", 1],
    ["Debian", "Ubuntu", 4],
    ["Debian", "Rasbian", 1],
    ["Debian", "MintDE", 1],
    ["Ubuntu", "Mint", 1],
    ["Ubuntu", "PopOS", 1],
    ["Ubuntu", "Elementary", 1],
    ["Ubuntu", "Deepin", 1],
    ["Android", "CyanogenMod", 1],
    ["CyanogenMod", "Lineage OS", 1],
    ["Arch", "Manjaro", 1],
    ["Linux", "Gentoo", 1],
    ["Gentoo", "Chrome OS", 1]
  ];

  colors = [
    "#a6cee3",
    "#b2df8a",
    "#fb9a99",
    "#fdbf6f",
    "#cab2d6",
    "#ffff99",
    "#1f78b4",
    "#33a02c"
  ];

  sankeyOptions = {
    sankey: {
      node: {
        colors: this.colors
      },
      link: {
        colorMode: "gradient",
        colors: this.colors
      }
    }
  };

  created() {
    this.chartData[0] = ["Day", "Sales", "Expenses", "Profit"];
    for (let i = 1; i < 30; i++) {
      const a = Math.floor(Math.random() * 3000000) * i;
      const b = Math.floor(Math.random() * 3000000) * (i - i / 2);
      const c = a - b;
      this.chartData[i] = [new Date(`2020-12-${i}`), a, b, c];
    }

    this.columnChartData = this.chartData;
  }
}
</script>
