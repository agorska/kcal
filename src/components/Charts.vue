<template>
  <section class="charts">
    <h2 class="charts-title">Nutritions</h2>
      <section class="charts-main">
      <bar-chart
        height="200px"
        :colors="['#d8d8d8']"
        :data="[
          ['Norm Protein', (whoNorms.Protein)],
          ['Protein', (chartData.Protein)],
          ['Norm Fat', (whoNorms.Fat)],
          ['Fat', (chartData.Fat)],
          ['Norm Carbs', (whoNorms.Carbs)],
          ['Carbs', (chartData.Carbs)],
        ]"
        ></bar-chart>
      </section>

      <section class="charts-details">
        <div class="charts-details__item" v-for="(value, key) in whoNorms" :key="value.id">
        <pie-chart
          responsive= "true"
          donut="true"
          :legend="false"
          :colors="['#ff3d00', '#d8d8d8']"
          :data="[[(key), getChartValue(key)], ['Left', (value - getChartValue(key))]]">
        </pie-chart>
        </div>
      </section>
  </section>
</template>

<style lang="stylus">
.charts
  &-title
    text-align center
  &-details
    height 100%
    display: grid;
    grid-template-columns: 1fr 1fr 1fr
    grid-template-rows: 1fr
    grid-template-areas: ". . ."
</style>

<script>
import { EventBus } from './event-bus';

export default {
  name: 'charts',
  data() {
    return {
      eatenDetailedList: [],
      chartData: '',
      num: 3,
      whoNorms: {
        Protein: 80,
        Fat: 80,
        Carbs: 340,
        Water: 2500,
        Calcium: 1300,
        Iron: 11,
        Magnesium: 410,
        Potassium: 4700,
        Sodium: 1500,
        Zinc: 11,
        'Vit. A': 900,
        'Vit. D': 600,
        'Vit. C': 90,
        'Vit. B6': 1.3,
        'Vit. B12': 2.4,
        'Vit. K': 120,
        'Vit. E': 15,
      },
    };
  },
  mounted() {
    EventBus.$on('toCalc', (eatenDetailedList) => {
      this.eatenDetailedList = eatenDetailedList;
      this.sumObjectsByKey();
    });
    EventBus.$on('updateCharts', (n) => {
      (this.eatenDetailedList).splice(n, 1);
      this.sumObjectsByKey();
    });
  },
  methods: {
    sumObjectsByKey() {
      const myData = this.eatenDetailedList;
      const keys = (Object.keys(this.whoNorms));
      const result = myData.reduce((r, e, i, a) => {
        keys.forEach(k => r[k] = (r[k] || 0) + parseInt(e[k]));
        if (!a[i + 1]) Object.keys(e)
          .filter(k => typeof e[k] === 'string')
          .forEach(k => r[k] /= myData.length);
        return r;
      }, {});
      this.chartData = result;
    },
    getChartValue(getKey) {
      if (
        isNaN(this.chartData[getKey])
        || this.chartData[getKey] === undefined
        || this.chartData[getKey] === '') {
        return 0;
      }
      return this.chartData[getKey];
    },
  },
};
</script>
