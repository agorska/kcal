<template>
    <div>
        <input
            type="text"
            placeholder="Grams"
            v-model="predictor"
        />
        <input
            type="button"
            value="Add"
            @click="addToCalculation(); addToListEaten()"
        />
        <calculator
            :toCalc = "toCalc"
            :predictor = "predictor"
        />
        <h3>Eaten:</h3>
        <ul>
          <li v-for="(item, index) in listEaten" :key="item.id">
            {{ item }}
            <button @click="removeEaten(index);">-</button>
          </li>
        </ul>
        <norms
          :whoNorms="whoNorms"
        />
    </div>
</template>

<script>
import calculator from '@/components/Calculator.vue';
import norms from '@/components/Norms.vue';
import { translateIds } from '@/functions';

export default {
  name: 'eaten',
  props: ['filteredIds', 'allDetails'],
  components: {
    calculator,
    norms,
  },
  data() {
    return {
      predictor: '',
      toCalc: [],
      listEaten: [],
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
  methods: {
    calcPerPredictor(value, weight) {
      return (value * this.predictor) / weight;
    },
    addToCalculation() {
      const obj = {};
      obj.weight = this.allDetails[0].serving_weight_grams;
      // Assign keys and proper values, based on predictor
      for (let i = 0; i < this.filteredIds.length; i += 1) {
        obj[translateIds(this.filteredIds[i].attr_id)] = this.calcPerPredictor(this.filteredIds[i].value, obj.weight);
      }
      this.toCalc.push(obj);
    },
    addToListEaten() {
      this.listEaten.push(this.allDetails[0].food_name);
    },
    removeEaten(n) {
      this.listEaten.splice(n, 1);
      this.toCalc.splice(n, 1);
    },
  },
};
</script>
