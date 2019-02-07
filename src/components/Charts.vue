<template>
  <section class="charts">
    <h2>Nutritions</h2>
    <div class="details-data">{{ chartData }}</div>

    <bar-chart 
      height="200px"
      :colors="['#666']"
      :data="[
        ['Norm Protein', (this.whoNorms.Protein),],
        ['Protein', (this.chartData.Protein)],
        ['Norm Fat', (this.whoNorms.Fat)],
        ['Fat', (this.chartData.Fat)],
        ['Norm Carbs', (this.whoNorms.Carbs)],
        ['Carbs', (this.chartData.Carbs)],
      ]"
      ></bar-chart>
  </section>
</template>

<style lang="stylus">
.charts
  &-title
    text-align center
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
          if(!a[i + 1]) Object.keys(e)
            .filter(k => typeof e[k] == 'string')
            .forEach(k => r[k] /= myData.length)
            return r;
        }, {})
      this.chartData = result;
    },
  },
};
</script>
