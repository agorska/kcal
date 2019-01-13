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
            @click="addToCalculation()"
        />
        <calculator
            :toCalc = "toCalc"
            :predictor = "predictor"
        />
    </div>
</template>

<script>
import calculator from '@/components/Calculator.vue';
import { translateIds } from '@/functions';

export default {
  name: 'eaten',
  props: ['filteredIds', 'resultsDetailsWantedIds'],
  components: {
    calculator,
  },
  data() {
    return {
      predictor: '',
      toCalc: [],
    };
  },
  methods: {
    handleInput() {
      console.log(this.predictor);
    },
    addToCalculation() {
      const obj = {};
      for (let i = 0; i < this.filteredIds.length; i++) {
        obj[translateIds(this.filteredIds[i].attr_id)] = this.filteredIds[i].value;
      }
      this.toCalc.push(obj);
    },
  },
};
</script>
