<template>
  <div>
    <mainData :eatenDetailedList="eatenDetailedList"></mainData>
    <detailsData></detailsData>
  </div>
</template>

<script>
import mainData from '@/components/Main-data.vue';
import detailsData from '@/components/Details-data.vue';
import { EventBus } from './event-bus.js';

export default {
  name: 'charts',
  data() {
    return {
      eatenDetailedList: {},
      whoNorms: {
        Protein: 60,
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
  components: {
    mainData,
    detailsData,
  },
  mounted() {
    EventBus.$on('toCalc', eatenDetailedList => {
      this.eatenDetailedList = eatenDetailedList;
      this.translateIds();
    });
  },
  methods: {
    sumObjectsByKey(objs) {
      return objs.reduce((a, b) => {
        for (const k in b) {
          if (b.hasOwnProperty(k)) {
            a[k] = (a[k] || 0) + b[k];
          }
        }
        return a;
      }, {});
    },
  },
};
</script>
