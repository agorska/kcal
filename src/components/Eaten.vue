<template>
    <div>
        <input
            type="text"
            placeholder="Grams"
            v-model="predictor"
            @input="handleInput()"
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
            {{ item }} {{ index }}
            <button @click="removeEaten(index);">-</button>
          </li>
        </ul>
    </div>
</template>

<script>
import calculator from '@/components/Calculator.vue';
import { translateIds } from '@/functions';

export default {
  name: 'eaten',
  props: ['filteredIds', 'resultsDetailsWantedIds', 'allDetails'],
  components: {
    calculator,
  },
  data() {
    return {
      predictor: '',
      toCalc: [],
      productWeight: '',
      listEaten: [],
    };
  },
  methods: {
    handleInput() {
      console.log(this.predictor);
    },
    addToCalculation() {
      const obj = {};
      for (let i = 0; i < this.filteredIds.length; i += 1) {
        obj[translateIds(this.filteredIds[i].attr_id)] = this.filteredIds[i].value;
      }
      obj.weight = this.allDetails[0].serving_weight_grams;
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
